(self.webpackChunkenlink=self.webpackChunkenlink||[]).push([[4219],{4219:(n,e,t)=>{"use strict";t.r(e),t.d(e,{NzDemoSwitchModule:()=>C});var o=t(3423),Z=t(9358),i=t(8453),d=t(4453),c=t(945);const s=[i.m,d.sL,c.PV];var a=t(4512),g=t(7716),l=t(6175),r=t(8925),z=t(4514),h=t(7420),u=t(6704),T=t(665);let m=(()=>{class n{constructor(){this.switchValue=!1}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Xpm({type:n,selectors:[["nz-demo-switch-basic"]],decls:1,vars:1,consts:[[3,"ngModel","ngModelChange"]],template:function(n,e){1&n&&(g.TgZ(0,"nz-switch",0),g.NdJ("ngModelChange",function(n){return e.switchValue=n}),g.qZA()),2&n&&g.Q6J("ngModel",e.switchValue)},directives:[i.i,T.JJ,T.On],encapsulation:2}),n})();function A(n,e){1&n&&g._UZ(0,"i",5)}function q(n,e){1&n&&g._UZ(0,"i",6)}let p=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Xpm({type:n,selectors:[["nz-demo-switch-text"]],decls:11,vars:5,consts:[["nzCheckedChildren","\u5f00","nzUnCheckedChildren","\u5173",3,"ngModel"],["nzCheckedChildren","1","nzUnCheckedChildren","0",3,"ngModel"],[3,"ngModel","nzCheckedChildren","nzUnCheckedChildren"],["checkedTemplate",""],["unCheckedTemplate",""],["nz-icon","","nzType","check"],["nz-icon","","nzType","close"]],template:function(n,e){if(1&n&&(g._UZ(0,"nz-switch",0),g._UZ(1,"br"),g._UZ(2,"br"),g._UZ(3,"nz-switch",1),g._UZ(4,"br"),g._UZ(5,"br"),g._UZ(6,"nz-switch",2),g.YNc(7,A,1,0,"ng-template",null,3,g.W1O),g.YNc(9,q,1,0,"ng-template",null,4,g.W1O)),2&n){const n=g.MAs(8),e=g.MAs(10);g.Q6J("ngModel",!0),g.xp6(3),g.Q6J("ngModel",!1),g.xp6(3),g.Q6J("ngModel",!0)("nzCheckedChildren",n)("nzUnCheckedChildren",e)}},directives:[i.i,T.JJ,T.On,z.w,c.Ls],encapsulation:2}),n})(),U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Xpm({type:n,selectors:[["nz-demo-switch-loading"]],decls:4,vars:2,consts:[["nzLoading","",3,"ngModel"],["nzSize","small","nzLoading","",3,"ngModel"]],template:function(n,e){1&n&&(g._UZ(0,"nz-switch",0),g._UZ(1,"br"),g._UZ(2,"br"),g._UZ(3,"nz-switch",1)),2&n&&(g.Q6J("ngModel",!0),g.xp6(3),g.Q6J("ngModel",!1))},directives:[i.i,T.JJ,T.On],encapsulation:2}),n})();var _=t(9374);let w=(()=>{class n{constructor(){this.switchValue=!1,this.isDisabled=!0}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Xpm({type:n,selectors:[["nz-demo-switch-disabled"]],decls:5,vars:3,consts:[[3,"ngModel","nzDisabled","ngModelChange"],["nz-button","",3,"nzType","click"]],template:function(n,e){1&n&&(g.TgZ(0,"nz-switch",0),g.NdJ("ngModelChange",function(n){return e.switchValue=n}),g.qZA(),g._UZ(1,"br"),g._UZ(2,"br"),g.TgZ(3,"button",1),g.NdJ("click",function(){return e.isDisabled=!e.isDisabled}),g._uU(4,"Toggle disabled"),g.qZA()),2&n&&(g.Q6J("ngModel",e.switchValue)("nzDisabled",e.isDisabled),g.xp6(3),g.Q6J("nzType","primary"))},directives:[i.i,T.JJ,T.On,d.ix,_.dQ,z.w],encapsulation:2}),n})(),f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Xpm({type:n,selectors:[["nz-demo-switch-size"]],decls:4,vars:2,consts:[[3,"ngModel"],["nzSize","small",3,"ngModel"]],template:function(n,e){1&n&&(g._UZ(0,"nz-switch",0),g._UZ(1,"br"),g._UZ(2,"br"),g._UZ(3,"nz-switch",1)),2&n&&(g.Q6J("ngModel",!0),g.xp6(3),g.Q6J("ngModel",!0))},directives:[i.i,T.JJ,T.On],encapsulation:2}),n})(),b=(()=>{class n{constructor(){this.switchValue=!1,this.loading=!1}clickSwitch(){this.loading||(this.loading=!0,setTimeout(()=>{this.switchValue=!this.switchValue,this.loading=!1},3e3))}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Xpm({type:n,selectors:[["nz-demo-switch-control"]],decls:1,vars:3,consts:[[3,"ngModel","nzControl","nzLoading","ngModelChange","click"]],template:function(n,e){1&n&&(g.TgZ(0,"nz-switch",0),g.NdJ("ngModelChange",function(n){return e.switchValue=n})("click",function(){return e.clickSwitch()}),g.qZA()),2&n&&g.Q6J("ngModel",e.switchValue)("nzControl",!0)("nzLoading",e.loading)},directives:[i.i,T.JJ,T.On],encapsulation:2}),n})(),x=(()=>{class n{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Xpm({type:n,selectors:[["nz-demo-switch"]],viewQuery:function(n,e){if(1&n&&g.Gf(a.G,5),2&n){let n;g.iGM(n=g.CRH())&&(e.codeBoxes=n)}},decls:256,vars:25,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-switch-demo-basic","nzTitle","\u57fa\u672c"],["nzHref","#components-switch-demo-disabled","nzTitle","\u4e0d\u53ef\u7528"],["nzHref","#components-switch-demo-text","nzTitle","\u6587\u5b57\u548c\u56fe\u6807"],["nzHref","#components-switch-demo-size","nzTitle","\u4e24\u79cd\u5927\u5c0f"],["nzHref","#components-switch-demo-loading","nzTitle","\u52a0\u8f7d\u4e2d"],["nzHref","#components-switch-demo-control","nzTitle","\u5b8c\u6574\u63a7\u5236"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u57fa\u672c","nzSelector","nz-demo-switch-basic","nzGenerateCommand","ng g ng-zorro-antd:switch-basic <name>","nzComponentName","NzDemoSwitchBasicComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["demo",""],["intro",""],["nzTitle","\u6587\u5b57\u548c\u56fe\u6807","nzSelector","nz-demo-switch-text","nzGenerateCommand","ng g ng-zorro-antd:switch-text <name>","nzComponentName","NzDemoSwitchTextComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","\u52a0\u8f7d\u4e2d","nzSelector","nz-demo-switch-loading","nzGenerateCommand","ng g ng-zorro-antd:switch-loading <name>","nzComponentName","NzDemoSwitchLoadingComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","\u4e0d\u53ef\u7528","nzSelector","nz-demo-switch-disabled","nzGenerateCommand","ng g ng-zorro-antd:switch-disabled <name>","nzComponentName","NzDemoSwitchDisabledComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","\u4e24\u79cd\u5927\u5c0f","nzSelector","nz-demo-switch-size","nzGenerateCommand","ng g ng-zorro-antd:switch-size <name>","nzComponentName","NzDemoSwitchSizeComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","\u5b8c\u6574\u63a7\u5236","nzSelector","nz-demo-switch-control","nzGenerateCommand","ng g ng-zorro-antd:switch-control <name>","nzComponentName","NzDemoSwitchControlComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-switch"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-switch'",1,"anchor"],["id","\u65b9\u6cd5"],["onclick","window.location.hash = '\u65b9\u6cd5'",1,"anchor"]],template:function(n,e){1&n&&(g.TgZ(0,"article"),g.TgZ(1,"nz-affix",0),g.TgZ(2,"nz-anchor",1),g.NdJ("nzClick",function(n){return e.goLink(n)}),g._UZ(3,"nz-link",2),g._UZ(4,"nz-link",3),g._UZ(5,"nz-link",4),g._UZ(6,"nz-link",5),g._UZ(7,"nz-link",6),g._UZ(8,"nz-link",7),g._UZ(9,"nz-link",8),g.qZA(),g.qZA(),g.TgZ(10,"section",9),g.TgZ(11,"h1"),g._uU(12,"Switch"),g.TgZ(13,"span",10),g._uU(14,"\u5f00\u5173"),g.qZA(),g._UZ(15,"span",11),g.TgZ(16,"a",12),g._UZ(17,"i",13),g.qZA(),g.qZA(),g.TgZ(18,"section",9),g.IAx(),g.TgZ(19,"p"),g._uU(20,"\u5f00\u5173\u9009\u62e9\u5668\u3002"),g.qZA(),g.TgZ(21,"h2",14),g.TgZ(22,"span"),g._uU(23,"\u4f55\u65f6\u4f7f\u7528"),g.qZA(),g.TgZ(24,"a",15),g._uU(25,"#"),g.qZA(),g.qZA(),g.TgZ(26,"ul"),g.TgZ(27,"li"),g._uU(28,"\u9700\u8981\u8868\u793a\u5f00\u5173\u72b6\u6001/\u4e24\u79cd\u72b6\u6001\u4e4b\u95f4\u7684\u5207\u6362\u65f6\uff1b"),g.qZA(),g.TgZ(29,"li"),g._uU(30,"\u548c "),g.TgZ(31,"code"),g._uU(32,"checkbox"),g.qZA(),g._uU(33,"\u7684\u533a\u522b\u662f\uff0c\u5207\u6362 "),g.TgZ(34,"code"),g._uU(35,"switch"),g.qZA(),g._uU(36," \u4f1a\u76f4\u63a5\u89e6\u53d1\u72b6\u6001\u6539\u53d8\uff0c\u800c "),g.TgZ(37,"code"),g._uU(38,"checkbox"),g.qZA(),g._uU(39," \u4e00\u822c\u7528\u4e8e\u72b6\u6001\u6807\u8bb0\uff0c\u9700\u8981\u548c\u63d0\u4ea4\u64cd\u4f5c\u914d\u5408\u3002"),g.qZA(),g.qZA(),g.TgZ(40,"pre",16),g.TgZ(41,"code"),g.TgZ(42,"span",17),g._uU(43,"import"),g.qZA(),g._uU(44," "),g.TgZ(45,"span",18),g._uU(46,"{"),g.qZA(),g._uU(47," NzSwitchModule "),g.TgZ(48,"span",18),g._uU(49,"}"),g.qZA(),g._uU(50," "),g.TgZ(51,"span",17),g._uU(52,"from"),g.qZA(),g._uU(53," "),g.TgZ(54,"span",19),g._uU(55,"'ng-zorro-antd/switch'"),g.qZA(),g.TgZ(56,"span",18),g._uU(57,";"),g.qZA(),g.qZA(),g.qZA(),g.fQ9(),g.qZA(),g.TgZ(58,"h2"),g.TgZ(59,"span"),g._uU(60,"\u4ee3\u7801\u6f14\u793a"),g.qZA(),g.TgZ(61,"i",20),g.NdJ("click",function(){return e.expandAllCode()}),g.qZA(),g.qZA(),g.qZA(),g.TgZ(62,"div",21),g.TgZ(63,"div",22),g.TgZ(64,"nz-code-box",23),g._UZ(65,"nz-demo-switch-basic",24),g.TgZ(66,"div",25),g.IAx(),g.TgZ(67,"p"),g._uU(68,"\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.TgZ(69,"nz-code-box",26),g._UZ(70,"nz-demo-switch-text",24),g.TgZ(71,"div",25),g.IAx(),g.TgZ(72,"p"),g._uU(73,"\u5e26\u6709\u6587\u5b57\u548c\u56fe\u6807\u3002"),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.TgZ(74,"nz-code-box",27),g._UZ(75,"nz-demo-switch-loading",24),g.TgZ(76,"div",25),g.IAx(),g.TgZ(77,"p"),g._uU(78,"\u6807\u8bc6\u5f00\u5173\u64cd\u4f5c\u4ecd\u5728\u6267\u884c\u4e2d\u3002"),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(79,"div",22),g.TgZ(80,"nz-code-box",28),g._UZ(81,"nz-demo-switch-disabled",24),g.TgZ(82,"div",25),g.IAx(),g.TgZ(83,"p"),g._uU(84,"Switch \u5931\u6548\u72b6\u6001\u3002"),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.TgZ(85,"nz-code-box",29),g._UZ(86,"nz-demo-switch-size",24),g.TgZ(87,"div",25),g.IAx(),g.TgZ(88,"p"),g.TgZ(89,"code"),g._uU(90,'nzSize="small"'),g.qZA(),g._uU(91," \u8868\u793a\u5c0f\u53f7\u5f00\u5173\u3002"),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.TgZ(92,"nz-code-box",30),g._UZ(93,"nz-demo-switch-control",24),g.TgZ(94,"div",25),g.IAx(),g.TgZ(95,"p"),g.TgZ(96,"code"),g._uU(97,"Switch"),g.qZA(),g._uU(98," \u7684\u72b6\u6001\u5b8c\u5168\u7531\u7528\u6237\u63a5\u7ba1\uff0c\u4e0d\u518d\u81ea\u52a8\u6839\u636e\u70b9\u51fb\u4e8b\u4ef6\u6539\u53d8\u6570\u636e\u3002"),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(99,"section",31),g.IAx(),g.TgZ(100,"h2",32),g.TgZ(101,"span"),g._uU(102,"API"),g.qZA(),g.TgZ(103,"a",33),g._uU(104,"#"),g.qZA(),g.qZA(),g.TgZ(105,"h3",34),g.TgZ(106,"span"),g._uU(107,"nz-switch"),g.qZA(),g.TgZ(108,"label",35),g._uU(109,"component"),g.qZA(),g.TgZ(110,"a",36),g._uU(111,"#"),g.qZA(),g.qZA(),g.TgZ(112,"table"),g.TgZ(113,"thead"),g.TgZ(114,"tr"),g.TgZ(115,"th"),g._uU(116,"\u53c2\u6570"),g.qZA(),g.TgZ(117,"th"),g._uU(118,"\u8bf4\u660e"),g.qZA(),g.TgZ(119,"th"),g._uU(120,"\u7c7b\u578b"),g.qZA(),g.TgZ(121,"th"),g._uU(122,"\u9ed8\u8ba4\u503c"),g.qZA(),g.TgZ(123,"th"),g._uU(124,"\u5168\u5c40\u914d\u7f6e"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(125,"tbody"),g.TgZ(126,"tr"),g.TgZ(127,"td"),g.TgZ(128,"code"),g._uU(129,"[ngModel]"),g.qZA(),g.qZA(),g.TgZ(130,"td"),g._uU(131,"\u6307\u5b9a\u5f53\u524d\u662f\u5426\u9009\u4e2d\uff0c\u53ef\u53cc\u5411\u7ed1\u5b9a"),g.qZA(),g.TgZ(132,"td"),g.TgZ(133,"code"),g._uU(134,"boolean"),g.qZA(),g.qZA(),g.TgZ(135,"td"),g.TgZ(136,"code"),g._uU(137,"false"),g.qZA(),g.qZA(),g._UZ(138,"td"),g.qZA(),g.TgZ(139,"tr"),g.TgZ(140,"td"),g.TgZ(141,"code"),g._uU(142,"[nzCheckedChildren]"),g.qZA(),g.qZA(),g.TgZ(143,"td"),g._uU(144,"\u9009\u4e2d\u65f6\u7684\u5185\u5bb9"),g.qZA(),g.TgZ(145,"td"),g.TgZ(146,"code"),g._uU(147,"string | TemplateRef<void>"),g.qZA(),g.qZA(),g.TgZ(148,"td"),g._uU(149,"-"),g.qZA(),g._UZ(150,"td"),g.qZA(),g.TgZ(151,"tr"),g.TgZ(152,"td"),g.TgZ(153,"code"),g._uU(154,"[nzUnCheckedChildren]"),g.qZA(),g.qZA(),g.TgZ(155,"td"),g._uU(156,"\u975e\u9009\u4e2d\u65f6\u7684\u5185\u5bb9"),g.qZA(),g.TgZ(157,"td"),g.TgZ(158,"code"),g._uU(159,"string | TemplateRef<void>"),g.qZA(),g.qZA(),g.TgZ(160,"td"),g._uU(161,"-"),g.qZA(),g._UZ(162,"td"),g.qZA(),g.TgZ(163,"tr"),g.TgZ(164,"td"),g.TgZ(165,"code"),g._uU(166,"[nzDisabled]"),g.qZA(),g.qZA(),g.TgZ(167,"td"),g._uU(168,"disable \u72b6\u6001"),g.qZA(),g.TgZ(169,"td"),g.TgZ(170,"code"),g._uU(171,"boolean"),g.qZA(),g.qZA(),g.TgZ(172,"td"),g.TgZ(173,"code"),g._uU(174,"false"),g.qZA(),g.qZA(),g._UZ(175,"td"),g.qZA(),g.TgZ(176,"tr"),g.TgZ(177,"td"),g.TgZ(178,"code"),g._uU(179,"[nzSize]"),g.qZA(),g.qZA(),g.TgZ(180,"td"),g._uU(181,"\u5f00\u5173\u5927\u5c0f\uff0c\u53ef\u9009\u503c\uff1a"),g.TgZ(182,"code"),g._uU(183,"default"),g.qZA(),g.TgZ(184,"code"),g._uU(185,"small"),g.qZA(),g.qZA(),g.TgZ(186,"td"),g.TgZ(187,"code"),g._uU(188,"'small' | 'default'"),g.qZA(),g.qZA(),g.TgZ(189,"td"),g.TgZ(190,"code"),g._uU(191,"'default'"),g.qZA(),g.qZA(),g.TgZ(192,"td"),g._uU(193,"\u2705"),g.qZA(),g.qZA(),g.TgZ(194,"tr"),g.TgZ(195,"td"),g.TgZ(196,"code"),g._uU(197,"[nzLoading]"),g.qZA(),g.qZA(),g.TgZ(198,"td"),g._uU(199,"\u52a0\u8f7d\u4e2d\u7684\u5f00\u5173"),g.qZA(),g.TgZ(200,"td"),g.TgZ(201,"code"),g._uU(202,"boolean"),g.qZA(),g.qZA(),g.TgZ(203,"td"),g.TgZ(204,"code"),g._uU(205,"false"),g.qZA(),g.qZA(),g._UZ(206,"td"),g.qZA(),g.TgZ(207,"tr"),g.TgZ(208,"td"),g.TgZ(209,"code"),g._uU(210,"[nzControl]"),g.qZA(),g.qZA(),g.TgZ(211,"td"),g._uU(212,"\u662f\u5426\u5b8c\u5168\u7531\u7528\u6237\u63a7\u5236\u72b6\u6001"),g.qZA(),g.TgZ(213,"td"),g.TgZ(214,"code"),g._uU(215,"boolean"),g.qZA(),g.qZA(),g.TgZ(216,"td"),g.TgZ(217,"code"),g._uU(218,"false"),g.qZA(),g.qZA(),g._UZ(219,"td"),g.qZA(),g.TgZ(220,"tr"),g.TgZ(221,"td"),g.TgZ(222,"code"),g._uU(223,"(ngModelChange)"),g.qZA(),g.qZA(),g.TgZ(224,"td"),g._uU(225,"\u5f53\u524d\u662f\u5426\u9009\u4e2d\u7684\u56de\u8c03"),g.qZA(),g.TgZ(226,"td"),g.TgZ(227,"code"),g._uU(228,"EventEmitter<boolean>"),g.qZA(),g.qZA(),g.TgZ(229,"td"),g.TgZ(230,"code"),g._uU(231,"false"),g.qZA(),g.qZA(),g._UZ(232,"td"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(233,"h4",37),g.TgZ(234,"span"),g._uU(235,"\u65b9\u6cd5"),g.qZA(),g.TgZ(236,"a",38),g._uU(237,"#"),g.qZA(),g.qZA(),g.TgZ(238,"table"),g.TgZ(239,"thead"),g.TgZ(240,"tr"),g.TgZ(241,"th"),g._uU(242,"\u540d\u79f0"),g.qZA(),g.TgZ(243,"th"),g._uU(244,"\u63cf\u8ff0"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(245,"tbody"),g.TgZ(246,"tr"),g.TgZ(247,"td"),g._uU(248,"focus()"),g.qZA(),g.TgZ(249,"td"),g._uU(250,"\u83b7\u53d6\u7126\u70b9"),g.qZA(),g.qZA(),g.TgZ(251,"tr"),g.TgZ(252,"td"),g._uU(253,"blur()"),g.qZA(),g.TgZ(254,"td"),g._uU(255,"\u79fb\u9664\u7126\u70b9"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.fQ9(),g.qZA(),g.qZA()),2&n&&(g.xp6(1),g.Q6J("nzOffsetTop",16),g.xp6(1),g.Q6J("nzAffix",!1),g.xp6(60),g.Q6J("nzGutter",16),g.xp6(1),g.Q6J("nzXl",12)("nzSpan",24),g.xp6(1),g.Q6J("nzId","components-switch-demo-basic")("nzLink","components-switch-demo-basic")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/basic.md"),g.xp6(5),g.Q6J("nzId","components-switch-demo-text")("nzLink","components-switch-demo-text")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/text.md"),g.xp6(5),g.Q6J("nzId","components-switch-demo-loading")("nzLink","components-switch-demo-loading")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/loading.md"),g.xp6(5),g.Q6J("nzXl",12)("nzSpan",24),g.xp6(1),g.Q6J("nzId","components-switch-demo-disabled")("nzLink","components-switch-demo-disabled")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/disabled.md"),g.xp6(5),g.Q6J("nzId","components-switch-demo-size")("nzLink","components-switch-demo-size")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/size.md"),g.xp6(7),g.Q6J("nzId","components-switch-demo-control")("nzLink","components-switch-demo-control")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/control.md"))},directives:[l.$,r.IT,r.Fp,z.w,c.Ls,h.SY,u.SK,u.t3,a.G,m,p,U,w,f,b],encapsulation:2}),n})(),k=(()=>{class n{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Xpm({type:n,selectors:[["nz-demo-switch"]],viewQuery:function(n,e){if(1&n&&g.Gf(a.G,5),2&n){let n;g.iGM(n=g.CRH())&&(e.codeBoxes=n)}},decls:267,vars:25,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-switch-demo-basic","nzTitle","Basic"],["nzHref","#components-switch-demo-disabled","nzTitle","Disabled"],["nzHref","#components-switch-demo-text","nzTitle","Text & icon"],["nzHref","#components-switch-demo-size","nzTitle","Two sizes"],["nzHref","#components-switch-demo-loading","nzTitle","Loading"],["nzHref","#components-switch-demo-control","nzTitle","Control"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-switch-basic","nzGenerateCommand","ng g ng-zorro-antd:switch-basic <name>","nzComponentName","NzDemoSwitchBasicComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["demo",""],["intro",""],["nzTitle","Text & icon","nzSelector","nz-demo-switch-text","nzGenerateCommand","ng g ng-zorro-antd:switch-text <name>","nzComponentName","NzDemoSwitchTextComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","Loading","nzSelector","nz-demo-switch-loading","nzGenerateCommand","ng g ng-zorro-antd:switch-loading <name>","nzComponentName","NzDemoSwitchLoadingComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","Disabled","nzSelector","nz-demo-switch-disabled","nzGenerateCommand","ng g ng-zorro-antd:switch-disabled <name>","nzComponentName","NzDemoSwitchDisabledComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","Two sizes","nzSelector","nz-demo-switch-size","nzGenerateCommand","ng g ng-zorro-antd:switch-size <name>","nzComponentName","NzDemoSwitchSizeComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","Control","nzSelector","nz-demo-switch-control","nzGenerateCommand","ng g ng-zorro-antd:switch-control <name>","nzComponentName","NzDemoSwitchControlComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-switch"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-switch'",1,"anchor"],["id","methods"],["onclick","window.location.hash = 'methods'",1,"anchor"]],template:function(n,e){1&n&&(g.TgZ(0,"article"),g.TgZ(1,"nz-affix",0),g.TgZ(2,"nz-anchor",1),g.NdJ("nzClick",function(n){return e.goLink(n)}),g._UZ(3,"nz-link",2),g._UZ(4,"nz-link",3),g._UZ(5,"nz-link",4),g._UZ(6,"nz-link",5),g._UZ(7,"nz-link",6),g._UZ(8,"nz-link",7),g._UZ(9,"nz-link",8),g.qZA(),g.qZA(),g.TgZ(10,"section",9),g.TgZ(11,"h1"),g._uU(12,"Switch"),g._UZ(13,"span",10),g._UZ(14,"span",11),g.TgZ(15,"a",12),g._UZ(16,"i",13),g.qZA(),g.qZA(),g.TgZ(17,"section",9),g.IAx(),g.TgZ(18,"p"),g._uU(19,"Switching Selector."),g.qZA(),g.TgZ(20,"h2",14),g.TgZ(21,"span"),g._uU(22,"When To Use"),g.qZA(),g.TgZ(23,"a",15),g._uU(24,"#"),g.qZA(),g.qZA(),g.TgZ(25,"ul"),g.TgZ(26,"li"),g._uU(27,"If you need to represent the switching between two states or on-off state."),g.qZA(),g.TgZ(28,"li"),g._uU(29,"The difference between "),g.TgZ(30,"code"),g._uU(31,"Switch"),g.qZA(),g._uU(32," and "),g.TgZ(33,"code"),g._uU(34,"Checkbox"),g.qZA(),g._uU(35," is that "),g.TgZ(36,"code"),g._uU(37,"Switch"),g.qZA(),g._uU(38," will trigger a state change directly when you toggle it, while "),g.TgZ(39,"code"),g._uU(40,"Checkbox"),g.qZA(),g._uU(41," is generally used for state marking, which should work in conjunction with submit operation."),g.qZA(),g.qZA(),g.TgZ(42,"pre",16),g.TgZ(43,"code"),g.TgZ(44,"span",17),g._uU(45,"import"),g.qZA(),g._uU(46," "),g.TgZ(47,"span",18),g._uU(48,"{"),g.qZA(),g._uU(49," NzSwitchModule "),g.TgZ(50,"span",18),g._uU(51,"}"),g.qZA(),g._uU(52," "),g.TgZ(53,"span",17),g._uU(54,"from"),g.qZA(),g._uU(55," "),g.TgZ(56,"span",19),g._uU(57,"'ng-zorro-antd/switch'"),g.qZA(),g.TgZ(58,"span",18),g._uU(59,";"),g.qZA(),g.qZA(),g.qZA(),g.fQ9(),g.qZA(),g.TgZ(60,"h2"),g.TgZ(61,"span"),g._uU(62,"Examples"),g.qZA(),g.TgZ(63,"i",20),g.NdJ("click",function(){return e.expandAllCode()}),g.qZA(),g.qZA(),g.qZA(),g.TgZ(64,"div",21),g.TgZ(65,"div",22),g.TgZ(66,"nz-code-box",23),g._UZ(67,"nz-demo-switch-basic",24),g.TgZ(68,"div",25),g.IAx(),g.TgZ(69,"p"),g._uU(70,"The most basic usage."),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.TgZ(71,"nz-code-box",26),g._UZ(72,"nz-demo-switch-text",24),g.TgZ(73,"div",25),g.IAx(),g.TgZ(74,"p"),g._uU(75,"With text and icon."),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.TgZ(76,"nz-code-box",27),g._UZ(77,"nz-demo-switch-loading",24),g.TgZ(78,"div",25),g.IAx(),g.TgZ(79,"p"),g._uU(80,"Mark a pending state of switch."),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(81,"div",22),g.TgZ(82,"nz-code-box",28),g._UZ(83,"nz-demo-switch-disabled",24),g.TgZ(84,"div",25),g.IAx(),g.TgZ(85,"p"),g._uU(86,"Disabled state of "),g.TgZ(87,"code"),g._uU(88,"Switch"),g.qZA(),g._uU(89,"."),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.TgZ(90,"nz-code-box",29),g._UZ(91,"nz-demo-switch-size",24),g.TgZ(92,"div",25),g.IAx(),g.TgZ(93,"p"),g.TgZ(94,"code"),g._uU(95,'nzSize="small"'),g.qZA(),g._uU(96," represents a small sized switch."),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.TgZ(97,"nz-code-box",30),g._UZ(98,"nz-demo-switch-control",24),g.TgZ(99,"div",25),g.IAx(),g.TgZ(100,"p"),g._uU(101,"The status of "),g.TgZ(102,"code"),g._uU(103,"Switch"),g.qZA(),g._uU(104," is completely up to the user and no longer automatically changes the data based on the click event."),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(105,"section",31),g.IAx(),g.TgZ(106,"h2",32),g.TgZ(107,"span"),g._uU(108,"API"),g.qZA(),g.TgZ(109,"a",33),g._uU(110,"#"),g.qZA(),g.qZA(),g.TgZ(111,"h3",34),g.TgZ(112,"span"),g._uU(113,"nz-switch"),g.qZA(),g.TgZ(114,"label",35),g._uU(115,"component"),g.qZA(),g.TgZ(116,"a",36),g._uU(117,"#"),g.qZA(),g.qZA(),g.TgZ(118,"table"),g.TgZ(119,"thead"),g.TgZ(120,"tr"),g.TgZ(121,"th"),g._uU(122,"Property"),g.qZA(),g.TgZ(123,"th"),g._uU(124,"Description"),g.qZA(),g.TgZ(125,"th"),g._uU(126,"Type"),g.qZA(),g.TgZ(127,"th"),g._uU(128,"Default"),g.qZA(),g.TgZ(129,"th"),g._uU(130,"Global Config"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(131,"tbody"),g.TgZ(132,"tr"),g.TgZ(133,"td"),g.TgZ(134,"code"),g._uU(135,"[ngModel]"),g.qZA(),g.qZA(),g.TgZ(136,"td"),g._uU(137,"determine whether the "),g.TgZ(138,"code"),g._uU(139,"nz-switch"),g.qZA(),g._uU(140," is checked, double binding"),g.qZA(),g.TgZ(141,"td"),g.TgZ(142,"code"),g._uU(143,"boolean"),g.qZA(),g.qZA(),g.TgZ(144,"td"),g.TgZ(145,"code"),g._uU(146,"false"),g.qZA(),g.qZA(),g._UZ(147,"td"),g.qZA(),g.TgZ(148,"tr"),g.TgZ(149,"td"),g.TgZ(150,"code"),g._uU(151,"[nzCheckedChildren]"),g.qZA(),g.qZA(),g.TgZ(152,"td"),g._uU(153,"content to be shown when the state is checked"),g.qZA(),g.TgZ(154,"td"),g.TgZ(155,"code"),g._uU(156,"string | TemplateRef<void>"),g.qZA(),g.qZA(),g.TgZ(157,"td"),g._uU(158,"-"),g.qZA(),g._UZ(159,"td"),g.qZA(),g.TgZ(160,"tr"),g.TgZ(161,"td"),g.TgZ(162,"code"),g._uU(163,"[nzUnCheckedChildren]"),g.qZA(),g.qZA(),g.TgZ(164,"td"),g._uU(165,"content to be shown when the state is unchecked"),g.qZA(),g.TgZ(166,"td"),g.TgZ(167,"code"),g._uU(168,"string | TemplateRef<void>"),g.qZA(),g.qZA(),g.TgZ(169,"td"),g._uU(170,"-"),g.qZA(),g._UZ(171,"td"),g.qZA(),g.TgZ(172,"tr"),g.TgZ(173,"td"),g.TgZ(174,"code"),g._uU(175,"[nzDisabled]"),g.qZA(),g.qZA(),g.TgZ(176,"td"),g._uU(177,"Disable switch"),g.qZA(),g.TgZ(178,"td"),g.TgZ(179,"code"),g._uU(180,"boolean"),g.qZA(),g.qZA(),g.TgZ(181,"td"),g.TgZ(182,"code"),g._uU(183,"false"),g.qZA(),g.qZA(),g._UZ(184,"td"),g.qZA(),g.TgZ(185,"tr"),g.TgZ(186,"td"),g.TgZ(187,"code"),g._uU(188,"[nzSize]"),g.qZA(),g.qZA(),g.TgZ(189,"td"),g._uU(190,"the size of the "),g.TgZ(191,"code"),g._uU(192,"nz-switch"),g.qZA(),g._uU(193,", options: "),g.TgZ(194,"code"),g._uU(195,"default"),g.qZA(),g.TgZ(196,"code"),g._uU(197,"small"),g.qZA(),g.qZA(),g.TgZ(198,"td"),g.TgZ(199,"code"),g._uU(200,"'small' | 'default'"),g.qZA(),g.qZA(),g.TgZ(201,"td"),g.TgZ(202,"code"),g._uU(203,"'default'"),g.qZA(),g.qZA(),g.TgZ(204,"td"),g._uU(205,"\u2705"),g.qZA(),g.qZA(),g.TgZ(206,"tr"),g.TgZ(207,"td"),g.TgZ(208,"code"),g._uU(209,"[nzLoading]"),g.qZA(),g.qZA(),g.TgZ(210,"td"),g._uU(211,"loading state of switch"),g.qZA(),g.TgZ(212,"td"),g.TgZ(213,"code"),g._uU(214,"boolean"),g.qZA(),g.qZA(),g.TgZ(215,"td"),g.TgZ(216,"code"),g._uU(217,"false"),g.qZA(),g.qZA(),g._UZ(218,"td"),g.qZA(),g.TgZ(219,"tr"),g.TgZ(220,"td"),g.TgZ(221,"code"),g._uU(222,"[nzControl]"),g.qZA(),g.qZA(),g.TgZ(223,"td"),g._uU(224,"determine whether fully control state by user"),g.qZA(),g.TgZ(225,"td"),g.TgZ(226,"code"),g._uU(227,"boolean"),g.qZA(),g.qZA(),g.TgZ(228,"td"),g.TgZ(229,"code"),g._uU(230,"false"),g.qZA(),g.qZA(),g._UZ(231,"td"),g.qZA(),g.TgZ(232,"tr"),g.TgZ(233,"td"),g.TgZ(234,"code"),g._uU(235,"(ngModelChange)"),g.qZA(),g.qZA(),g.TgZ(236,"td"),g._uU(237,"a callback function, can be executed when the checked state is changing"),g.qZA(),g.TgZ(238,"td"),g.TgZ(239,"code"),g._uU(240,"EventEmitter<boolean>"),g.qZA(),g.qZA(),g.TgZ(241,"td"),g._uU(242,"-"),g.qZA(),g._UZ(243,"td"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(244,"h4",37),g.TgZ(245,"span"),g._uU(246,"Methods"),g.qZA(),g.TgZ(247,"a",38),g._uU(248,"#"),g.qZA(),g.qZA(),g.TgZ(249,"table"),g.TgZ(250,"thead"),g.TgZ(251,"tr"),g.TgZ(252,"th"),g._uU(253,"Name"),g.qZA(),g.TgZ(254,"th"),g._uU(255,"Description"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(256,"tbody"),g.TgZ(257,"tr"),g.TgZ(258,"td"),g._uU(259,"focus()"),g.qZA(),g.TgZ(260,"td"),g._uU(261,"get focus"),g.qZA(),g.qZA(),g.TgZ(262,"tr"),g.TgZ(263,"td"),g._uU(264,"blur()"),g.qZA(),g.TgZ(265,"td"),g._uU(266,"remove focus"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.fQ9(),g.qZA(),g.qZA()),2&n&&(g.xp6(1),g.Q6J("nzOffsetTop",16),g.xp6(1),g.Q6J("nzAffix",!1),g.xp6(62),g.Q6J("nzGutter",16),g.xp6(1),g.Q6J("nzXl",12)("nzSpan",24),g.xp6(1),g.Q6J("nzId","components-switch-demo-basic")("nzLink","components-switch-demo-basic")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/basic.md"),g.xp6(5),g.Q6J("nzId","components-switch-demo-text")("nzLink","components-switch-demo-text")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/text.md"),g.xp6(5),g.Q6J("nzId","components-switch-demo-loading")("nzLink","components-switch-demo-loading")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/loading.md"),g.xp6(5),g.Q6J("nzXl",12)("nzSpan",24),g.xp6(1),g.Q6J("nzId","components-switch-demo-disabled")("nzLink","components-switch-demo-disabled")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/disabled.md"),g.xp6(8),g.Q6J("nzId","components-switch-demo-size")("nzLink","components-switch-demo-size")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/size.md"),g.xp6(7),g.Q6J("nzId","components-switch-demo-control")("nzLink","components-switch-demo-control")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/control.md"))},directives:[l.$,r.IT,r.Fp,z.w,c.Ls,h.SY,u.SK,u.t3,a.G,m,p,U,w,f,b],encapsulation:2}),n})(),C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=g.oAB({type:n}),n.\u0275inj=g.cJS({imports:[[Z.l,...s,o.Bz.forChild([{path:"en",component:k},{path:"zh",component:x}])]]}),n})()}}]);