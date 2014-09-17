<?php
namespace Topxia\MobileBundleV2\Service\Impl;

use Topxia\MobileBundleV2\Service\BaseService;
use Topxia\MobileBundleV2\Service\CourseService;
use Topxia\Common\ArrayToolkit;

class CourseServiceImpl extends BaseService implements CourseService
{
	public function getVersion()
	{
		var_dump("CourseServiceImpl->getVersion");
		return $this->formData;
	}

	public function getCourseTheads()
	{
		$user = $this->controller->getUserByToken($this->request);
		$conditions = array(
            		'userId' => $user['id'],
            		'type' => 'question',
        		);

		$start = (int) $this->getParam("start", 0);
		$limit = (int) $this->getParam("limit", 10);
		$total = $this->controller->getThreadService()->searchThreadCount($conditions);

        		$threads = $this->controller->getThreadService()->searchThreads(
            		$conditions,
            		'createdNotStick',
            		$start,
            		$limit
        		);

        		$courses = $this->controller->getCourseService()->findCoursesByIds(ArrayToolkit::column($threads, 'courseId'));
        		$users = $this->controller->getUserService()->findUsersByIds(ArrayToolkit::column($threads, 'latestPostUserId'));

        		$users = $this->controller->filterUsers($users);
        		return array(
			"start"=>$start,
			"limit"=>$limit,
			"total"=>$total,
			'threads'=>$this->filterThreads($threads, $courses, $users),
			);
	}

	private function filterThreads($threads, $courses, $users)
	{
		if (empty($threads)) {
            		return array();
        		}

        		return array_map(function($thread) use ($courses, $users) {

        			$thread["courseTitle"]  = "";
        			if (isset($courses[$thread["courseId"]])) {
        				$course = $courses[$thread["courseId"]];
        				$thread["courseTitle"] = $course["title"];
            			$thread['coutsePicture'] = $course["largePicture"];
        			}
            		$thread['latestPostUser'] = $users[$thread["latestPostUserId"]];
            		$thread['createdTime'] = date('c', $thread['createdTime']);
            		$thread['latestPostTime'] = date('c', $thread['latestPostTime']);
            		return $thread;
        		}, $threads);
	}

	public function getThread()
	{

	}

	public function getFavoriteCoruse()
	{
		$user = $this->controller->getUserByToken($this->request);
		$start = (int) $this->getParam("start", 0);
		$limit = (int) $this->getParam("limit", 10);

		$total = $this->controller->getCourseService()->findUserFavoritedCourseCount($user['id']);
		$courses = $this->controller->getCourseService()->findUserFavoritedCourses($user['id'], $start, $limit);

		return array(
			"start"=>$start,
			"limit"=>$limit,
			"total"=>$total,
			"data"=>$this->controller->filterCourses($courses)
			);
	}

	public function getCourseNotice()
	{
		$courseId = $this->getParam("courseId");
		if (empty($courseId)) {
			return array();
		}
		$announcements = $this->controller->getCourseService()->findAnnouncements($courseId, 0, 10);
		return $this->filterAnnouncements($announcements);
	}

	private function filterAnnouncements($announcements)
	{
		return array_map(function($announcement){
			unset($announcement["userId"]);
			unset($announcement["courseId"]);
			unset($announcement["updatedTime"]);
			$announcement["createdTime"] = date('Y-m-d h:i:s', $announcement['createdTime']);
			return $announcement;
		}, $announcements);
	}

	private function filterAnnouncement($announcement)
	{
		return $this->filterAnnouncements(array($announcement));
	}

	public function getReviews()
	{
		$courseId = $this->getParam("courseId");

		$start = (int) $this->getParam("start", 0);
		$limit = (int) $this->getParam("limit", 10);
		$total = $this->controller->getReviewService()->getCourseReviewCount($courseId);
		$reviews = $this->controller->getReviewService()->findCourseReviews($courseId, $start, $limit);
		$reviews = $this->controller->filterReviews($reviews);
		return array(
			"start"=>$start,
			"limit"=>$limit,
			"total"=>$total,
			"data"=>$reviews
			);
	}


	public function favoriteCourse()
	{
        		$user = $this->controller->getUserByToken($this->request);
        		$courseId = $this->getParam("courseId");

        		if (empty($user) || !$user->isLogin()) {
            		return $this->createErrorResponse('not_login', "您尚未登录，不能收藏课程！");
        		}

        		if (!$this->controller->getCourseService()->hasFavoritedCourse($courseId)) {
            		$this->controller->getCourseService()->favoriteCourse($courseId);
        		}

        		return true;
	}

	public function getTeacherCourses()
	{
		$userId = $this->getParam("userId");
		if (empty($userId)) {
			return array();
		}
		$courses = $this->controller->getCourseService()->findUserTeachCourses(
	            	$userId, 0, 10
	        	);
		$courses = $this->controller->filterCourses($courses);
		return $courses;
	}

