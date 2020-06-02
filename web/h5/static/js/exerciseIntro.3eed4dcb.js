(window.webpackJsonp=window.webpackJsonp||[]).push([["exerciseIntro"],{"391c":function(t,e,i){"use strict";i("e17f");var n=i("2241");i("456d"),i("ac6a"),e.a={methods:{canDoing:function(t,e){return new Promise((function(i,r){if(t&&"doing"===t.status){var s="exercise-".concat(e,"-").concat(t.id),a=JSON.parse(localStorage.getItem(s));a=a?Object.keys(a).forEach((function(t){a[t]=a[t].filter((function(t){return""!==t}))})):{},n.a.confirm({title:"提示",cancelButtonText:"放弃做题",confirmButtonText:"继续做题",message:"您有未完成的练习，是否继续？"}).then((function(){i()})).catch((function(){r({answer:a})}))}}))}}}},c8a5:function(t,e,i){"use strict";var n=i("3ce7"),r=i("faa5");e.a={data:function(){return{reportIntervalTime:null,reportLearnTime:null,reportFinishCondition:null,reportData:{courseId:null,taskId:null},reportResult:null,isFinish:!1,reportType:null,learnTime:0}},beforeDestroy:function(){this.clearReportIntervalTime()},methods:{initReportData:function(t,e,i){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.clearReportIntervalTime(),this.reportData={courseId:t,taskId:e},this.reportType=i,this.isFinish=!1,this.reportIntervalTime=null,this.reportLearnTime=null,this.reportResult=null,this.learnTime=0,this.reportFinishCondition=null,n&&this.initReportEvent()},initReportEvent:function(){this.reprtData(),this.intervalReportData(),this.intervalReportLearnTime()},getCourseData:function(t,e){var i=this,r={courseId:t,taskId:e};return new Promise((function(t,e){n.a.getCourseData({query:r}).then((function(e){i.reportFinishCondition=e.activity.finishCondition,t(e)})).catch((function(t){e(t)}))}))},reprtData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"doing",i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null!==this.reportData.courseId&&null!==this.reportData.taskId&&(!this.isFinish||i)){var s={};if("doing"===e){if(null!==this.reportResult){var a=this.reportResult.lastTime;s={lastTime:a}}r&&(s.watchTime=r)}var o={courseId:this.reportData.courseId,taskId:this.reportData.taskId,events:e};return new Promise((function(e,i){n.a.reportTask({query:o,data:s}).then((function(i){t.handleReprtResult(i),e(i)})).catch((function(t){i(t)}))}))}},handleReprtResult:function(t){this.reportResult=t,"finish"===t.result.status?(this.isFinish=!0,this.$store.commit(r.r,"finish"),this.$store.commit("course/".concat(r.v),t.completionRate)):this.$store.commit(r.r,"start")},intervalReportLearnTime:function(){var t=this;this.reportLearnTime=setInterval((function(){t.checkoutTime(),t.learnTime++}),1e3)},intervalReportData:function(){var t=this,e=60*(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*1e3;this.reportIntervalTime=setInterval((function(){t.reprtData("doing",!0)}),e)},checkoutTime:function(){this.reportFinishCondition&&"time"===this.reportFinishCondition.type&&parseInt(this.learnTime/60,10)>=parseInt(this.reportFinishCondition.data,10)&&this.reprtData("finish")},clearReportIntervalTime:function(){clearInterval(this.reportIntervalTime),clearInterval(this.reportLearnTime),this.reportIntervalTime=null,this.reportLearnTime=null}}}},dad4:function(t,e,i){"use strict";i.r(e),i("e7e5");var n=i("d399"),r=i("db72"),s=i("3ce7"),a=i("2f62"),o=i("391c"),c=i("c8a5"),u={name:"ExerciseIntro",mixins:[o.a,c.a],data:function(){return{courseId:null,taskId:null,exercise:null}},computed:Object(r.a)({hasResult:function(){return!!this.exercise.latestExerciseResult}},Object(a.d)({isLoading:function(t){return t.isLoading},user:function(t){return t.user}})),created:function(){this.getInfo(),this.initReport()},beforeRouteEnter:function(t,e,i){document.getElementById("app").style.background="#f6f6f6",i()},beforeRouteLeave:function(t,e,i){document.getElementById("app").style.background="",i()},methods:Object(r.a)({},Object(a.b)("course",["handExercisedo"]),{getInfo:function(){var t=this;this.courseId=this.$route.query.courseId,this.taskId=this.$route.query.taskId,s.a.getExerciseIntro({query:{courseId:this.courseId,taskId:this.taskId}}).then((function(e){t.exercise=e.exercise,t.interruption()}))},initReport:function(){this.initReportData(this.$route.query.courseId,this.taskId,"exercise",!1)},interruption:function(){var t=this;this.canDoing(this.exercise.latestExerciseResult,this.user.id).then((function(){t.startExercise()})).catch((function(e){var i=e.answer;t.submitExercise(i)}))},showResult:function(){this.$router.push({name:"exerciseResult",query:{exerciseId:this.exercise.id,exerciseResultId:this.exercise.latestExerciseResult.id,courseId:this.courseId,taskId:this.taskId}})},startExercise:function(){this.$router.push({name:"exerciseDo",query:{targetId:this.taskId,exerciseId:this.exercise.id,courseId:this.courseId},params:{KeepDoing:!0}})},submitExercise:function(t){var e=this,i={answer:t,exerciseId:this.exercise.id,userId:this.user.id,exerciseResultId:this.exercise.latestExerciseResult.id};this.handExercisedo(i).then((function(t){e.reprtData("finish"),e.showResult()})).catch((function(t){n.a.fail(t.message)}))}})},l=i("a6c2"),h=Object(l.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isLoading?i("e-loading"):t._e(),t.exercise?i("div",{staticClass:"intro-body"},[i("van-panel",{staticClass:"panel intro-panel",attrs:{title:"练习名称"}},[i("div",{staticClass:"intro-panel__content intro-panel__content--title"},[t._v(t._s(t.exercise.name))])]),i("van-panel",{staticClass:"panel intro-panel",attrs:{title:"题目数量"}},[i("div",{staticClass:"intro-panel__content"},[t._v("\n        共计 "+t._s(t.exercise.itemCount)+" 题\n      ")])])],1):t._e(),t.exercise?i("div",{staticClass:"intro-footer"},[t.hasResult?i("van-button",{staticClass:"intro-footer__btn",attrs:{type:"primary"},on:{click:t.showResult}},[t._v("查看结果")]):i("van-button",{staticClass:"intro-footer__btn",attrs:{type:"primary"},on:{click:function(e){return t.startExercise()}}},[t._v("开始答题")])],1):t._e()],1)}),[],!1,null,null,null);e.default=h.exports}}]);