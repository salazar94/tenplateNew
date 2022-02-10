(self.webpackChunkenlink=self.webpackChunkenlink||[]).push([[9916],{9916:(e,n,o)=>{"use strict";o.r(n),o.d(n,{NzDemoMessageModule:()=>k});var t=o(3423),s=o(9358),Z=o(8058),a=o(4453),g=o(945);const i=[Z.gR,a.sL,g.PV];var r=o(4512),d=o(7716),u=o(6175),c=o(8925),m=o(4514),T=o(7420),A=o(6704),l=o(9374);let q=(()=>{class e{constructor(e){this.message=e}createBasicMessage(){this.message.info("This is a normal message")}}return e.\u0275fac=function(n){return new(n||e)(d.Y36(Z.dD))},e.\u0275cmp=d.Xpm({type:e,selectors:[["nz-demo-message-info"]],decls:2,vars:1,consts:[["nz-button","",3,"nzType","click"]],template:function(e,n){1&e&&(d.TgZ(0,"button",0),d.NdJ("click",function(){return n.createBasicMessage()}),d._uU(1,"Display normal message"),d.qZA()),2&e&&d.Q6J("nzType","primary")},directives:[a.ix,l.dQ,m.w],encapsulation:2}),e})(),p=(()=>{class e{constructor(e){this.message=e}createBasicMessage(){this.message.success("This is a prompt message for success, and it will disappear in 10 seconds",{nzDuration:1e4})}}return e.\u0275fac=function(n){return new(n||e)(d.Y36(Z.dD))},e.\u0275cmp=d.Xpm({type:e,selectors:[["nz-demo-message-duration"]],decls:2,vars:1,consts:[["nz-button","",3,"nzType","click"]],template:function(e,n){1&e&&(d.TgZ(0,"button",0),d.NdJ("click",function(){return n.createBasicMessage()}),d._uU(1,"Customized display duration"),d.qZA()),2&e&&d.Q6J("nzType","default")},directives:[a.ix,l.dQ,m.w],encapsulation:2}),e})();var z=o(4612);let _=(()=>{class e{constructor(e){this.message=e}startShowMessages(){this.message.loading("Action in progress",{nzDuration:2500}).onClose.pipe((0,z.b)(()=>this.message.success("Loading finished",{nzDuration:2500}).onClose),(0,z.b)(()=>this.message.info("Loading finished is finished",{nzDuration:2500}).onClose)).subscribe(()=>{console.log("All completed!")})}}return e.\u0275fac=function(n){return new(n||e)(d.Y36(Z.dD))},e.\u0275cmp=d.Xpm({type:e,selectors:[["nz-demo-message-close"]],decls:2,vars:1,consts:[["nz-button","",3,"nzType","click"]],template:function(e,n){1&e&&(d.TgZ(0,"button",0),d.NdJ("click",function(){return n.startShowMessages()}),d._uU(1,"Display a sequence of messages"),d.qZA()),2&e&&d.Q6J("nzType","default")},directives:[a.ix,l.dQ,m.w],encapsulation:2}),e})(),U=(()=>{class e{constructor(e){this.message=e}createMessage(e){this.message.create(e,`This is a message of ${e}`)}}return e.\u0275fac=function(n){return new(n||e)(d.Y36(Z.dD))},e.\u0275cmp=d.Xpm({type:e,selectors:[["nz-demo-message-other"]],decls:6,vars:0,consts:[["nz-button","",3,"click"]],template:function(e,n){1&e&&(d.TgZ(0,"button",0),d.NdJ("click",function(){return n.createMessage("success")}),d._uU(1,"Success"),d.qZA(),d.TgZ(2,"button",0),d.NdJ("click",function(){return n.createMessage("error")}),d._uU(3,"Error"),d.qZA(),d.TgZ(4,"button",0),d.NdJ("click",function(){return n.createMessage("warning")}),d._uU(5,"Warning"),d.qZA())},directives:[a.ix,l.dQ,m.w],styles:["[nz-button][_ngcontent-%COMP%]{margin-right:8px}"]}),e})(),h=(()=>{class e{constructor(e){this.message=e}createBasicMessage(){const e=this.message.loading("Action in progress..",{nzDuration:0}).messageId;setTimeout(()=>{this.message.remove(e)},2500)}}return e.\u0275fac=function(n){return new(n||e)(d.Y36(Z.dD))},e.\u0275cmp=d.Xpm({type:e,selectors:[["nz-demo-message-loading"]],decls:2,vars:1,consts:[["nz-button","",3,"nzType","click"]],template:function(e,n){1&e&&(d.TgZ(0,"button",0),d.NdJ("click",function(){return n.createBasicMessage()}),d._uU(1,"Display a loading indicator"),d.qZA()),2&e&&d.Q6J("nzType","default")},directives:[a.ix,l.dQ,m.w],encapsulation:2}),e})(),f=(()=>{class e{constructor(){this.expanded=!1}goLink(e){window&&(window.location.hash=e)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(e=>{e.nzExpanded=this.expanded,e.expandCode(this.expanded),e.check()})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d.Xpm({type:e,selectors:[["nz-demo-message"]],viewQuery:function(e,n){if(1&e&&d.Gf(r.G,5),2&e){let e;d.iGM(e=d.CRH())&&(n.codeBoxes=e)}},decls:323,vars:22,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-message-demo-info","nzTitle","\u666e\u901a\u63d0\u793a"],["nzHref","#components-message-demo-other","nzTitle","\u5176\u4ed6\u63d0\u793a\u7c7b\u578b"],["nzHref","#components-message-demo-duration","nzTitle","\u4fee\u6539\u5ef6\u65f6"],["nzHref","#components-message-demo-loading","nzTitle","\u52a0\u8f7d\u4e2d"],["nzHref","#components-message-demo-close","nzTitle","\u7ed3\u675f\u4e8b\u4ef6"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u666e\u901a\u63d0\u793a","nzSelector","nz-demo-message-info","nzGenerateCommand","ng g ng-zorro-antd:message-info <name>","nzComponentName","NzDemoMessageInfoComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["demo",""],["intro",""],["nzTitle","\u4fee\u6539\u5ef6\u65f6","nzSelector","nz-demo-message-duration","nzGenerateCommand","ng g ng-zorro-antd:message-duration <name>","nzComponentName","NzDemoMessageDurationComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","\u7ed3\u675f\u4e8b\u4ef6","nzSelector","nz-demo-message-close","nzGenerateCommand","ng g ng-zorro-antd:message-close <name>","nzComponentName","NzDemoMessageCloseComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","\u5176\u4ed6\u63d0\u793a\u7c7b\u578b","nzSelector","nz-demo-message-other","nzGenerateCommand","ng g ng-zorro-antd:message-other <name>","nzComponentName","NzDemoMessageOtherComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","\u52a0\u8f7d\u4e2d","nzSelector","nz-demo-message-loading","nzGenerateCommand","ng g ng-zorro-antd:message-loading <name>","nzComponentName","NzDemoMessageLoadingComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nzmessageservice"],[1,"api-type-label","service"],["onclick","window.location.hash = 'nzmessageservice'",1,"anchor"],["id","\u5168\u5c40\u914d\u7f6e"],["onclick","window.location.hash = '\u5168\u5c40\u914d\u7f6e'",1,"anchor"],["id","nzmessageref"],["onclick","window.location.hash = 'nzmessageref'",1,"anchor"],[1,"token","class-name"],[1,"token","operator"],["spellcheck","true",1,"token","comment"]],template:function(e,n){1&e&&(d.TgZ(0,"article"),d.TgZ(1,"nz-affix",0),d.TgZ(2,"nz-anchor",1),d.NdJ("nzClick",function(e){return n.goLink(e)}),d._UZ(3,"nz-link",2),d._UZ(4,"nz-link",3),d._UZ(5,"nz-link",4),d._UZ(6,"nz-link",5),d._UZ(7,"nz-link",6),d._UZ(8,"nz-link",7),d.qZA(),d.qZA(),d.TgZ(9,"section",8),d.TgZ(10,"h1"),d._uU(11,"Message"),d.TgZ(12,"span",9),d._uU(13,"\u5168\u5c40\u63d0\u793a"),d.qZA(),d._UZ(14,"span",10),d.TgZ(15,"a",11),d._UZ(16,"i",12),d.qZA(),d.qZA(),d.TgZ(17,"section",8),d.IAx(),d.TgZ(18,"p"),d._uU(19,"\u5168\u5c40\u5c55\u793a\u64cd\u4f5c\u53cd\u9988\u4fe1\u606f\u3002"),d.qZA(),d.TgZ(20,"h2",13),d.TgZ(21,"span"),d._uU(22,"\u4f55\u65f6\u4f7f\u7528"),d.qZA(),d.TgZ(23,"a",14),d._uU(24,"#"),d.qZA(),d.qZA(),d.TgZ(25,"ul"),d.TgZ(26,"li"),d._uU(27,"\u53ef\u63d0\u4f9b\u6210\u529f\u3001\u8b66\u544a\u548c\u9519\u8bef\u7b49\u53cd\u9988\u4fe1\u606f\u3002"),d.qZA(),d.TgZ(28,"li"),d._uU(29,"\u9876\u90e8\u5c45\u4e2d\u663e\u793a\u5e76\u81ea\u52a8\u6d88\u5931\uff0c\u662f\u4e00\u79cd\u4e0d\u6253\u65ad\u7528\u6237\u64cd\u4f5c\u7684\u8f7b\u91cf\u7ea7\u63d0\u793a\u65b9\u5f0f\u3002"),d.qZA(),d.qZA(),d.TgZ(30,"pre",15),d.TgZ(31,"code"),d.TgZ(32,"span",16),d._uU(33,"import"),d.qZA(),d._uU(34," "),d.TgZ(35,"span",17),d._uU(36,"{"),d.qZA(),d._uU(37," NzMessageModule "),d.TgZ(38,"span",17),d._uU(39,"}"),d.qZA(),d._uU(40," "),d.TgZ(41,"span",16),d._uU(42,"from"),d.qZA(),d._uU(43," "),d.TgZ(44,"span",18),d._uU(45,"'ng-zorro-antd/message'"),d.qZA(),d.TgZ(46,"span",17),d._uU(47,";"),d.qZA(),d.qZA(),d.qZA(),d.fQ9(),d.qZA(),d.TgZ(48,"h2"),d.TgZ(49,"span"),d._uU(50,"\u4ee3\u7801\u6f14\u793a"),d.qZA(),d.TgZ(51,"i",19),d.NdJ("click",function(){return n.expandAllCode()}),d.qZA(),d.qZA(),d.qZA(),d.TgZ(52,"div",20),d.TgZ(53,"div",21),d.TgZ(54,"nz-code-box",22),d._UZ(55,"nz-demo-message-info",23),d.TgZ(56,"div",24),d.IAx(),d.TgZ(57,"p"),d._uU(58,"\u4fe1\u606f\u63d0\u9192\u53cd\u9988\u3002"),d.qZA(),d.fQ9(),d.qZA(),d.qZA(),d.TgZ(59,"nz-code-box",25),d._UZ(60,"nz-demo-message-duration",23),d.TgZ(61,"div",24),d.IAx(),d.TgZ(62,"p"),d._uU(63,"\u81ea\u5b9a\u4e49\u65f6\u957f "),d.TgZ(64,"code"),d._uU(65,"10s"),d.qZA(),d._uU(66,"\uff0c\u9ed8\u8ba4\u65f6\u957f\u4e3a "),d.TgZ(67,"code"),d._uU(68,"3s"),d.qZA(),d._uU(69,"\u3002"),d.qZA(),d.fQ9(),d.qZA(),d.qZA(),d.TgZ(70,"nz-code-box",26),d._UZ(71,"nz-demo-message-close",23),d.TgZ(72,"div",24),d.IAx(),d.TgZ(73,"p"),d._uU(74,"\u53ef\u901a\u8fc7\u8ba2\u9605 "),d.TgZ(75,"code"),d._uU(76,"onClose"),d.qZA(),d._uU(77," \u4e8b\u4ef6\u5728 message \u5173\u95ed\u65f6\u505a\u51fa\u67d0\u4e9b\u64cd\u4f5c\u3002\u4ee5\u4e0a\u7528\u4f8b\u5c06\u4f9d\u6b21\u6253\u5f00\u4e09\u4e2a message\u3002"),d.qZA(),d.fQ9(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(78,"div",21),d.TgZ(79,"nz-code-box",27),d._UZ(80,"nz-demo-message-other",23),d.TgZ(81,"div",24),d.IAx(),d.TgZ(82,"p"),d._uU(83,"\u5305\u62ec\u6210\u529f\u3001\u5931\u8d25\u3001\u8b66\u544a\u3002"),d.qZA(),d.fQ9(),d.qZA(),d.qZA(),d.TgZ(84,"nz-code-box",28),d._UZ(85,"nz-demo-message-loading",23),d.TgZ(86,"div",24),d.IAx(),d.TgZ(87,"p"),d._uU(88,"\u8fdb\u884c\u5168\u5c40 loading\uff0c\u5f02\u6b65\u81ea\u884c\u79fb\u9664\u3002"),d.qZA(),d.fQ9(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(89,"section",29),d.IAx(),d.TgZ(90,"h2",30),d.TgZ(91,"span"),d._uU(92,"API"),d.qZA(),d.TgZ(93,"a",31),d._uU(94,"#"),d.qZA(),d.qZA(),d.TgZ(95,"h3",32),d.TgZ(96,"span"),d._uU(97,"NzMessageService"),d.qZA(),d.TgZ(98,"label",33),d._uU(99,"service"),d.qZA(),d.TgZ(100,"a",34),d._uU(101,"#"),d.qZA(),d.qZA(),d.TgZ(102,"p"),d._uU(103,"\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e00\u4e9b\u670d\u52a1\u65b9\u6cd5\uff0c\u4f7f\u7528\u65b9\u5f0f\u548c\u53c2\u6570\u5982\u4e0b\uff1a"),d.qZA(),d.TgZ(104,"ul"),d.TgZ(105,"li"),d.TgZ(106,"code"),d._uU(107,"NzMessageService.success(content, [options])"),d.qZA(),d.qZA(),d.TgZ(108,"li"),d.TgZ(109,"code"),d._uU(110,"NzMessageService.error(content, [options])"),d.qZA(),d.qZA(),d.TgZ(111,"li"),d.TgZ(112,"code"),d._uU(113,"NzMessageService.info(content, [options])"),d.qZA(),d.qZA(),d.TgZ(114,"li"),d.TgZ(115,"code"),d._uU(116,"NzMessageService.warning(content, [options])"),d.qZA(),d.qZA(),d.TgZ(117,"li"),d.TgZ(118,"code"),d._uU(119,"NzMessageService.loading(content, [options])"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(120,"table"),d.TgZ(121,"thead"),d.TgZ(122,"tr"),d.TgZ(123,"th"),d._uU(124,"\u53c2\u6570"),d.qZA(),d.TgZ(125,"th"),d._uU(126,"\u8bf4\u660e"),d.qZA(),d.TgZ(127,"th"),d._uU(128,"\u7c7b\u578b"),d.qZA(),d.TgZ(129,"th"),d._uU(130,"\u9ed8\u8ba4\u503c"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(131,"tbody"),d.TgZ(132,"tr"),d.TgZ(133,"td"),d._uU(134,"content"),d.qZA(),d.TgZ(135,"td"),d._uU(136,"\u63d0\u793a\u5185\u5bb9"),d.qZA(),d.TgZ(137,"td"),d.TgZ(138,"code"),d._uU(139,"string | TemplateRef<void>"),d.qZA(),d.qZA(),d.TgZ(140,"td"),d._uU(141,"-"),d.qZA(),d.qZA(),d.TgZ(142,"tr"),d.TgZ(143,"td"),d._uU(144,"options"),d.qZA(),d.TgZ(145,"td"),d._uU(146,"\u652f\u6301\u8bbe\u7f6e\u9488\u5bf9\u5f53\u524d\u63d0\u793a\u6846\u7684\u53c2\u6570\uff0c\u89c1\u4e0b\u65b9\u8868\u683c"),d.qZA(),d.TgZ(147,"td"),d.TgZ(148,"code"),d._uU(149,"object"),d.qZA(),d.qZA(),d.TgZ(150,"td"),d._uU(151,"-"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(152,"p"),d.TgZ(153,"code"),d._uU(154,"options"),d.qZA(),d._uU(155," \u652f\u6301\u8bbe\u7f6e\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),d.qZA(),d.TgZ(156,"table"),d.TgZ(157,"thead"),d.TgZ(158,"tr"),d.TgZ(159,"th"),d._uU(160,"\u53c2\u6570"),d.qZA(),d.TgZ(161,"th"),d._uU(162,"\u8bf4\u660e"),d.qZA(),d.TgZ(163,"th"),d._uU(164,"\u7c7b\u578b"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(165,"tbody"),d.TgZ(166,"tr"),d.TgZ(167,"td"),d._uU(168,"nzDuration"),d.qZA(),d.TgZ(169,"td"),d._uU(170,"\u6301\u7eed\u65f6\u95f4(\u6beb\u79d2)\uff0c\u5f53\u8bbe\u7f6e\u4e3a0\u65f6\u4e0d\u6d88\u5931"),d.qZA(),d.TgZ(171,"td"),d.TgZ(172,"code"),d._uU(173,"number"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(174,"tr"),d.TgZ(175,"td"),d._uU(176,"nzPauseOnHover"),d.qZA(),d.TgZ(177,"td"),d._uU(178,"\u9f20\u6807\u79fb\u4e0a\u65f6\u7981\u6b62\u81ea\u52a8\u79fb\u9664"),d.qZA(),d.TgZ(179,"td"),d.TgZ(180,"code"),d._uU(181,"boolean"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(182,"tr"),d.TgZ(183,"td"),d._uU(184,"nzAnimate"),d.qZA(),d.TgZ(185,"td"),d._uU(186,"\u5f00\u5173\u52a8\u753b\u6548\u679c"),d.qZA(),d.TgZ(187,"td"),d.TgZ(188,"code"),d._uU(189,"boolean"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(190,"p"),d._uU(191,"\u8fd8\u63d0\u4f9b\u4e86\u5168\u5c40\u9500\u6bc1\u65b9\u6cd5\uff1a"),d.qZA(),d.TgZ(192,"ul"),d.TgZ(193,"li"),d.TgZ(194,"code"),d._uU(195,"NzMessageService.remove(id)"),d.qZA(),d._uU(196," // \u79fb\u9664\u7279\u5b9aid\u7684\u6d88\u606f\uff0c\u5f53id\u4e3a\u7a7a\u65f6\uff0c\u79fb\u9664\u6240\u6709\u6d88\u606f\uff08\u8be5\u6d88\u606fid\u901a\u8fc7\u4e0a\u8ff0\u65b9\u6cd5\u8fd4\u56de\u503c\u4e2d\u5f97\u5230\uff09"),d.qZA(),d.qZA(),d.TgZ(197,"h3",35),d.TgZ(198,"span"),d._uU(199,"\u5168\u5c40\u914d\u7f6e"),d.qZA(),d.TgZ(200,"a",36),d._uU(201,"#"),d.qZA(),d.qZA(),d.TgZ(202,"p"),d._uU(203,"\u53ef\u4ee5\u901a\u8fc7 "),d.TgZ(204,"code"),d._uU(205,"NzConfigService"),d.qZA(),d._uU(206," \u8fdb\u884c\u5168\u5c40\u914d\u7f6e\uff0c\u8be6\u60c5\u8bf7\u89c1\u6587\u6863\u4e2d\u201c\u5168\u5c40\u914d\u7f6e\u9879\u201d\u7ae0\u8282\u3002"),d.qZA(),d.TgZ(207,"table"),d.TgZ(208,"thead"),d.TgZ(209,"tr"),d.TgZ(210,"th"),d._uU(211,"\u53c2\u6570"),d.qZA(),d.TgZ(212,"th"),d._uU(213,"\u8bf4\u660e"),d.qZA(),d.TgZ(214,"th"),d._uU(215,"\u7c7b\u578b"),d.qZA(),d.TgZ(216,"th"),d._uU(217,"\u9ed8\u8ba4\u503c"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(218,"tbody"),d.TgZ(219,"tr"),d.TgZ(220,"td"),d._uU(221,"nzDuration"),d.qZA(),d.TgZ(222,"td"),d._uU(223,"\u6301\u7eed\u65f6\u95f4(\u6beb\u79d2)\uff0c\u5f53\u8bbe\u7f6e\u4e3a 0 \u65f6\u4e0d\u6d88\u5931"),d.qZA(),d.TgZ(224,"td"),d.TgZ(225,"code"),d._uU(226,"number"),d.qZA(),d.qZA(),d.TgZ(227,"td"),d.TgZ(228,"code"),d._uU(229,"3000"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(230,"tr"),d.TgZ(231,"td"),d._uU(232,"nzMaxStack"),d.qZA(),d.TgZ(233,"td"),d._uU(234,"\u540c\u4e00\u65f6\u95f4\u53ef\u5c55\u793a\u7684\u6700\u5927\u63d0\u793a\u6570\u91cf"),d.qZA(),d.TgZ(235,"td"),d.TgZ(236,"code"),d._uU(237,"number"),d.qZA(),d.qZA(),d.TgZ(238,"td"),d.TgZ(239,"code"),d._uU(240,"7"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(241,"tr"),d.TgZ(242,"td"),d._uU(243,"nzPauseOnHover"),d.qZA(),d.TgZ(244,"td"),d._uU(245,"\u9f20\u6807\u79fb\u4e0a\u65f6\u7981\u6b62\u81ea\u52a8\u79fb\u9664"),d.qZA(),d.TgZ(246,"td"),d.TgZ(247,"code"),d._uU(248,"boolean"),d.qZA(),d.qZA(),d.TgZ(249,"td"),d.TgZ(250,"code"),d._uU(251,"true"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(252,"tr"),d.TgZ(253,"td"),d._uU(254,"nzAnimate"),d.qZA(),d.TgZ(255,"td"),d._uU(256,"\u5f00\u5173\u52a8\u753b\u6548\u679c"),d.qZA(),d.TgZ(257,"td"),d.TgZ(258,"code"),d._uU(259,"boolean"),d.qZA(),d.qZA(),d.TgZ(260,"td"),d.TgZ(261,"code"),d._uU(262,"true"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(263,"tr"),d.TgZ(264,"td"),d._uU(265,"nzTop"),d.qZA(),d.TgZ(266,"td"),d._uU(267,"\u6d88\u606f\u8ddd\u79bb\u9876\u90e8\u7684\u4f4d\u7f6e"),d.qZA(),d.TgZ(268,"td"),d.TgZ(269,"code"),d._uU(270,"number | string"),d.qZA(),d.qZA(),d.TgZ(271,"td"),d.TgZ(272,"code"),d._uU(273,"24"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(274,"h3",37),d.TgZ(275,"span"),d._uU(276,"NzMessageRef"),d.qZA(),d.TgZ(277,"a",38),d._uU(278,"#"),d.qZA(),d.qZA(),d.TgZ(279,"p"),d._uU(280,"\u5f53\u4f60\u8c03\u7528 "),d.TgZ(281,"code"),d._uU(282,"NzMessageService.success"),d.qZA(),d._uU(283," \u6216\u5176\u4ed6\u65b9\u6cd5\u65f6\u4f1a\u8fd4\u56de\u8be5\u5bf9\u8c61\u3002"),d.qZA(),d.TgZ(284,"pre",15),d.TgZ(285,"code"),d.TgZ(286,"span",16),d._uU(287,"export"),d.qZA(),d._uU(288," "),d.TgZ(289,"span",16),d._uU(290,"interface"),d.qZA(),d._uU(291," "),d.TgZ(292,"span",39),d._uU(293,"NzMessageRef"),d.qZA(),d._uU(294," "),d.TgZ(295,"span",17),d._uU(296,"{"),d.qZA(),d._uU(297,"\n  messageId"),d.TgZ(298,"span",17),d._uU(299,":"),d.qZA(),d._uU(300," "),d.TgZ(301,"span",16),d._uU(302,"string"),d.qZA(),d.TgZ(303,"span",17),d._uU(304,";"),d.qZA(),d._uU(305,"\n  onClose"),d.TgZ(306,"span",17),d._uU(307,":"),d.qZA(),d._uU(308," Subject"),d.TgZ(309,"span",40),d._uU(310,"<"),d.qZA(),d.TgZ(311,"span",16),d._uU(312,"false"),d.qZA(),d.TgZ(313,"span",40),d._uU(314,">"),d.qZA(),d.TgZ(315,"span",17),d._uU(316,";"),d.qZA(),d._uU(317," "),d.TgZ(318,"span",41),d._uU(319,"// \u5f53 message \u5173\u95ed\u65f6\u5b83\u4f1a\u6d3e\u53d1\u4e00\u4e2a\u4e8b\u4ef6"),d.qZA(),d._uU(320,"\n"),d.TgZ(321,"span",17),d._uU(322,"}"),d.qZA(),d.qZA(),d.qZA(),d.fQ9(),d.qZA(),d.qZA()),2&e&&(d.xp6(1),d.Q6J("nzOffsetTop",16),d.xp6(1),d.Q6J("nzAffix",!1),d.xp6(50),d.Q6J("nzGutter",16),d.xp6(1),d.Q6J("nzXl",12)("nzSpan",24),d.xp6(1),d.Q6J("nzId","components-message-demo-info")("nzLink","components-message-demo-info")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/info.md"),d.xp6(5),d.Q6J("nzId","components-message-demo-duration")("nzLink","components-message-demo-duration")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/duration.md"),d.xp6(11),d.Q6J("nzId","components-message-demo-close")("nzLink","components-message-demo-close")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/close.md"),d.xp6(8),d.Q6J("nzXl",12)("nzSpan",24),d.xp6(1),d.Q6J("nzId","components-message-demo-other")("nzLink","components-message-demo-other")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/other.md"),d.xp6(5),d.Q6J("nzId","components-message-demo-loading")("nzLink","components-message-demo-loading")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/loading.md"))},directives:[u.$,c.IT,c.Fp,m.w,g.Ls,T.SY,A.SK,A.t3,r.G,q,p,_,U,h],encapsulation:2}),e})(),b=(()=>{class e{constructor(){this.expanded=!1}goLink(e){window&&(window.location.hash=e)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(e=>{e.nzExpanded=this.expanded,e.expandCode(this.expanded),e.check()})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d.Xpm({type:e,selectors:[["nz-demo-message"]],viewQuery:function(e,n){if(1&e&&d.Gf(r.G,5),2&e){let e;d.iGM(e=d.CRH())&&(n.codeBoxes=e)}},decls:327,vars:22,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-message-demo-info","nzTitle","Normal prompt"],["nzHref","#components-message-demo-other","nzTitle","Other types of message"],["nzHref","#components-message-demo-duration","nzTitle","Customize duration"],["nzHref","#components-message-demo-loading","nzTitle","Message of loading"],["nzHref","#components-message-demo-close","nzTitle","Customize duration"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Normal prompt","nzSelector","nz-demo-message-info","nzGenerateCommand","ng g ng-zorro-antd:message-info <name>","nzComponentName","NzDemoMessageInfoComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["demo",""],["intro",""],["nzTitle","Customize duration","nzSelector","nz-demo-message-duration","nzGenerateCommand","ng g ng-zorro-antd:message-duration <name>","nzComponentName","NzDemoMessageDurationComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","Customize duration","nzSelector","nz-demo-message-close","nzGenerateCommand","ng g ng-zorro-antd:message-close <name>","nzComponentName","NzDemoMessageCloseComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","Other types of message","nzSelector","nz-demo-message-other","nzGenerateCommand","ng g ng-zorro-antd:message-other <name>","nzComponentName","NzDemoMessageOtherComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","Message of loading","nzSelector","nz-demo-message-loading","nzGenerateCommand","ng g ng-zorro-antd:message-loading <name>","nzComponentName","NzDemoMessageLoadingComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nzmessageservice"],[1,"api-type-label","service"],["onclick","window.location.hash = 'nzmessageservice'",1,"anchor"],["id","global-configuration"],["onclick","window.location.hash = 'global-configuration'",1,"anchor"],["id","nzmessageref"],["onclick","window.location.hash = 'nzmessageref'",1,"anchor"],[1,"token","class-name"],[1,"token","operator"],["spellcheck","true",1,"token","comment"]],template:function(e,n){1&e&&(d.TgZ(0,"article"),d.TgZ(1,"nz-affix",0),d.TgZ(2,"nz-anchor",1),d.NdJ("nzClick",function(e){return n.goLink(e)}),d._UZ(3,"nz-link",2),d._UZ(4,"nz-link",3),d._UZ(5,"nz-link",4),d._UZ(6,"nz-link",5),d._UZ(7,"nz-link",6),d._UZ(8,"nz-link",7),d.qZA(),d.qZA(),d.TgZ(9,"section",8),d.TgZ(10,"h1"),d._uU(11,"Message"),d._UZ(12,"span",9),d._UZ(13,"span",10),d.TgZ(14,"a",11),d._UZ(15,"i",12),d.qZA(),d.qZA(),d.TgZ(16,"section",8),d.IAx(),d.TgZ(17,"p"),d._uU(18,"Display global messages as feedback in response to user operations."),d.qZA(),d.TgZ(19,"h2",13),d.TgZ(20,"span"),d._uU(21,"When To Use"),d.qZA(),d.TgZ(22,"a",14),d._uU(23,"#"),d.qZA(),d.qZA(),d.TgZ(24,"ul"),d.TgZ(25,"li"),d._uU(26,"To provide feedback such as success, warning, error etc."),d.qZA(),d.TgZ(27,"li"),d._uU(28,"A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt."),d.qZA(),d.qZA(),d.TgZ(29,"pre",15),d.TgZ(30,"code"),d.TgZ(31,"span",16),d._uU(32,"import"),d.qZA(),d._uU(33," "),d.TgZ(34,"span",17),d._uU(35,"{"),d.qZA(),d._uU(36," NzMessageModule "),d.TgZ(37,"span",17),d._uU(38,"}"),d.qZA(),d._uU(39," "),d.TgZ(40,"span",16),d._uU(41,"from"),d.qZA(),d._uU(42," "),d.TgZ(43,"span",18),d._uU(44,"'ng-zorro-antd/message'"),d.qZA(),d.TgZ(45,"span",17),d._uU(46,";"),d.qZA(),d.qZA(),d.qZA(),d.fQ9(),d.qZA(),d.TgZ(47,"h2"),d.TgZ(48,"span"),d._uU(49,"Examples"),d.qZA(),d.TgZ(50,"i",19),d.NdJ("click",function(){return n.expandAllCode()}),d.qZA(),d.qZA(),d.qZA(),d.TgZ(51,"div",20),d.TgZ(52,"div",21),d.TgZ(53,"nz-code-box",22),d._UZ(54,"nz-demo-message-info",23),d.TgZ(55,"div",24),d.IAx(),d.TgZ(56,"p"),d._uU(57,"Normal messages as feedbacks."),d.qZA(),d.fQ9(),d.qZA(),d.qZA(),d.TgZ(58,"nz-code-box",25),d._UZ(59,"nz-demo-message-duration",23),d.TgZ(60,"div",24),d.IAx(),d.TgZ(61,"p"),d._uU(62,"Customize message display duration from default "),d.TgZ(63,"code"),d._uU(64,"3s"),d.qZA(),d._uU(65," to "),d.TgZ(66,"code"),d._uU(67,"10s"),d.qZA(),d._uU(68,"."),d.qZA(),d.fQ9(),d.qZA(),d.qZA(),d.TgZ(69,"nz-code-box",26),d._UZ(70,"nz-demo-message-close",23),d.TgZ(71,"div",24),d.IAx(),d.TgZ(72,"p"),d._uU(73,"You can subscribe to "),d.TgZ(74,"code"),d._uU(75,"onClose"),d.qZA(),d._uU(76," event to make some operations. This case would open three messages in sequence."),d.qZA(),d.fQ9(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(77,"div",21),d.TgZ(78,"nz-code-box",27),d._UZ(79,"nz-demo-message-other",23),d.TgZ(80,"div",24),d.IAx(),d.TgZ(81,"p"),d._uU(82,"Messages of success, error and warning types."),d.qZA(),d.fQ9(),d.qZA(),d.qZA(),d.TgZ(83,"nz-code-box",28),d._UZ(84,"nz-demo-message-loading",23),d.TgZ(85,"div",24),d.IAx(),d.TgZ(86,"p"),d._uU(87,"Display a global loading indicator, which is dismissed by itself asynchronously."),d.qZA(),d.fQ9(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(88,"section",29),d.IAx(),d.TgZ(89,"h2",30),d.TgZ(90,"span"),d._uU(91,"API"),d.qZA(),d.TgZ(92,"a",31),d._uU(93,"#"),d.qZA(),d.qZA(),d.TgZ(94,"h3",32),d.TgZ(95,"span"),d._uU(96,"NzMessageService"),d.qZA(),d.TgZ(97,"label",33),d._uU(98,"service"),d.qZA(),d.TgZ(99,"a",34),d._uU(100,"#"),d.qZA(),d.qZA(),d.TgZ(101,"p"),d._uU(102,"This components provides some service methods, with usage and arguments as following:"),d.qZA(),d.TgZ(103,"ul"),d.TgZ(104,"li"),d.TgZ(105,"code"),d._uU(106,"NzMessageService.success(content, [options])"),d.qZA(),d.qZA(),d.TgZ(107,"li"),d.TgZ(108,"code"),d._uU(109,"NzMessageService.error(content, [options])"),d.qZA(),d.qZA(),d.TgZ(110,"li"),d.TgZ(111,"code"),d._uU(112,"NzMessageService.info(content, [options])"),d.qZA(),d.qZA(),d.TgZ(113,"li"),d.TgZ(114,"code"),d._uU(115,"NzMessageService.warning(content, [options])"),d.qZA(),d.qZA(),d.TgZ(116,"li"),d.TgZ(117,"code"),d._uU(118,"NzMessageService.loading(content, [options])"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(119,"table"),d.TgZ(120,"thead"),d.TgZ(121,"tr"),d.TgZ(122,"th"),d._uU(123,"Argument"),d.qZA(),d.TgZ(124,"th"),d._uU(125,"Description"),d.qZA(),d.TgZ(126,"th"),d._uU(127,"Type"),d.qZA(),d.TgZ(128,"th"),d._uU(129,"Default"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(130,"tbody"),d.TgZ(131,"tr"),d.TgZ(132,"td"),d._uU(133,"content"),d.qZA(),d.TgZ(134,"td"),d._uU(135,"The content of message"),d.qZA(),d.TgZ(136,"td"),d.TgZ(137,"code"),d._uU(138,"string | TemplateRef<void>"),d.qZA(),d.qZA(),d.TgZ(139,"td"),d._uU(140,"-"),d.qZA(),d.qZA(),d.TgZ(141,"tr"),d.TgZ(142,"td"),d._uU(143,"options"),d.qZA(),d.TgZ(144,"td"),d._uU(145,"Support setting the parameters for the current message box, see the table below"),d.qZA(),d.TgZ(146,"td"),d.TgZ(147,"code"),d._uU(148,"object"),d.qZA(),d.qZA(),d.TgZ(149,"td"),d._uU(150,"-"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(151,"p"),d._uU(152,"The parameters that are set by the "),d.TgZ(153,"code"),d._uU(154,"options"),d.qZA(),d._uU(155," support are as follows:"),d.qZA(),d.TgZ(156,"table"),d.TgZ(157,"thead"),d.TgZ(158,"tr"),d.TgZ(159,"th"),d._uU(160,"Argument"),d.qZA(),d.TgZ(161,"th"),d._uU(162,"Description"),d.qZA(),d.TgZ(163,"th"),d._uU(164,"Type"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(165,"tbody"),d.TgZ(166,"tr"),d.TgZ(167,"td"),d._uU(168,"nzDuration"),d.qZA(),d.TgZ(169,"td"),d._uU(170,"Duration (milliseconds), does not disappear when set to 0"),d.qZA(),d.TgZ(171,"td"),d.TgZ(172,"code"),d._uU(173,"number"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(174,"tr"),d.TgZ(175,"td"),d._uU(176,"nzPauseOnHover"),d.qZA(),d.TgZ(177,"td"),d._uU(178,"Do not remove automatically when mouse is over while setting to "),d.TgZ(179,"code"),d._uU(180,"true"),d.qZA(),d.qZA(),d.TgZ(181,"td"),d.TgZ(182,"code"),d._uU(183,"boolean"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(184,"tr"),d.TgZ(185,"td"),d._uU(186,"nzAnimate"),d.qZA(),d.TgZ(187,"td"),d._uU(188,"Whether to turn on animation"),d.qZA(),d.TgZ(189,"td"),d.TgZ(190,"code"),d._uU(191,"boolean"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(192,"p"),d._uU(193,"Methods for destruction are also provided:"),d.qZA(),d.TgZ(194,"ul"),d.TgZ(195,"li"),d.TgZ(196,"code"),d._uU(197,"message.remove(id)"),d.qZA(),d._uU(198," // Remove the message with the specified id. When the id is empty, remove all messages (the message id is returned by the above method)"),d.qZA(),d.qZA(),d.TgZ(199,"h3",35),d.TgZ(200,"span"),d._uU(201,"Global Configuration"),d.qZA(),d.TgZ(202,"a",36),d._uU(203,"#"),d.qZA(),d.qZA(),d.TgZ(204,"p"),d._uU(205,"You can use "),d.TgZ(206,"code"),d._uU(207,"NzConfigService"),d.qZA(),d._uU(208," to configure this component globally. Please check the Global Configuration chapter for more information."),d.qZA(),d.TgZ(209,"table"),d.TgZ(210,"thead"),d.TgZ(211,"tr"),d.TgZ(212,"th"),d._uU(213,"Argument"),d.qZA(),d.TgZ(214,"th"),d._uU(215,"Description"),d.qZA(),d.TgZ(216,"th"),d._uU(217,"Type"),d.qZA(),d.TgZ(218,"th"),d._uU(219,"Default"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(220,"tbody"),d.TgZ(221,"tr"),d.TgZ(222,"td"),d._uU(223,"nzDuration"),d.qZA(),d.TgZ(224,"td"),d._uU(225,"Duration (milliseconds), does not disappear when set to 0"),d.qZA(),d.TgZ(226,"td"),d.TgZ(227,"code"),d._uU(228,"number"),d.qZA(),d.qZA(),d.TgZ(229,"td"),d.TgZ(230,"code"),d._uU(231,"3000"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(232,"tr"),d.TgZ(233,"td"),d._uU(234,"nzMaxStack"),d.qZA(),d.TgZ(235,"td"),d._uU(236,"The maximum number of messages that can be displayed at the same time"),d.qZA(),d.TgZ(237,"td"),d.TgZ(238,"code"),d._uU(239,"number"),d.qZA(),d.qZA(),d.TgZ(240,"td"),d.TgZ(241,"code"),d._uU(242,"7"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(243,"tr"),d.TgZ(244,"td"),d._uU(245,"nzPauseOnHover"),d.qZA(),d.TgZ(246,"td"),d._uU(247,"Do not remove automatically when mouse is over while setting to "),d.TgZ(248,"code"),d._uU(249,"true"),d.qZA(),d.qZA(),d.TgZ(250,"td"),d.TgZ(251,"code"),d._uU(252,"boolean"),d.qZA(),d.qZA(),d.TgZ(253,"td"),d.TgZ(254,"code"),d._uU(255,"true"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(256,"tr"),d.TgZ(257,"td"),d._uU(258,"nzAnimate"),d.qZA(),d.TgZ(259,"td"),d._uU(260,"Whether to turn on animation"),d.qZA(),d.TgZ(261,"td"),d.TgZ(262,"code"),d._uU(263,"boolean"),d.qZA(),d.qZA(),d.TgZ(264,"td"),d.TgZ(265,"code"),d._uU(266,"true"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(267,"tr"),d.TgZ(268,"td"),d._uU(269,"nzTop"),d.qZA(),d.TgZ(270,"td"),d._uU(271,"Distance from top"),d.qZA(),d.TgZ(272,"td"),d.TgZ(273,"code"),d._uU(274,"number | string"),d.qZA(),d.qZA(),d.TgZ(275,"td"),d.TgZ(276,"code"),d._uU(277,"24"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(278,"h3",37),d.TgZ(279,"span"),d._uU(280,"NzMessageRef"),d.qZA(),d.TgZ(281,"a",38),d._uU(282,"#"),d.qZA(),d.qZA(),d.TgZ(283,"p"),d._uU(284,"It's the object that returned when you call "),d.TgZ(285,"code"),d._uU(286,"NzMessageService.success"),d.qZA(),d._uU(287," and others."),d.qZA(),d.TgZ(288,"pre",15),d.TgZ(289,"code"),d.TgZ(290,"span",16),d._uU(291,"export"),d.qZA(),d._uU(292," "),d.TgZ(293,"span",16),d._uU(294,"interface"),d.qZA(),d._uU(295," "),d.TgZ(296,"span",39),d._uU(297,"NzMessageRef"),d.qZA(),d._uU(298," "),d.TgZ(299,"span",17),d._uU(300,"{"),d.qZA(),d._uU(301,"\n  messageId"),d.TgZ(302,"span",17),d._uU(303,":"),d.qZA(),d._uU(304," "),d.TgZ(305,"span",16),d._uU(306,"string"),d.qZA(),d.TgZ(307,"span",17),d._uU(308,";"),d.qZA(),d._uU(309,"\n  onClose"),d.TgZ(310,"span",17),d._uU(311,":"),d.qZA(),d._uU(312," Subject"),d.TgZ(313,"span",40),d._uU(314,"<"),d.qZA(),d.TgZ(315,"span",16),d._uU(316,"false"),d.qZA(),d.TgZ(317,"span",40),d._uU(318,">"),d.qZA(),d.TgZ(319,"span",17),d._uU(320,";"),d.qZA(),d._uU(321," "),d.TgZ(322,"span",41),d._uU(323,"// It would emit an event when the message is closed"),d.qZA(),d._uU(324,"\n"),d.TgZ(325,"span",17),d._uU(326,"}"),d.qZA(),d.qZA(),d.qZA(),d.fQ9(),d.qZA(),d.qZA()),2&e&&(d.xp6(1),d.Q6J("nzOffsetTop",16),d.xp6(1),d.Q6J("nzAffix",!1),d.xp6(49),d.Q6J("nzGutter",16),d.xp6(1),d.Q6J("nzXl",12)("nzSpan",24),d.xp6(1),d.Q6J("nzId","components-message-demo-info")("nzLink","components-message-demo-info")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/info.md"),d.xp6(5),d.Q6J("nzId","components-message-demo-duration")("nzLink","components-message-demo-duration")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/duration.md"),d.xp6(11),d.Q6J("nzId","components-message-demo-close")("nzLink","components-message-demo-close")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/close.md"),d.xp6(8),d.Q6J("nzXl",12)("nzSpan",24),d.xp6(1),d.Q6J("nzId","components-message-demo-other")("nzLink","components-message-demo-other")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/other.md"),d.xp6(5),d.Q6J("nzId","components-message-demo-loading")("nzLink","components-message-demo-loading")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/loading.md"))},directives:[u.$,c.IT,c.Fp,m.w,g.Ls,T.SY,A.SK,A.t3,r.G,q,p,_,U,h],encapsulation:2}),e})(),k=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[s.l,...i,t.Bz.forChild([{path:"en",component:b},{path:"zh",component:f}])]]}),e})()}}]);