	public function unFavoriteCourse()
	{
		$user = $this->controller->getUserByToken($this->request);
        		$courseId = $this->getParam("courseId");

        		if (empty($user) || !$user->isLogin()) {
            		return $this->createErrorResponse('not_login', "您尚未登录，不能收藏课程！");
        		}

        		if (!$this->controller->getCourseService()->hasFavoritedCourse($courseId)) {
            		return $this->createErrorResponse('runtime_error', "您尚未收藏课程，不能取消收藏！");
        		}

        		$this->controller->getCourseService()->unfavoriteCourse($courseId);

        		return true;
	}

	public function unLearnCourse()
	{	
		$courseId = $this->getParam("courseId");
        		$user = $this->controller->getUserByToken($this->request);
        		list($course, $member) = $this->controller->getCourseService()->tryTakeCourse($courseId);
        
        		if (empty($member) or empty($member['orderId'])) {
            		return $this->createErrorResponse('not_member', '您不是课程的学员或尚未购买该课程，不能退学。');
        		}

        		$order = $this->controller->getOrderService()->getOrder($member['orderId']);
        		if (empty($order)) {
            		return $this->createErrorResponse( 'order_error', '订单不存在，不能退学。');
            	}

        		$reason = $this->getParam("reason", "");
        		$amount = $this->getParam("amount", 0);

        		$refund = $this->getCourseOrderService()->applyRefundOrder($member['orderId'], $amount, $reason, $this->container);
		return $refund;
	}

	public function getCourse()
	{	
		$user = $this->controller->getUserByToken($this->request);
		$courseId = $this->getParam("courseId");
		$course = $this->controller->getCourseService()->getCourse($courseId);

		if (empty($course)) {
		            $error = array('error' => 'not_found', 'message' => "课程#{$courseId}不存在。");
		            return $error;
		}

        		if ($course['status'] != 'published') {
            		$error = array('error' => 'course_not_published', 'message' => "课程#{$courseId}未发布或已关闭。");
            		return $error;
        		}

        		$userFavorited = $user->isLogin() ? $this->controller->getCourseService()->hasFavoritedCourse($courseId) : false;

		$vipLevels = $this->controller->getLevelService()->searchLevels(array('enabled' => 1), 0, 100);

		$member = $user->isLogin() ? $this->controller->getCourseService()->getCourseMember($course['id'], $user['id']) : null;
     		$member = $this->previewAsMember($member, $courseId, $user);
        		return array(
        			"course"=>$this->controller->filterCourse($course),
        			"userFavorited"=>$userFavorited,
        			"member"=>$member,
        			"vipLevels"=>$vipLevels
        			);
	}

	public function searchCourse()
	{
		$search = $this->getParam("search", '');
		$conditions['title'] = $search;
		return $this->findCourseByConditions($conditions);
	}

	public function getCourses()
	{
		$categoryId = (int) $this->getParam("categoryId", 0);
		$conditions['categoryId'] = $categoryId;
		return $this->findCourseByConditions($conditions);
	}

	private function findCourseByConditions($conditions)
	{
		$conditions['status'] = 'published';
        		$conditions['type'] = 'normal';

		$start = (int) $this->getParam("start", 0);
		$limit = (int) $this->getParam("limit", 10);
		$total = $this->controller->getCourseService()->searchCourseCount($conditions);

		$sort = $this->getParam("sort", "latest");
		$conditions['sort'] = $sort;

        		$courses = $this->controller->getCourseService()->searchCourses($conditions, $sort, $start, $limit);
		$result = array(
			"start"=>$start,
			"limit"=>$limit,
			"totla"=>$total,
			"data"=>$this->controller->filterCourses($courses)
			);
		return $result;
	}

	public function getLearnedCourse()
	{
		$user = $this->controller->getUserByToken($this->request);
		if (!$user->isLogin()) {
            		return $this->createErrorResponse('not_login', "您尚未登录！");
        		}

		$start = (int) $this->getParam("start", 0);
		$limit = (int) $this->getParam("limit", 10);
        		$total = $this->controller->getCourseService()->findUserLeanedCourseCount($user['id']);
        		$courses = $this->controller->getCourseService()->findUserLeanedCourses($user['id'], $start, $limit);
        		
        		$result = array(
			"start"=>$start,
			"limit"=>$limit,
			"total"=>$total,
			"data"=> $this->controller->filterCourses($courses)
			);
		return $result;
	}

	public function getLearningCourse()
	{
		$user = $this->controller->getUserByToken($this->request);
		if (!$user->isLogin()) {
            		return $this->createErrorResponse('not_login', "您尚未登录！");
        		}

		$start = (int) $this->getParam("start", 0);
		$limit = (int) $this->getParam("limit", 10);
        		$total = $this->controller->getCourseService()->findUserLeaningCourseCount($user['id']);
        		$courses = $this->controller->getCourseService()->findUserLeaningCourses($user['id'], $start, $limit);
        		
        		$result = array(
			"start"=>$start,
			"limit"=>$limit,
			"total"=>$total,
			"data"=> $this->controller->filterCourses($courses)
			);
		return $result;
	}
}