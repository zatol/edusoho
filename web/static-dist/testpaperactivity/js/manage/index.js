!function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/",i(i.s=32)}([function(e,t,n){e.exports=!n(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,n){var m=n(4),v=n(2),g=n(13),y=n(15),$=n(21),S="prototype",x=function(e,t,n){var r,i,o,a=e&x.F,s=e&x.G,c=e&x.S,u=e&x.P,l=e&x.B,p=e&x.W,d=s?v:v[t]||(v[t]={}),f=d[S],h=s?m:c?m[t]:(m[t]||{})[S];for(r in s&&(n=t),n)(i=!a&&h&&void 0!==h[r])&&$(d,r)||(o=i?h[r]:n[r],d[r]=s&&"function"!=typeof h[r]?n[r]:l&&i?g(o,m):p&&h[r]==o?function(r){function e(e,t,n){if(this instanceof r){switch(arguments.length){case 0:return new r;case 1:return new r(e);case 2:return new r(e,t)}return new r(e,t,n)}return r.apply(this,arguments)}return e[S]=r[S],e}(o):u&&"function"==typeof o?g(Function.call,o):o,u&&((d.virtual||(d.virtual={}))[r]=o,e&x.R&&f&&!f[r]&&y(f,r,o)))};x.F=1,x.G=2,x.S=4,x.P=8,x.B=16,x.W=32,x.U=64,x.R=128,e.exports=x},function(e,t){var n=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},function(e,t,n){e.exports=n(11)},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var r=n(16),i=n(17),o=n(19),a=Object.defineProperty;t.f=n(0)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),i)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){var i=n(25);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),i(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,n){n(12),e.exports=n(2).parseInt},function(e,t,n){var r=n(1),i=n(22);r(r.G+r.F*(parseInt!=i),{parseInt:i})},function(e,t,n){var o=n(14);e.exports=function(r,i,e){if(o(r),void 0===i)return r;switch(e){case 1:return function(e){return r.call(i,e)};case 2:return function(e,t){return r.call(i,e,t)};case 3:return function(e,t,n){return r.call(i,e,t,n)}}return function(){return r.apply(i,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var r=n(7),i=n(20);e.exports=n(0)?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(5);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n){e.exports=!n(0)&&!n(6)(function(){return 7!=Object.defineProperty(n(18)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(5),i=n(4).document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},function(e,t,n){var i=n(5);e.exports=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(4).parseInt,i=n(23).trim,o=n(8),a=/^[-+]?0[xX]/;e.exports=8!==r(o+"08")||22!==r(o+"0x16")?function(e,t){var n=i(String(e),3);return r(n,t>>>0||(a.test(n)?16:10))}:r},function(e,t,n){function r(e,t,n){var r={},i=s(function(){return!!c[e]()||"​"!="​"[e]()}),o=r[e]=i?t(p):c[e];n&&(r[n]=o),a(a.P+a.F*i,"String",r)}var a=n(1),i=n(24),s=n(6),c=n(8),o="["+c+"]",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),p=r.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(l,"")),e};e.exports=r},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){e.exports=n(26)},function(e,t,n){n(27);var r=n(2).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},function(e,t,n){var r=n(1);r(r.S+r.F*!n(0),"Object",{defineProperty:n(7).f})},function(e,t,n){e.exports=n(30)},,function(e,t,n){n(31),e.exports=n(2).Date.now},function(e,t,n){var r=n(1);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},function(e,t,n){"use strict";n.r(t);var r=n(28),i=n.n(r),o=n(3),a=n.n(o),s=n(9),c=n.n(s),u=n(10),l=n.n(u);new(function(){function t(e){c()(this,t),this.$element=e,this.$form=this.$element.find("#step2-form"),this.$questionBankSelector=this.$element.find("#question-bank"),this.$testpaperSelector=this.$element.find("#testpaper-media"),this.$questionItemShow=this.$element.find("#questionItemShowDiv"),this.$scoreItem=this.$element.find(".js-score-form-group"),this._init()}return l()(t,[{key:"_init",value:function(){var t=this;Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours()%24==0?24:this.getHours()%24,"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(e)&&(e=e.replace(RegExp.$1,(1<RegExp.$1.length?2<RegExp.$1.length?"/u661f/u671f":"/u5468":"")+{0:"/u65e5",1:"/u4e00",2:"/u4e8c",3:"/u4e09",4:"/u56db",5:"/u4e94",6:"/u516d"}[this.getDay()+""])),t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e},this.setValidateRule(),this.initQuestionBankSelector(),this.initTestPaperSelector(),this.initSelectTestPaper(this.$testpaperSelector.select2("data")),this.initEvent(),this.initStepForm2(),window.ltc.on("getActivity",function(e){window.ltc.emit("returnActivity",{valid:t.validator.form(),data:window.ltc.getFormSerializeObject($("#step2-form"))})}),window.ltc.on("getValidate",function(e){window.ltc.emit("returnValidate",{valid:t.validator.form(),context:{score:t.$testpaperSelector.select2("data").score}}),window.ltc.emit("returnValidate",{valid:t.validator.form()})})}},{key:"setValidateRule",value:function(){$.validator.addMethod("arithmeticFloat",function(e,t){return this.optional(t)||/^[0-9]+(\.[0-9]?)?$/.test(e)},$.validator.format(Translator.trans("activity.testpaper_manage.arithmetic_float_error_hint")))}},{key:"initEvent",value:function(){var t=this;this.$element.find("#question-bank").on("change",function(e){return t.changeQuestionBank(e)}),this.$element.find("#testpaper-media").on("change",function(e){return t.changeTestPaper(e)}),this.$element.find("input[name=doTimes]").on("change",function(e){return t.showRedoInterval(e)}),this.$element.find('input[name="testMode"]').on("change",function(e){return t.startTimeCheck(e)})}},{key:"initStepForm2",value:function(){this.validator=this.$form.validate({onkeyup:!1,rules:{title:{required:!0,trim:!0,maxlength:50,course_title:!0},testpaperId:{required:!0,digits:!0,min:1},length:{required:!0,digits:!0},startTime:{required:function(){return 1==$('[name="doTimes"]:checked').val()&&"realTime"==$('[name="testMode"]:checked').val()},DateAndTime:function(){return 1==$('[name="doTimes"]:checked').val()&&"realTime"==$('[name="testMode"]:checked').val()}},redoInterval:{required:function(){return 0==$('[name="doTimes"]:checked').val()},arithmeticFloat:!0,max:1e9}},messages:{testpaperId:{required:Translator.trans("activity.testpaper_manage.media_error_hint"),min:Translator.trans("activity.testpaper_manage.media_error_hint")},redoInterval:{max:Translator.trans("activity.testpaper_manage.max_error_hint")}}})}},{key:"initSelectTestPaper",value:function(e){var t=a()(e.id);t?(this.getItemsTable(this.$testpaperSelector.data("getTestpaperItems"),t),$('input[name="title"]').val()||$('input[name="title"]').val(e.text),this.initScoreSlider()):($("#questionItemShowDiv").hide(),$("#score-condition").hide())}},{key:"initEmptyTestPaperSelector",value:function(){this.$testpaperSelector.select2({data:[{id:"0",text:Translator.trans("activity.testpaper_manage.media_required"),selected:!0}]})}},{key:"initAjaxTestPaperSelector",value:function(){this.$testpaperSelector.select2({ajax:{url:this.$testpaperSelector.data("url"),dataType:"json",quietMillis:250,data:function(e,t){return{keyword:e,page:t}},results:function(e,t){var n=[];return $.each(e.testPapers,function(e,t){n.push({id:t.id,text:t.name,score:t.score})}),{results:n,more:10*t<e.openCount}}},initSelection:function(e,t){var n=$("#testPaperName").val(),r=e.val(),i=$("#score-condition").data("score");a()(r)||(n=""),t({id:r,text:n||Translator.trans("activity.testpaper_manage.media_required"),score:i})},formatSelection:function(e){return e.text},dropdownAutoWidth:!0}),this.$testpaperSelector.removeClass("hidden")}},{key:"initQuestionBankSelector",value:function(){this.$questionBankSelector.select2({treeview:!0,dropdownAutoWidth:!0,treeviewInitState:"collapsed",placeholderOption:"first",formatResult:function(e){var t=(e.text+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />");return e.id?'<div class="select2-result-text"><span class="select2-match"></span><span><i class="es-icon es-icon-tiku"></i>'.concat(t,"</span></div>"):t},dropdownCss:{width:""}})}},{key:"initTestPaperSelector",value:function(){$("#testPaperName").val()?this.initAjaxTestPaperSelector():this.initEmptyTestPaperSelector()}},{key:"changeQuestionBank",value:function(){var t=$(".js-help-block");t.addClass("hidden"),this.$testpaperSelector.addClass("hidden"),this.$questionItemShow.hide(),this.$scoreItem.hide(),this.$testpaperSelector.val("0");var n,r,e=this.$questionBankSelector.select2("data").id;a()(e)?(n=(n=this.$questionBankSelector.data("url")).replace(/[0-9]/,e),r=this,$.post(n,function(e){return 0===e.totalCount?(t.addClass("color-danger").removeClass("hidden").text(Translator.trans("queston_bank.testpaper.empty_tips")).show(),void r.initEmptyTestPaperSelector()):0===e.openCount?(t.removeClass("color-danger").removeClass("hidden").text(Translator.trans("queston_bank.testpaper.no_open_tips")).show(),void r.initEmptyTestPaperSelector()):(r.$testpaperSelector.data("url",n),void r.initAjaxTestPaperSelector())}).error(function(e){cd.message({type:"danger",message:e.responseJson.error.message})})):this.initEmptyTestPaperSelector()}},{key:"changeTestPaper",value:function(){var e=this.$testpaperSelector.select2("data");this.initSelectTestPaper(e)}},{key:"showRedoInterval",value:function(e){1==$(e.currentTarget).val()?($("#lesson-redo-interval-field").closest(".form-group").hide(),$(".starttime-check-div").show()):($("#lesson-redo-interval-field").closest(".form-group").show(),$(".starttime-check-div").hide())}},{key:"startTimeCheck",value:function(e){"realTime"==$(e.currentTarget).val()?($(".starttime-input").removeClass("hidden"),this.dateTimePicker()):$(".starttime-input").addClass("hidden")}},{key:"changeCondition",value:function(e){"score"!=$(e.currentTarget).find("option:selected").val()?$(".js-score-form-group").addClass("hidden"):$(".js-score-form-group").removeClass("hidden")}},{key:"getItemsTable",value:function(e,t){$.post(e,{testpaperId:t},function(e){$("#questionItemShowTable").html(e),$("#questionItemShowDiv").show()})}},{key:"dateTimePicker",value:function(){var t=this,e=new Date,n=$("#startTime");!n.is(":visible")||""!=n.val()&&"0"!=n.val()||n.val(e.Format("yyyy-MM-dd hh:mm")),n.datetimepicker({autoclose:!0,format:"yyyy-mm-dd hh:ii",language:document.documentElement.lang,minView:"hour",endDate:new Date(i()()+31536e7)}).on("show",function(e){t.$form.height(t.$form.height()+270)}).on("hide",function(e){t.validator.form(),t.$form.height(t.$form.height()-270)}).on("changeDate",function(e){}),n.datetimepicker("setStartDate",e)}},{key:"initScoreSlider",value:function(){var r=0,r=this.$testpaperSelector.select2("data").score?this.$testpaperSelector.select2("data").score:$("#score-condition").data("score");$(".js-score-total").text(r);var e=Math.round(r*$("#score-condition").data("pass"));r=a()(r);var t=document.getElementById("score-slider"),n={start:e,connect:[!0,!1],tooltips:[!0],step:1,range:{min:0,max:r}};this.scoreSlider&&this.scoreSlider.destroy(),this.scoreSlider=noUiSlider.create(t,n),t.noUiSlider.on("update",function(e,t){var n=(100*(e[t]/r)).toFixed(0);$(".noUi-tooltip").text("".concat(n,"%")),$(".js-score-tooltip").css("left","".concat(n,"%")),$(".js-passScore").text(Math.round(n/100*r)),$("#finishData").val(n/100)});var i=Translator.trans("activity.testpaper_manage.qualified_score_hint",{passScore:'<span class="js-passScore">'+e+"</span>"}),o='<div class="score-tooltip js-score-tooltip"><div class="tooltip top" role="tooltip" style="">\n      <div class="tooltip-arrow"></div>\n      <div class="tooltip-inner ">\n        '.concat(i,"\n      </div>\n      </div></div>");$(".noUi-handle").append(o),$(".noUi-tooltip").text("".concat((e/r*100).toFixed(0),"%")),$(".js-score-tooltip").css("left","".concat((e/r*100).toFixed(0),"%")),$("#score-condition").show()}}]),t}())($("#iframe-content"))}]);