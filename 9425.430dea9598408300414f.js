(self.webpackChunkenlink=self.webpackChunkenlink||[]).push([[9425],{9425:(n,e,o)=>{"use strict";o.r(e),o.d(e,{NzDemoSpinModule:()=>k});var t=o(3423),i=o(9358),d=o(1729),s=o(480),Z=o(945),p=o(8453);const a=[d.j,s.L,Z.PV,p.m];var r=o(4512),g=o(7716),c=o(6175),z=o(8925),m=o(7420),u=o(6704);let l=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Xpm({type:n,selectors:[["nz-demo-spin-basic"]],decls:1,vars:0,consts:[["nzSimple",""]],template:function(n,e){1&n&&g._UZ(0,"nz-spin",0)},directives:[d.W],encapsulation:2}),n})(),T=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Xpm({type:n,selectors:[["nz-demo-spin-inside"]],decls:2,vars:0,consts:[[1,"example"],["nzSimple",""]],template:function(n,e){1&n&&(g.TgZ(0,"div",0),g._UZ(1,"nz-spin",1),g.qZA())},directives:[d.W],styles:[".example[_ngcontent-%COMP%]{text-align:center;background:#0000000d;border-radius:4px;padding:30px 50px;margin:20px 0}"]}),n})(),A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Xpm({type:n,selectors:[["nz-demo-spin-tip"]],decls:2,vars:0,consts:[["nzTip","Loading..."],["nzType","info","nzMessage","Alert message title","nzDescription","Further details about the context of this alert."]],template:function(n,e){1&n&&(g.TgZ(0,"nz-spin",0),g._UZ(1,"nz-alert",1),g.qZA())},directives:[d.W,s.r],encapsulation:2}),n})();function q(n,e){1&n&&g._UZ(0,"i",2)}let U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Xpm({type:n,selectors:[["nz-demo-spin-custom-indicator"]],decls:3,vars:1,consts:[["indicatorTemplate",""],["nzSimple","",3,"nzIndicator"],["nz-icon","","nzType","loading"]],template:function(n,e){if(1&n&&(g.YNc(0,q,1,0,"ng-template",null,0,g.W1O),g._UZ(2,"nz-spin",1)),2&n){const n=g.MAs(1);g.xp6(2),g.Q6J("nzIndicator",n)}},directives:[d.W,Z.Ls],styles:["i[_ngcontent-%COMP%]{font-size:24px}"]}),n})(),_=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Xpm({type:n,selectors:[["nz-demo-spin-size"]],decls:3,vars:2,consts:[["nzSimple","",3,"nzSize"],["nzSimple",""]],template:function(n,e){1&n&&(g._UZ(0,"nz-spin",0),g._UZ(1,"nz-spin",1),g._UZ(2,"nz-spin",0)),2&n&&(g.Q6J("nzSize","small"),g.xp6(2),g.Q6J("nzSize","large"))},directives:[d.W],styles:["nz-spin[_ngcontent-%COMP%]{display:inline-block;margin-right:16px}"]}),n})();var f=o(665);let h=(()=>{class n{constructor(){this.isSpinning=!1}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Xpm({type:n,selectors:[["nz-demo-spin-nested"]],decls:6,vars:5,consts:[[3,"nzSpinning"],[3,"nzType","nzMessage","nzDescription"],[3,"ngModel","ngModelChange"]],template:function(n,e){1&n&&(g.TgZ(0,"nz-spin",0),g._UZ(1,"nz-alert",1),g.qZA(),g._UZ(2,"br"),g.TgZ(3,"div"),g._uU(4," Loading state\uff1a "),g.TgZ(5,"nz-switch",2),g.NdJ("ngModelChange",function(n){return e.isSpinning=n}),g.qZA(),g.qZA()),2&n&&(g.Q6J("nzSpinning",e.isSpinning),g.xp6(1),g.Q6J("nzType","info")("nzMessage","Alert message title")("nzDescription","Further details about the context of this alert."),g.xp6(4),g.Q6J("ngModel",e.isSpinning))},directives:[d.W,s.r,p.i,f.JJ,f.On],encapsulation:2}),n})(),x=(()=>{class n{constructor(){this.isSpinning=!1}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Xpm({type:n,selectors:[["nz-demo-spin-delay-and-debounce"]],decls:6,vars:6,consts:[[3,"nzSpinning","nzDelay"],[3,"nzType","nzMessage","nzDescription"],[3,"ngModel","ngModelChange"]],template:function(n,e){1&n&&(g.TgZ(0,"nz-spin",0),g._UZ(1,"nz-alert",1),g.qZA(),g._UZ(2,"br"),g.TgZ(3,"div"),g._uU(4," Loading state\uff1a "),g.TgZ(5,"nz-switch",2),g.NdJ("ngModelChange",function(n){return e.isSpinning=n}),g.qZA(),g.qZA()),2&n&&(g.Q6J("nzSpinning",e.isSpinning)("nzDelay",500),g.xp6(1),g.Q6J("nzType","info")("nzMessage","Alert message title")("nzDescription","Further details about the context of this alert."),g.xp6(4),g.Q6J("ngModel",e.isSpinning))},directives:[d.W,s.r,p.i,f.JJ,f.On],encapsulation:2}),n})(),b=(()=>{class n{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Xpm({type:n,selectors:[["nz-demo-spin"]],viewQuery:function(n,e){if(1&n&&g.Gf(r.G,5),2&n){let n;g.iGM(n=g.CRH())&&(e.codeBoxes=n)}},decls:201,vars:28,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-spin-demo-basic","nzTitle","\u57fa\u672c\u7528\u6cd5"],["nzHref","#components-spin-demo-size","nzTitle","\u5404\u79cd\u5927\u5c0f"],["nzHref","#components-spin-demo-inside","nzTitle","\u5bb9\u5668"],["nzHref","#components-spin-demo-nested","nzTitle","\u5361\u7247\u52a0\u8f7d\u4e2d"],["nzHref","#components-spin-demo-tip","nzTitle","\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848"],["nzHref","#components-spin-demo-delay-and-debounce","nzTitle","\u5ef6\u8fdf"],["nzHref","#components-spin-demo-custom-indicator","nzTitle","\u81ea\u5b9a\u4e49\u6307\u793a\u7b26"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u57fa\u672c\u7528\u6cd5","nzSelector","nz-demo-spin-basic","nzGenerateCommand","ng g ng-zorro-antd:spin-basic <name>","nzComponentName","NzDemoSpinBasicComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["demo",""],["intro",""],["nzTitle","\u5bb9\u5668","nzSelector","nz-demo-spin-inside","nzGenerateCommand","ng g ng-zorro-antd:spin-inside <name>","nzComponentName","NzDemoSpinInsideComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848","nzSelector","nz-demo-spin-tip","nzGenerateCommand","ng g ng-zorro-antd:spin-tip <name>","nzComponentName","NzDemoSpinTipComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","\u81ea\u5b9a\u4e49\u6307\u793a\u7b26","nzSelector","nz-demo-spin-custom-indicator","nzGenerateCommand","ng g ng-zorro-antd:spin-custom-indicator <name>","nzComponentName","NzDemoSpinCustomIndicatorComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","\u5404\u79cd\u5927\u5c0f","nzSelector","nz-demo-spin-size","nzGenerateCommand","ng g ng-zorro-antd:spin-size <name>","nzComponentName","NzDemoSpinSizeComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","\u5361\u7247\u52a0\u8f7d\u4e2d","nzSelector","nz-demo-spin-nested","nzGenerateCommand","ng g ng-zorro-antd:spin-nested <name>","nzComponentName","NzDemoSpinNestedComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","\u5ef6\u8fdf","nzSelector","nz-demo-spin-delay-and-debounce","nzGenerateCommand","ng g ng-zorro-antd:spin-delay-and-debounce <name>","nzComponentName","NzDemoSpinDelayAndDebounceComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-spin"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-spin'",1,"anchor"]],template:function(n,e){1&n&&(g.TgZ(0,"article"),g.TgZ(1,"nz-affix",0),g.TgZ(2,"nz-anchor",1),g.NdJ("nzClick",function(n){return e.goLink(n)}),g._UZ(3,"nz-link",2),g._UZ(4,"nz-link",3),g._UZ(5,"nz-link",4),g._UZ(6,"nz-link",5),g._UZ(7,"nz-link",6),g._UZ(8,"nz-link",7),g._UZ(9,"nz-link",8),g._UZ(10,"nz-link",9),g.qZA(),g.qZA(),g.TgZ(11,"section",10),g.TgZ(12,"h1"),g._uU(13,"Spin"),g.TgZ(14,"span",11),g._uU(15,"\u52a0\u8f7d\u4e2d"),g.qZA(),g._UZ(16,"span",12),g.TgZ(17,"a",13),g._UZ(18,"i",14),g.qZA(),g.qZA(),g.TgZ(19,"section",10),g.IAx(),g.TgZ(20,"p"),g._uU(21,"\u7528\u4e8e\u9875\u9762\u548c\u533a\u5757\u7684\u52a0\u8f7d\u4e2d\u72b6\u6001\u3002"),g.qZA(),g.TgZ(22,"h2",15),g.TgZ(23,"span"),g._uU(24,"\u4f55\u65f6\u4f7f\u7528"),g.qZA(),g.TgZ(25,"a",16),g._uU(26,"#"),g.qZA(),g.qZA(),g.TgZ(27,"p"),g._uU(28,"\u9875\u9762\u5c40\u90e8\u5904\u4e8e\u7b49\u5f85\u5f02\u6b65\u6570\u636e\u6216\u6b63\u5728\u6e32\u67d3\u8fc7\u7a0b\u65f6\uff0c\u5408\u9002\u7684\u52a0\u8f7d\u52a8\u6548\u4f1a\u6709\u6548\u7f13\u89e3\u7528\u6237\u7684\u7126\u8651\u3002"),g.qZA(),g.TgZ(29,"pre",17),g.TgZ(30,"code"),g.TgZ(31,"span",18),g._uU(32,"import"),g.qZA(),g._uU(33," "),g.TgZ(34,"span",19),g._uU(35,"{"),g.qZA(),g._uU(36," NzSpinModule "),g.TgZ(37,"span",19),g._uU(38,"}"),g.qZA(),g._uU(39," "),g.TgZ(40,"span",18),g._uU(41,"from"),g.qZA(),g._uU(42," "),g.TgZ(43,"span",20),g._uU(44,"'ng-zorro-antd/spin'"),g.qZA(),g.TgZ(45,"span",19),g._uU(46,";"),g.qZA(),g.qZA(),g.qZA(),g.fQ9(),g.qZA(),g.TgZ(47,"h2"),g.TgZ(48,"span"),g._uU(49,"\u4ee3\u7801\u6f14\u793a"),g.qZA(),g.TgZ(50,"i",21),g.NdJ("click",function(){return e.expandAllCode()}),g.qZA(),g.qZA(),g.qZA(),g.TgZ(51,"div",22),g.TgZ(52,"div",23),g.TgZ(53,"nz-code-box",24),g._UZ(54,"nz-demo-spin-basic",25),g.TgZ(55,"div",26),g.IAx(),g.TgZ(56,"p"),g._uU(57,"\u4e00\u4e2a\u7b80\u5355\u7684 loading \u72b6\u6001\u3002"),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.TgZ(58,"nz-code-box",27),g._UZ(59,"nz-demo-spin-inside",25),g.TgZ(60,"div",26),g.IAx(),g.TgZ(61,"p"),g._uU(62,"\u653e\u5165\u4e00\u4e2a\u5bb9\u5668\u4e2d\u3002"),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.TgZ(63,"nz-code-box",28),g._UZ(64,"nz-demo-spin-tip",25),g.TgZ(65,"div",26),g.IAx(),g.TgZ(66,"p"),g._uU(67,"\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848\u3002"),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.TgZ(68,"nz-code-box",29),g._UZ(69,"nz-demo-spin-custom-indicator",25),g.TgZ(70,"div",26),g.IAx(),g.TgZ(71,"p"),g._uU(72,"\u4f7f\u7528\u81ea\u5b9a\u4e49\u6307\u793a\u7b26\u3002"),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(73,"div",23),g.TgZ(74,"nz-code-box",30),g._UZ(75,"nz-demo-spin-size",25),g.TgZ(76,"div",26),g.IAx(),g.TgZ(77,"p"),g._uU(78,"\u5c0f\u7684\u7528\u4e8e\u6587\u672c\u52a0\u8f7d\uff0c\u9ed8\u8ba4\u7528\u4e8e\u5361\u7247\u5bb9\u5668\u7ea7\u52a0\u8f7d\uff0c\u5927\u7684\u7528\u4e8e"),g.TgZ(79,"strong"),g._uU(80,"\u9875\u9762\u7ea7"),g.qZA(),g._uU(81,"\u52a0\u8f7d\u3002"),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.TgZ(82,"nz-code-box",31),g._UZ(83,"nz-demo-spin-nested",25),g.TgZ(84,"div",26),g.IAx(),g.TgZ(85,"p"),g._uU(86,"\u53ef\u4ee5\u76f4\u63a5\u628a\u5185\u5bb9\u5185\u5d4c\u5230 "),g.TgZ(87,"code"),g._uU(88,"nz-spin"),g.qZA(),g._uU(89," \u4e2d\uff0c\u5c06\u73b0\u6709\u5bb9\u5668\u53d8\u4e3a\u52a0\u8f7d\u72b6\u6001\u3002"),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.TgZ(90,"nz-code-box",32),g._UZ(91,"nz-demo-spin-delay-and-debounce",25),g.TgZ(92,"div",26),g.IAx(),g.TgZ(93,"p"),g._uU(94,"\u5ef6\u8fdf\u663e\u793a loading \u6548\u679c\u3002\u5f53 spinning \u72b6\u6001\u5728 "),g.TgZ(95,"code"),g._uU(96,"nzDelay"),g.qZA(),g._uU(97," \u65f6\u95f4\u5185\u7ed3\u675f\uff0c\u5219\u4e0d\u663e\u793a loading \u72b6\u6001\u3002"),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(98,"section",33),g.IAx(),g.TgZ(99,"h2",34),g.TgZ(100,"span"),g._uU(101,"API"),g.qZA(),g.TgZ(102,"a",35),g._uU(103,"#"),g.qZA(),g.qZA(),g.TgZ(104,"h3",36),g.TgZ(105,"span"),g._uU(106,"nz-spin"),g.qZA(),g.TgZ(107,"label",37),g._uU(108,"component"),g.qZA(),g.TgZ(109,"a",38),g._uU(110,"#"),g.qZA(),g.qZA(),g.TgZ(111,"table"),g.TgZ(112,"thead"),g.TgZ(113,"tr"),g.TgZ(114,"th"),g._uU(115,"\u53c2\u6570"),g.qZA(),g.TgZ(116,"th"),g._uU(117,"\u8bf4\u660e"),g.qZA(),g.TgZ(118,"th"),g._uU(119,"\u7c7b\u578b"),g.qZA(),g.TgZ(120,"th"),g._uU(121,"\u9ed8\u8ba4\u503c"),g.qZA(),g.TgZ(122,"th"),g._uU(123,"\u5168\u5c40\u914d\u7f6e"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(124,"tbody"),g.TgZ(125,"tr"),g.TgZ(126,"td"),g.TgZ(127,"code"),g._uU(128,"[nzDelay]"),g.qZA(),g.qZA(),g.TgZ(129,"td"),g._uU(130,"\u5ef6\u8fdf\u663e\u793a\u52a0\u8f7d\u6548\u679c\u7684\u65f6\u95f4\uff08\u9632\u6b62\u95ea\u70c1\uff09\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2"),g.qZA(),g.TgZ(131,"td"),g.TgZ(132,"code"),g._uU(133,"number"),g.qZA(),g.qZA(),g.TgZ(134,"td"),g._uU(135,"-"),g.qZA(),g._UZ(136,"td"),g.qZA(),g.TgZ(137,"tr"),g.TgZ(138,"td"),g.TgZ(139,"code"),g._uU(140,"[nzIndicator]"),g.qZA(),g.qZA(),g.TgZ(141,"td"),g._uU(142,"\u52a0\u8f7d\u6307\u793a\u7b26"),g.qZA(),g.TgZ(143,"td"),g.TgZ(144,"code"),g._uU(145,"TemplateRef<void>"),g.qZA(),g.qZA(),g.TgZ(146,"td"),g._uU(147,"-"),g.qZA(),g.TgZ(148,"td"),g._uU(149,"\u2705"),g.qZA(),g.qZA(),g.TgZ(150,"tr"),g.TgZ(151,"td"),g.TgZ(152,"code"),g._uU(153,"[nzSize]"),g.qZA(),g.qZA(),g.TgZ(154,"td"),g._uU(155,"\u7ec4\u4ef6\u5927\u5c0f"),g.qZA(),g.TgZ(156,"td"),g.TgZ(157,"code"),g._uU(158,"'large' | 'small' | 'default'"),g.qZA(),g.qZA(),g.TgZ(159,"td"),g.TgZ(160,"code"),g._uU(161,"'default'"),g.qZA(),g.qZA(),g._UZ(162,"td"),g.qZA(),g.TgZ(163,"tr"),g.TgZ(164,"td"),g.TgZ(165,"code"),g._uU(166,"[nzSpinning]"),g.qZA(),g.qZA(),g.TgZ(167,"td"),g._uU(168,"\u662f\u5426\u65cb\u8f6c"),g.qZA(),g.TgZ(169,"td"),g.TgZ(170,"code"),g._uU(171,"boolean"),g.qZA(),g.qZA(),g.TgZ(172,"td"),g.TgZ(173,"code"),g._uU(174,"true"),g.qZA(),g.qZA(),g._UZ(175,"td"),g.qZA(),g.TgZ(176,"tr"),g.TgZ(177,"td"),g.TgZ(178,"code"),g._uU(179,"[nzSimple]"),g.qZA(),g.qZA(),g.TgZ(180,"td"),g._uU(181,"\u662f\u5426\u5305\u88f9\u5143\u7d20"),g.qZA(),g.TgZ(182,"td"),g.TgZ(183,"code"),g._uU(184,"boolean"),g.qZA(),g.qZA(),g.TgZ(185,"td"),g.TgZ(186,"code"),g._uU(187,"false"),g.qZA(),g.qZA(),g._UZ(188,"td"),g.qZA(),g.TgZ(189,"tr"),g.TgZ(190,"td"),g.TgZ(191,"code"),g._uU(192,"[nzTip]"),g.qZA(),g.qZA(),g.TgZ(193,"td"),g._uU(194,"\u5f53\u4f5c\u4e3a\u5305\u88f9\u5143\u7d20\u65f6\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848"),g.qZA(),g.TgZ(195,"td"),g.TgZ(196,"code"),g._uU(197,"string"),g.qZA(),g.qZA(),g.TgZ(198,"td"),g._uU(199,"-"),g.qZA(),g._UZ(200,"td"),g.qZA(),g.qZA(),g.qZA(),g.fQ9(),g.qZA(),g.qZA()),2&n&&(g.xp6(1),g.Q6J("nzOffsetTop",16),g.xp6(1),g.Q6J("nzAffix",!1),g.xp6(49),g.Q6J("nzGutter",16),g.xp6(1),g.Q6J("nzXl",12)("nzSpan",24),g.xp6(1),g.Q6J("nzId","components-spin-demo-basic")("nzLink","components-spin-demo-basic")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/basic.md"),g.xp6(5),g.Q6J("nzId","components-spin-demo-inside")("nzLink","components-spin-demo-inside")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/inside.md"),g.xp6(5),g.Q6J("nzId","components-spin-demo-tip")("nzLink","components-spin-demo-tip")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/tip.md"),g.xp6(5),g.Q6J("nzId","components-spin-demo-custom-indicator")("nzLink","components-spin-demo-custom-indicator")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/custom-indicator.md"),g.xp6(5),g.Q6J("nzXl",12)("nzSpan",24),g.xp6(1),g.Q6J("nzId","components-spin-demo-size")("nzLink","components-spin-demo-size")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/size.md"),g.xp6(8),g.Q6J("nzId","components-spin-demo-nested")("nzLink","components-spin-demo-nested")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/nested.md"),g.xp6(8),g.Q6J("nzId","components-spin-demo-delay-and-debounce")("nzLink","components-spin-demo-delay-and-debounce")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/delay-and-debounce.md"))},directives:[c.$,z.IT,z.Fp,Z.Ls,m.SY,u.SK,u.t3,r.G,l,T,A,U,_,h,x],encapsulation:2}),n})(),S=(()=>{class n{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Xpm({type:n,selectors:[["nz-demo-spin"]],viewQuery:function(n,e){if(1&n&&g.Gf(r.G,5),2&n){let n;g.iGM(n=g.CRH())&&(e.codeBoxes=n)}},decls:302,vars:28,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-spin-demo-basic","nzTitle","Basic Usage"],["nzHref","#components-spin-demo-size","nzTitle","Size"],["nzHref","#components-spin-demo-inside","nzTitle","Inside a container"],["nzHref","#components-spin-demo-nested","nzTitle","Embedded mode"],["nzHref","#components-spin-demo-tip","nzTitle","Customized description"],["nzHref","#components-spin-demo-delay-and-debounce","nzTitle","delay"],["nzHref","#components-spin-demo-custom-indicator","nzTitle","Custom spinning indicator"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic Usage","nzSelector","nz-demo-spin-basic","nzGenerateCommand","ng g ng-zorro-antd:spin-basic <name>","nzComponentName","NzDemoSpinBasicComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["demo",""],["intro",""],["nzTitle","Inside a container","nzSelector","nz-demo-spin-inside","nzGenerateCommand","ng g ng-zorro-antd:spin-inside <name>","nzComponentName","NzDemoSpinInsideComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","Customized description","nzSelector","nz-demo-spin-tip","nzGenerateCommand","ng g ng-zorro-antd:spin-tip <name>","nzComponentName","NzDemoSpinTipComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","Custom spinning indicator","nzSelector","nz-demo-spin-custom-indicator","nzGenerateCommand","ng g ng-zorro-antd:spin-custom-indicator <name>","nzComponentName","NzDemoSpinCustomIndicatorComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","Size","nzSelector","nz-demo-spin-size","nzGenerateCommand","ng g ng-zorro-antd:spin-size <name>","nzComponentName","NzDemoSpinSizeComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","Embedded mode","nzSelector","nz-demo-spin-nested","nzGenerateCommand","ng g ng-zorro-antd:spin-nested <name>","nzComponentName","NzDemoSpinNestedComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","delay","nzSelector","nz-demo-spin-delay-and-debounce","nzGenerateCommand","ng g ng-zorro-antd:spin-delay-and-debounce <name>","nzComponentName","NzDemoSpinDelayAndDebounceComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],[1,"language-css"],[1,"token","selector"],[1,"token","class"],[1,"token","property"],[1,"token","function"],[1,"token","number"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-spin"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-spin'",1,"anchor"]],template:function(n,e){1&n&&(g.TgZ(0,"article"),g.TgZ(1,"nz-affix",0),g.TgZ(2,"nz-anchor",1),g.NdJ("nzClick",function(n){return e.goLink(n)}),g._UZ(3,"nz-link",2),g._UZ(4,"nz-link",3),g._UZ(5,"nz-link",4),g._UZ(6,"nz-link",5),g._UZ(7,"nz-link",6),g._UZ(8,"nz-link",7),g._UZ(9,"nz-link",8),g._UZ(10,"nz-link",9),g.qZA(),g.qZA(),g.TgZ(11,"section",10),g.TgZ(12,"h1"),g._uU(13,"Spin"),g._UZ(14,"span",11),g._UZ(15,"span",12),g.TgZ(16,"a",13),g._UZ(17,"i",14),g.qZA(),g.qZA(),g.TgZ(18,"section",10),g.IAx(),g.TgZ(19,"p"),g._uU(20,"A spinner for displaying loading state of a page or a section."),g.qZA(),g.TgZ(21,"h2",15),g.TgZ(22,"span"),g._uU(23,"When To Use"),g.qZA(),g.TgZ(24,"a",16),g._uU(25,"#"),g.qZA(),g.qZA(),g.TgZ(26,"p"),g._uU(27,"When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate users' inquietude."),g.qZA(),g.TgZ(28,"pre",17),g.TgZ(29,"code"),g.TgZ(30,"span",18),g._uU(31,"import"),g.qZA(),g._uU(32," "),g.TgZ(33,"span",19),g._uU(34,"{"),g.qZA(),g._uU(35," NzSpinModule "),g.TgZ(36,"span",19),g._uU(37,"}"),g.qZA(),g._uU(38," "),g.TgZ(39,"span",18),g._uU(40,"from"),g.qZA(),g._uU(41," "),g.TgZ(42,"span",20),g._uU(43,"'ng-zorro-antd/spin'"),g.qZA(),g.TgZ(44,"span",19),g._uU(45,";"),g.qZA(),g.qZA(),g.qZA(),g.fQ9(),g.qZA(),g.TgZ(46,"h2"),g.TgZ(47,"span"),g._uU(48,"Examples"),g.qZA(),g.TgZ(49,"i",21),g.NdJ("click",function(){return e.expandAllCode()}),g.qZA(),g.qZA(),g.qZA(),g.TgZ(50,"div",22),g.TgZ(51,"div",23),g.TgZ(52,"nz-code-box",24),g._UZ(53,"nz-demo-spin-basic",25),g.TgZ(54,"div",26),g.IAx(),g.TgZ(55,"p"),g._uU(56,"A simple loading status."),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.TgZ(57,"nz-code-box",27),g._UZ(58,"nz-demo-spin-inside",25),g.TgZ(59,"div",26),g.IAx(),g.TgZ(60,"p"),g._uU(61,"Spin in a container."),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.TgZ(62,"nz-code-box",28),g._UZ(63,"nz-demo-spin-tip",25),g.TgZ(64,"div",26),g.IAx(),g.TgZ(65,"p"),g._uU(66,"Customized description content."),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.TgZ(67,"nz-code-box",29),g._UZ(68,"nz-demo-spin-custom-indicator",25),g.TgZ(69,"div",26),g.IAx(),g.TgZ(70,"p"),g._uU(71,"Use custom loading indicator."),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(72,"div",23),g.TgZ(73,"nz-code-box",30),g._UZ(74,"nz-demo-spin-size",25),g.TgZ(75,"div",26),g.IAx(),g.TgZ(76,"p"),g._uU(77,"A small "),g.TgZ(78,"code"),g._uU(79,"Spin"),g.qZA(),g._uU(80," use in loading text, default "),g.TgZ(81,"code"),g._uU(82,"Spin"),g.qZA(),g._uU(83," use in loading card-level block, and large "),g.TgZ(84,"code"),g._uU(85,"Spin"),g.qZA(),g._uU(86," use in loading "),g.TgZ(87,"strong"),g._uU(88,"page"),g.qZA(),g._uU(89,"."),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.TgZ(90,"nz-code-box",31),g._UZ(91,"nz-demo-spin-nested",25),g.TgZ(92,"div",26),g.IAx(),g.TgZ(93,"p"),g._uU(94,"Embedding content into "),g.TgZ(95,"code"),g._uU(96,"nz-spin"),g.qZA(),g._uU(97," will alter it into loading state."),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.TgZ(98,"nz-code-box",32),g._UZ(99,"nz-demo-spin-delay-and-debounce",25),g.TgZ(100,"div",26),g.IAx(),g.TgZ(101,"p"),g._uU(102,"Specifies a delay for loading state. If "),g.TgZ(103,"code"),g._uU(104,"spinning"),g.qZA(),g._uU(105," ends during delay, loading status won't appear."),g.qZA(),g.TgZ(106,"pre",33),g.TgZ(107,"code"),g.TgZ(108,"span",34),g.TgZ(109,"span",35),g._uU(110,".example"),g.qZA(),g._uU(111," "),g.qZA(),g.TgZ(112,"span",19),g._uU(113,"{"),g.qZA(),g._uU(114,"\n  "),g.TgZ(115,"span",36),g._uU(116,"text-align"),g.qZA(),g.TgZ(117,"span",19),g._uU(118,":"),g.qZA(),g._uU(119," center"),g.TgZ(120,"span",19),g._uU(121,";"),g.qZA(),g._uU(122,"\n  "),g.TgZ(123,"span",36),g._uU(124,"background"),g.qZA(),g.TgZ(125,"span",19),g._uU(126,":"),g.qZA(),g._uU(127," "),g.TgZ(128,"span",37),g._uU(129,"rgba"),g.qZA(),g.TgZ(130,"span",19),g._uU(131,"("),g.qZA(),g.TgZ(132,"span",38),g._uU(133,"0"),g.qZA(),g._uU(134,","),g.TgZ(135,"span",38),g._uU(136,"0"),g.qZA(),g._uU(137,","),g.TgZ(138,"span",38),g._uU(139,"0"),g.qZA(),g._uU(140,","),g.TgZ(141,"span",38),g._uU(142,"0.05"),g.qZA(),g.TgZ(143,"span",19),g._uU(144,")"),g.qZA(),g.TgZ(145,"span",19),g._uU(146,";"),g.qZA(),g._uU(147,"\n  "),g.TgZ(148,"span",36),g._uU(149,"border-radius"),g.qZA(),g.TgZ(150,"span",19),g._uU(151,":"),g.qZA(),g._uU(152," "),g.TgZ(153,"span",38),g._uU(154,"4"),g.qZA(),g._uU(155,"px"),g.TgZ(156,"span",19),g._uU(157,";"),g.qZA(),g._uU(158,"\n  "),g.TgZ(159,"span",36),g._uU(160,"margin-bottom"),g.qZA(),g.TgZ(161,"span",19),g._uU(162,":"),g.qZA(),g._uU(163," "),g.TgZ(164,"span",38),g._uU(165,"20"),g.qZA(),g._uU(166,"px"),g.TgZ(167,"span",19),g._uU(168,";"),g.qZA(),g._uU(169,"\n  "),g.TgZ(170,"span",36),g._uU(171,"padding"),g.qZA(),g.TgZ(172,"span",19),g._uU(173,":"),g.qZA(),g._uU(174," "),g.TgZ(175,"span",38),g._uU(176,"30"),g.qZA(),g._uU(177,"px "),g.TgZ(178,"span",38),g._uU(179,"50"),g.qZA(),g._uU(180,"px"),g.TgZ(181,"span",19),g._uU(182,";"),g.qZA(),g._uU(183,"\n  "),g.TgZ(184,"span",36),g._uU(185,"margin"),g.qZA(),g.TgZ(186,"span",19),g._uU(187,":"),g.qZA(),g._uU(188," "),g.TgZ(189,"span",38),g._uU(190,"20"),g.qZA(),g._uU(191,"px "),g.TgZ(192,"span",38),g._uU(193,"0"),g.qZA(),g.TgZ(194,"span",19),g._uU(195,";"),g.qZA(),g._uU(196,"\n"),g.TgZ(197,"span",19),g._uU(198,"}"),g.qZA(),g.qZA(),g.qZA(),g.fQ9(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(199,"section",39),g.IAx(),g.TgZ(200,"h2",40),g.TgZ(201,"span"),g._uU(202,"API"),g.qZA(),g.TgZ(203,"a",41),g._uU(204,"#"),g.qZA(),g.qZA(),g.TgZ(205,"h3",42),g.TgZ(206,"span"),g._uU(207,"nz-spin"),g.qZA(),g.TgZ(208,"label",43),g._uU(209,"component"),g.qZA(),g.TgZ(210,"a",44),g._uU(211,"#"),g.qZA(),g.qZA(),g.TgZ(212,"table"),g.TgZ(213,"thead"),g.TgZ(214,"tr"),g.TgZ(215,"th"),g._uU(216,"Property"),g.qZA(),g.TgZ(217,"th"),g._uU(218,"Description"),g.qZA(),g.TgZ(219,"th"),g._uU(220,"Type"),g.qZA(),g.TgZ(221,"th"),g._uU(222,"Default Value"),g.qZA(),g.TgZ(223,"th"),g._uU(224,"Global Config"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(225,"tbody"),g.TgZ(226,"tr"),g.TgZ(227,"td"),g.TgZ(228,"code"),g._uU(229,"[nzDelay]"),g.qZA(),g.qZA(),g.TgZ(230,"td"),g._uU(231,"specifies a delay in milliseconds for loading state (prevent flush), unit: milliseconds"),g.qZA(),g.TgZ(232,"td"),g.TgZ(233,"code"),g._uU(234,"number"),g.qZA(),g.qZA(),g.TgZ(235,"td"),g._uU(236,"-"),g.qZA(),g._UZ(237,"td"),g.qZA(),g.TgZ(238,"tr"),g.TgZ(239,"td"),g.TgZ(240,"code"),g._uU(241,"[nzIndicator]"),g.qZA(),g.qZA(),g.TgZ(242,"td"),g._uU(243,"the spinning indicator"),g.qZA(),g.TgZ(244,"td"),g.TgZ(245,"code"),g._uU(246,"TemplateRef<void>"),g.qZA(),g.qZA(),g.TgZ(247,"td"),g._uU(248,"-"),g.qZA(),g.TgZ(249,"td"),g._uU(250,"\u2705"),g.qZA(),g.qZA(),g.TgZ(251,"tr"),g.TgZ(252,"td"),g.TgZ(253,"code"),g._uU(254,"[nzSize]"),g.qZA(),g.qZA(),g.TgZ(255,"td"),g._uU(256,"size of Spin"),g.qZA(),g.TgZ(257,"td"),g.TgZ(258,"code"),g._uU(259,"'large' | 'small' | 'default'"),g.qZA(),g.qZA(),g.TgZ(260,"td"),g.TgZ(261,"code"),g._uU(262,"'default'"),g.qZA(),g.qZA(),g._UZ(263,"td"),g.qZA(),g.TgZ(264,"tr"),g.TgZ(265,"td"),g.TgZ(266,"code"),g._uU(267,"[nzSpinning]"),g.qZA(),g.qZA(),g.TgZ(268,"td"),g._uU(269,"whether Spin is spinning"),g.qZA(),g.TgZ(270,"td"),g.TgZ(271,"code"),g._uU(272,"boolean"),g.qZA(),g.qZA(),g.TgZ(273,"td"),g.TgZ(274,"code"),g._uU(275,"true"),g.qZA(),g.qZA(),g._UZ(276,"td"),g.qZA(),g.TgZ(277,"tr"),g.TgZ(278,"td"),g.TgZ(279,"code"),g._uU(280,"[nzSimple]"),g.qZA(),g.qZA(),g.TgZ(281,"td"),g._uU(282,"whether Spin has no children"),g.qZA(),g.TgZ(283,"td"),g.TgZ(284,"code"),g._uU(285,"boolean"),g.qZA(),g.qZA(),g.TgZ(286,"td"),g.TgZ(287,"code"),g._uU(288,"false"),g.qZA(),g.qZA(),g._UZ(289,"td"),g.qZA(),g.TgZ(290,"tr"),g.TgZ(291,"td"),g.TgZ(292,"code"),g._uU(293,"[nzTip]"),g.qZA(),g.qZA(),g.TgZ(294,"td"),g._uU(295,"customize description content when Spin has children"),g.qZA(),g.TgZ(296,"td"),g.TgZ(297,"code"),g._uU(298,"string"),g.qZA(),g.qZA(),g.TgZ(299,"td"),g._uU(300,"-"),g.qZA(),g._UZ(301,"td"),g.qZA(),g.qZA(),g.qZA(),g.fQ9(),g.qZA(),g.qZA()),2&n&&(g.xp6(1),g.Q6J("nzOffsetTop",16),g.xp6(1),g.Q6J("nzAffix",!1),g.xp6(48),g.Q6J("nzGutter",16),g.xp6(1),g.Q6J("nzXl",12)("nzSpan",24),g.xp6(1),g.Q6J("nzId","components-spin-demo-basic")("nzLink","components-spin-demo-basic")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/basic.md"),g.xp6(5),g.Q6J("nzId","components-spin-demo-inside")("nzLink","components-spin-demo-inside")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/inside.md"),g.xp6(5),g.Q6J("nzId","components-spin-demo-tip")("nzLink","components-spin-demo-tip")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/tip.md"),g.xp6(5),g.Q6J("nzId","components-spin-demo-custom-indicator")("nzLink","components-spin-demo-custom-indicator")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/custom-indicator.md"),g.xp6(5),g.Q6J("nzXl",12)("nzSpan",24),g.xp6(1),g.Q6J("nzId","components-spin-demo-size")("nzLink","components-spin-demo-size")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/size.md"),g.xp6(17),g.Q6J("nzId","components-spin-demo-nested")("nzLink","components-spin-demo-nested")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/nested.md"),g.xp6(8),g.Q6J("nzId","components-spin-demo-delay-and-debounce")("nzLink","components-spin-demo-delay-and-debounce")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/delay-and-debounce.md"))},directives:[c.$,z.IT,z.Fp,Z.Ls,m.SY,u.SK,u.t3,r.G,l,T,A,U,_,h,x],encapsulation:2}),n})(),k=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=g.oAB({type:n}),n.\u0275inj=g.cJS({imports:[[i.l,...a,t.Bz.forChild([{path:"en",component:S},{path:"zh",component:b}])]]}),n})()}}]);