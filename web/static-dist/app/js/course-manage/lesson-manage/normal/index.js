webpackJsonp(["app/js/course-manage/lesson-manage/normal/index"],{"37f7b53294952a0a83bb":function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=s("cd078759ac479d74803f"),i=a(n),o=s("7ab4a89ebadbfdecc2bf"),r=a(o),l=s("4602c3f5fe7ad9e3e91d"),c=a(l),u=s("1ff717687cc04d94af8f"),d=a(u),h=s("3b1883fc74dc0f9509af"),f=a(h),m=s("b86304422ee62173feb9"),g=s("397a3febc3cd42b42453"),p=a(g),k=s("4e68e437f5b716377a9d");new(function(e){function t(e){return(0,r.default)(this,t),(0,d.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e))}return(0,f.default)(t,e),(0,c.default)(t,[{key:"_flushTaskNumber",value:function(){this.$taskNumber||(this.$taskNumber=$("#task-num"));var e=$(".js-task-manage-item:not(.js-optional-task)").length;this.$taskNumber.text(e)}}]),t}(p.default))("#sortable-list"),(0,m.hiddenUnpublishTask)(),(0,m.addLesson)(),(0,k.TaskListHeaderFixed)()},"397a3febc3cd42b42453":function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s("7ab4a89ebadbfdecc2bf"),i=a(n),o=s("4602c3f5fe7ad9e3e91d"),r=a(o),l=s("8f840897d9471c8c1fbd"),c=a(l),u=function(){function e(t){(0,i.default)(this,e),this.$element=$(t),this._sort(),this._event()}return(0,r.default)(e,[{key:"_event",value:function(){var e=this;this.$element.on("addItem",function(t,s){e.addItem(s),e.sortList()}),$("body").on("click","[data-position]",function(t){var s=$(this);e.position=s.data("position"),e.type=s.data("type")}),this._deleteChapter(),this._collapse(),this._publish(),this._createTask(),this._optional()}},{key:"_collapse",value:function(){var e=['<i class="es-icon es-icon-chevronright cd-mr16"></i>','<i class="es-icon es-icon-keyboardarrowdown cd-mr16"></i>'];this.$element.on("click",".js-toggle-show",function(t){var s=$(t.currentTarget);s.toggleClass("toogle-hide");var a=s.closest(".task-manage-item"),n=a.hasClass("js-task-manage-chapter")?".js-task-manage-chapter":".js-task-manage-chapter,.js-task-manage-unit",i=a.nextUntil(n);s.hasClass("js-toggle-unit")?i.toggleClass("unit-hide"):i=i.not(".unit-hide"),i.stop().animate({height:"toggle",opacity:"toggle"},"fast"),s.hasClass("toogle-hide")?s.html(e[0]):s.html(e[1])})}},{key:"addItem",value:function(e){var t=$(e),s=$("#"+t.attr("id"));if(s.length>0)return s.replaceWith(t),void this.afterAddItem(t);switch(this.type){case"chapter":var a=this.$element.find("#chapter-"+this.position),n=a.nextUntil(".js-task-manage-chapter").last();0==n.length?a.after(t):n.after(t);break;case"task":this.$element.find("#chapter-"+this.position+" .js-lesson-box").append(t);break;case"lesson":var i=this.$element.find("#chapter-"+this.position),o=i.nextUntil(".js-task-manage-unit,.js-task-manage-chapter").last();0==o.length?i.after(t):o.after(t);break;default:this.$element.append(t)}$('[data-toggle="tooltip"]').tooltip(),this.handleEmptyShow(),this._flushTaskNumber(),this.clearPosition(),this.afterAddItem(t)}},{key:"clearPosition",value:function(){this.position="",this.type=""}},{key:"_deleteChapter",value:function(){var e=this;this.$element.on("click",".js-delete",function(t){var s=$(this),a=s.closest(".task-manage-item"),n=e._getDeleteText(s);cd.confirm({title:Translator.trans("site.delete"),content:n,okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",function(){"task"==s.data("type")&&0==a.siblings().length&&a.closest(".js-task-manage-lesson").remove(),a.remove(),e.handleEmptyShow(),e._flushTaskNumber(),$.post(s.data("url"),function(t){e.sortList()})})})}},{key:"_getDeleteText",value:function(e){return"task"==e.data("type")?Translator.trans("course.manage.task_delete_hint",{taskName:e.data("name")}):Translator.trans("course.manage.chapter_delete_hint",{name:e.data("name")})}},{key:"_sort",value:function(){var e=this,t=void 0;(0,c.default)({element:e.$element,ajax:!1,group:"nested",placeholder:'<li class="placeholder task-dragged-placeholder"></li>',isValidTarget:function(t,s){return e._sortRules(t,s)},onDragStart:function(e,s,a){var n=e.offset(),i=s.rootGroup.pointer;t={left:i.left-n.left,top:i.top-n.top},a(e,s)},onDrag:function(e,s){var a=e.height();$(".task-dragged-placeholder").css({height:a,"background-color":"#eee"}),e.css({left:s.left-t.left,top:s.top-t.top})}},function(t){e.sortList()})}},{key:"_sortRules",value:function(e,t){return(!e.hasClass("js-task-manage-item")||t.target.closest(".js-task-manage-lesson").attr("id")==e.closest(".js-task-manage-lesson").attr("id"))&&(!((e.hasClass("js-task-manage-unit")||e.hasClass("js-task-manage-chapter"))&&!t.target.hasClass("sortable-list"))&&(!e.hasClass("js-task-manage-lesson")||!t.target.hasClass("js-lesson-box")))}},{key:"handleEmptyShow",value:function(){0===$("#sortable-list").find("li").length?$(".js-task-empty").removeClass("hidden"):$(".js-task-empty").addClass("hidden")}},{key:"sortList",value:function(){var e=[];this.$element.find(".task-manage-item").each(function(){e.push($(this).attr("id"))}),$.post(this.$element.data("sortUrl"),{ids:e},function(e){}),this.sortablelist()}},{key:"sortablelist",value:function(){for(var e=[".js-task-manage-lesson",".js-task-manage-chapter",".js-task-manage-item:not(.js-optional-task)"],t=0;t<e.length;t++)this._sortNumberByClassName(e[t]);this._sortUnitNumber()}},{key:"_sortNumberByClassName",value:function(e){var t=1;this.$element.find(e).each(function(){$(this).find(".number").text(t++)})}},{key:"_sortUnitNumber",value:function(){var e=void 0;this.$element.find(".js-task-manage-chapter").each(function(){var t=$(this).nextUntil(".js-task-manage-chapter").filter(".js-task-manage-unit");e=1,t.each(function(){$(this).find(".number").text(e++)})})}},{key:"_publish",value:function(){var e=this,t={class:".js-publish-item, .js-delete, .js-lesson-unpublish-status",oppositeClas:".js-unpublish-item",flag:!1};this.$element.on("click",".js-unpublish-item",function(s){var a=$(s.target);t.success=Translator.trans("course.manage.task_unpublish_success_hint"),t.danger=Translator.trans("course.manage.task_unpublish_fail_hint")+":",e.toggleOptional(a,self,t)}),this.$element.on("click",".js-publish-item",function(s){var a=$(s.target);t.success=Translator.trans("course.manage.task_publish_success_hint"),t.danger=Translator.trans("course.manage.task_publish_fail_hint")+":",e.toggleOptional(a,self,t)})}},{key:"_flushTaskNumber",value:function(){this.$taskNumber||(this.$taskNumber=$("#task-num"));var e=$(".js-settings-item.active").length;this.$taskNumber.text(e)}},{key:"_createTask",value:function(){this.$element.on("click",".js-create-task-btn",function(e){var t=$(this).data("url");$.get(t,function(e){e.code?($("#modal").html(""),$("#modal").append(e.html),$("#modal").modal({backdrop:"static",show:!0})):cd.message({type:"danger",message:Translator.trans(e.message)})}).fail(function(e){cd.message({type:"danger",message:e.responseJSON.error.message})})})}},{key:"_optional",value:function(){var e=this,t={class:".js-set-optional",oppositeClas:".js-unset-optional,.js-lesson-option-tag",success:Translator.trans("site.save_success_hint"),danger:Translator.trans("site.save_error_hint")+":",flag:!0};this.$element.on("click",".js-set-optional",function(s){var a=$(s.target);e.toggleOptional(a,e,t)}),this.$element.on("click",".js-unset-optional",function(s){var a=$(s.target);e.toggleOptional(a,e,t)})}},{key:"toggleOptional",value:function(e,t,s){var a=e.closest(".task-manage-item"),n=a.find(s.class),i=a.find(s.oppositeClas);$.post(e.data("url"),function(e){n.toggleClass("hidden"),i.toggleClass("hidden"),s.flag&&t.sortList(),cd.message({type:"success",message:s.success})}).fail(function(e){cd.message({type:"danger",message:s.danger+e.responseJSON.error.message})})}},{key:"afterAddItem",value:function(e){}}]),e}();t.default=u},"4e68e437f5b716377a9d":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TaskListHeaderFixed=t.TabChange=t.showSettings=t.publishCourse=t.deleteCourse=t.closeCourse=void 0;var a=s("48bb97626aecb1ede6bc"),n=(t.closeCourse=function(){$("body").on("click",".js-close-course",function(e){var t=$(e.currentTarget);cd.confirm({title:Translator.trans("site.close"),content:Translator.trans("course.manage.close_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",function(){$.post(t.data("checkUrl"),function(e){if(e.warn)return void cd.confirm({title:Translator.trans("site.close"),content:Translator.trans(e.message),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",function(){n(t)});n(t)})})})},function(e){$.post(e.data("url"),function(e){e.success?(cd.message({type:"success",message:Translator.trans("course.manage.close_success_hint")}),location.reload()):cd.message({type:"danger",message:Translator.trans("course.manage.close_fail_hint")+":"+e.message})})});t.deleteCourse=function(){$("body").on("click",".js-delete-course",function(e){cd.confirm({title:Translator.trans("site.delete"),content:Translator.trans("course.manage.delete_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",function(){$.post($(e.currentTarget).data("url"),function(e){e.success?(cd.message({type:"success",message:Translator.trans("site.delete_success_hint")}),e.redirect?window.location.href=e.redirect:location.reload()):cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")+":"+e.message})})})})},t.publishCourse=function(){var e={title:"course.manage.publish_title",hint:"course.manage.publish_hint",success:"course.manage.publish_success_hint",fail:"course.manage.publish_fail_hint"};(0,a.publish)(".js-publish-course",e)},t.showSettings=function(){$("#sortable-list").on("click",".js-item-content",function(e){var t=$(e.currentTarget),s=t.closest(".js-task-manage-item");s.hasClass("active")?s.removeClass("active").find(".js-settings-list").stop().slideUp(500):(s.addClass("active").find(".js-settings-list").stop().slideDown(500),s.siblings(".js-task-manage-item.active").removeClass("active").find(".js-settings-list").hide())})},t.TabChange=function(){$('[data-role="tab"]').click(function(e){var t=$(this);$(t.data("tab-content")).removeClass("hidden").siblings('[data-role="tab-content"]').addClass("hidden")})},t.TaskListHeaderFixed=function(){var e=$(".js-task-list-header");if(e.length){var t=e.offset().top;$(window).scroll(function(s){$(window).scrollTop()>=t?e.addClass("fixed"):e.removeClass("fixed")})}}},b86304422ee62173feb9:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.hiddenUnpublishTask=function(){cd.onoff({el:".js-switch"}).on("change",function(e){var t=$(".js-switch"),s=t.data("url"),a=t.parent().hasClass("checked")?0:1;$.post(s,{status:a}).success(function(e){cd.message({type:"success",message:Translator.trans("site.save_success_hint")})}).error(function(e){cd.message({type:"danger",message:e.responseJSON.error.message})})})},t.addLesson=function(){$("body").on("click",".js-lesson-create-btn",function(e){var t=$(e.currentTarget).data("url");$.get(t,{}).success(function(e){$("#modal").html(""),$("#modal").append(e.html),$("#modal").modal({backdrop:"static",show:!0})}).error(function(e){cd.message({type:"danger",message:Translator.trans(e.responseJSON.error.message)})})})}}},["37f7b53294952a0a83bb"]);