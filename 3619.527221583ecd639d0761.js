(self.webpackChunkenlink=self.webpackChunkenlink||[]).push([[3619],{3619:(n,Z,o)=>{"use strict";o.r(Z),o.d(Z,{NzDemoAnchorModule:()=>z});var e=o(3423),t=o(9358),c=o(8925);const i=[c.on];var a=o(4512),d=o(7716),g=o(6175),r=o(7420),T=o(6704);let A=(()=>{class n{}return n.\u0275fac=function(Z){return new(Z||n)},n.\u0275cmp=d.Xpm({type:n,selectors:[["nz-demo-anchor-basic"]],decls:6,vars:0,consts:[["nzHref","#components-anchor-demo-basic","nzTitle","Basic demo"],["nzHref","#components-anchor-demo-static","nzTitle","Static demo"],["nzHref","#api","nzTitle","API"],["nzHref","#nz-anchor","nzTitle","nz-anchor"],["nzHref","#nz-link","nzTitle","nz-link"]],template:function(n,Z){1&n&&(d.TgZ(0,"nz-anchor"),d._UZ(1,"nz-link",0),d._UZ(2,"nz-link",1),d.TgZ(3,"nz-link",2),d._UZ(4,"nz-link",3),d._UZ(5,"nz-link",4),d.qZA(),d.qZA())},directives:[c.IT,c.Fp],encapsulation:2}),n})(),q=(()=>{class n{}return n.\u0275fac=function(Z){return new(Z||n)},n.\u0275cmp=d.Xpm({type:n,selectors:[["nz-demo-anchor-static"]],decls:6,vars:1,consts:[[3,"nzAffix"],["nzHref","#components-anchor-demo-basic","nzTitle","Basic demo"],["nzHref","#components-anchor-demo-static","nzTitle","Static demo"],["nzHref","#api","nzTitle","API"],["nzHref","#nz-anchor","nzTitle","nz-anchor"],["nzHref","#nz-link","nzTitle","nz-link"]],template:function(n,Z){1&n&&(d.TgZ(0,"nz-anchor",0),d._UZ(1,"nz-link",1),d._UZ(2,"nz-link",2),d.TgZ(3,"nz-link",3),d._UZ(4,"nz-link",4),d._UZ(5,"nz-link",5),d.qZA(),d.qZA()),2&n&&d.Q6J("nzAffix",!1)},directives:[c.IT,c.Fp],encapsulation:2}),n})(),u=(()=>{class n{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return n.\u0275fac=function(Z){return new(Z||n)},n.\u0275cmp=d.Xpm({type:n,selectors:[["nz-demo-anchor"]],viewQuery:function(n,Z){if(1&n&&d.Gf(a.G,5),2&n){let n;d.iGM(n=d.CRH())&&(Z.codeBoxes=n)}},decls:218,vars:13,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-anchor-demo-basic","nzTitle","\u57fa\u672c"],["nzHref","#components-anchor-demo-static","nzTitle","\u9759\u6001\u4f4d\u7f6e"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/anchor/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u57fa\u672c","nzSelector","nz-demo-anchor-basic","nzGenerateCommand","ng g ng-zorro-antd:anchor-basic <name>","nzComponentName","NzDemoAnchorBasicComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["demo",""],["intro",""],["nzTitle","\u9759\u6001\u4f4d\u7f6e","nzSelector","nz-demo-anchor-static","nzGenerateCommand","ng g ng-zorro-antd:anchor-static <name>","nzComponentName","NzDemoAnchorStaticComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-anchor"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-anchor'",1,"anchor"],["id","nz-link"],["onclick","window.location.hash = 'nz-link'",1,"anchor"]],template:function(n,Z){1&n&&(d.TgZ(0,"article"),d.TgZ(1,"nz-affix",0),d.TgZ(2,"nz-anchor",1),d.NdJ("nzClick",function(n){return Z.goLink(n)}),d._UZ(3,"nz-link",2),d._UZ(4,"nz-link",3),d._UZ(5,"nz-link",4),d.qZA(),d.qZA(),d.TgZ(6,"section",5),d.TgZ(7,"h1"),d._uU(8,"Anchor"),d.TgZ(9,"span",6),d._uU(10,"\u951a\u70b9"),d.qZA(),d._UZ(11,"span",7),d.TgZ(12,"a",8),d._UZ(13,"i",9),d.qZA(),d.qZA(),d.TgZ(14,"section",5),d.IAx(),d.TgZ(15,"p"),d._uU(16,"\u7528\u4e8e\u8df3\u8f6c\u5230\u9875\u9762\u6307\u5b9a\u4f4d\u7f6e\u3002"),d.qZA(),d.TgZ(17,"h2",10),d.TgZ(18,"span"),d._uU(19,"\u4f55\u65f6\u4f7f\u7528"),d.qZA(),d.TgZ(20,"a",11),d._uU(21,"#"),d.qZA(),d.qZA(),d.TgZ(22,"p"),d._uU(23,"\u9700\u8981\u5c55\u73b0\u5f53\u524d\u9875\u9762\u4e0a\u53ef\u4f9b\u8df3\u8f6c\u7684\u951a\u70b9\u94fe\u63a5\uff0c\u4ee5\u53ca\u5feb\u901f\u5728\u951a\u70b9\u4e4b\u95f4\u8df3\u8f6c\u3002"),d.qZA(),d.TgZ(24,"pre",12),d.TgZ(25,"code"),d.TgZ(26,"span",13),d._uU(27,"import"),d.qZA(),d._uU(28," "),d.TgZ(29,"span",14),d._uU(30,"{"),d.qZA(),d._uU(31," NzAnchorModule "),d.TgZ(32,"span",14),d._uU(33,"}"),d.qZA(),d._uU(34," "),d.TgZ(35,"span",13),d._uU(36,"from"),d.qZA(),d._uU(37," "),d.TgZ(38,"span",15),d._uU(39,"'ng-zorro-antd/anchor'"),d.qZA(),d.TgZ(40,"span",14),d._uU(41,";"),d.qZA(),d.qZA(),d.qZA(),d.fQ9(),d.qZA(),d.TgZ(42,"h2"),d.TgZ(43,"span"),d._uU(44,"\u4ee3\u7801\u6f14\u793a"),d.qZA(),d.TgZ(45,"i",16),d.NdJ("click",function(){return Z.expandAllCode()}),d.qZA(),d.qZA(),d.qZA(),d.TgZ(46,"div",17),d.TgZ(47,"div",18),d.TgZ(48,"nz-code-box",19),d._UZ(49,"nz-demo-anchor-basic",20),d.TgZ(50,"div",21),d.IAx(),d.TgZ(51,"p"),d._uU(52,"\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"),d.qZA(),d.fQ9(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(53,"div",18),d.TgZ(54,"nz-code-box",22),d._UZ(55,"nz-demo-anchor-static",20),d.TgZ(56,"div",21),d.IAx(),d.TgZ(57,"p"),d._uU(58,"\u4e0d\u6d6e\u52a8\uff0c\u72b6\u6001\u4e0d\u968f\u9875\u9762\u6eda\u52a8\u53d8\u5316\u3002"),d.qZA(),d.fQ9(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(59,"section",23),d.IAx(),d.TgZ(60,"h2",24),d.TgZ(61,"span"),d._uU(62,"API"),d.qZA(),d.TgZ(63,"a",25),d._uU(64,"#"),d.qZA(),d.qZA(),d.TgZ(65,"h3",26),d.TgZ(66,"span"),d._uU(67,"nz-anchor"),d.qZA(),d.TgZ(68,"label",27),d._uU(69,"component"),d.qZA(),d.TgZ(70,"a",28),d._uU(71,"#"),d.qZA(),d.qZA(),d.TgZ(72,"table"),d.TgZ(73,"thead"),d.TgZ(74,"tr"),d.TgZ(75,"th"),d._uU(76,"\u6210\u5458"),d.qZA(),d.TgZ(77,"th"),d._uU(78,"\u8bf4\u660e"),d.qZA(),d.TgZ(79,"th"),d._uU(80,"\u7c7b\u578b"),d.qZA(),d.TgZ(81,"th"),d._uU(82,"\u9ed8\u8ba4\u503c"),d.qZA(),d.TgZ(83,"th"),d._uU(84,"\u5168\u5c40\u914d\u7f6e"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(85,"tbody"),d.TgZ(86,"tr"),d.TgZ(87,"td"),d.TgZ(88,"code"),d._uU(89,"[nzAffix]"),d.qZA(),d.qZA(),d.TgZ(90,"td"),d._uU(91,"\u56fa\u5b9a\u6a21\u5f0f"),d.qZA(),d.TgZ(92,"td"),d.TgZ(93,"code"),d._uU(94,"boolean"),d.qZA(),d.qZA(),d.TgZ(95,"td"),d.TgZ(96,"code"),d._uU(97,"true"),d.qZA(),d.qZA(),d._UZ(98,"td"),d.qZA(),d.TgZ(99,"tr"),d.TgZ(100,"td"),d.TgZ(101,"code"),d._uU(102,"[nzBounds]"),d.qZA(),d.qZA(),d.TgZ(103,"td"),d._uU(104,"\u951a\u70b9\u533a\u57df\u8fb9\u754c\uff0c\u5355\u4f4d\uff1apx"),d.qZA(),d.TgZ(105,"td"),d.TgZ(106,"code"),d._uU(107,"number"),d.qZA(),d.qZA(),d.TgZ(108,"td"),d.TgZ(109,"code"),d._uU(110,"5"),d.qZA(),d.qZA(),d.TgZ(111,"td"),d._uU(112,"\u2705"),d.qZA(),d.qZA(),d.TgZ(113,"tr"),d.TgZ(114,"td"),d.TgZ(115,"code"),d._uU(116,"[nzOffsetTop]"),d.qZA(),d.qZA(),d.TgZ(117,"td"),d._uU(118,"\u8ddd\u79bb\u7a97\u53e3\u9876\u90e8\u8fbe\u5230\u6307\u5b9a\u504f\u79fb\u91cf\u540e\u89e6\u53d1"),d.qZA(),d.TgZ(119,"td"),d.TgZ(120,"code"),d._uU(121,"number"),d.qZA(),d.qZA(),d.TgZ(122,"td"),d._uU(123,"-"),d.qZA(),d.TgZ(124,"td"),d._uU(125,"\u2705"),d.qZA(),d.qZA(),d.TgZ(126,"tr"),d.TgZ(127,"td"),d.TgZ(128,"code"),d._uU(129,"[nzShowInkInFixed]"),d.qZA(),d.qZA(),d.TgZ(130,"td"),d._uU(131,"\u56fa\u5b9a\u6a21\u5f0f\u662f\u5426\u663e\u793a\u5c0f\u5706\u70b9"),d.qZA(),d.TgZ(132,"td"),d.TgZ(133,"code"),d._uU(134,"boolean"),d.qZA(),d.qZA(),d.TgZ(135,"td"),d.TgZ(136,"code"),d._uU(137,"false"),d.qZA(),d.qZA(),d.TgZ(138,"td"),d._uU(139,"\u2705"),d.qZA(),d.qZA(),d.TgZ(140,"tr"),d.TgZ(141,"td"),d.TgZ(142,"code"),d._uU(143,"[nzContainer]"),d.qZA(),d.qZA(),d.TgZ(144,"td"),d._uU(145,"\u6307\u5b9a\u6eda\u52a8\u7684\u5bb9\u5668"),d.qZA(),d.TgZ(146,"td"),d.TgZ(147,"code"),d._uU(148,"string | HTMLElement"),d.qZA(),d.qZA(),d.TgZ(149,"td"),d.TgZ(150,"code"),d._uU(151,"window"),d.qZA(),d.qZA(),d._UZ(152,"td"),d.qZA(),d.TgZ(153,"tr"),d.TgZ(154,"td"),d.TgZ(155,"code"),d._uU(156,"(nzClick)"),d.qZA(),d.qZA(),d.TgZ(157,"td"),d._uU(158,"\u70b9\u51fb\u9879\u89e6\u53d1"),d.qZA(),d.TgZ(159,"td"),d.TgZ(160,"code"),d._uU(161,"EventEmitter<string>"),d.qZA(),d.qZA(),d.TgZ(162,"td"),d._uU(163,"-"),d.qZA(),d._UZ(164,"td"),d.qZA(),d.TgZ(165,"tr"),d.TgZ(166,"td"),d.TgZ(167,"code"),d._uU(168,"(nzScroll)"),d.qZA(),d.qZA(),d.TgZ(169,"td"),d._uU(170,"\u6eda\u52a8\u81f3\u67d0\u951a\u70b9\u65f6\u89e6\u53d1"),d.qZA(),d.TgZ(171,"td"),d.TgZ(172,"code"),d._uU(173,"EventEmitter<NzAnchorLinkComponent>"),d.qZA(),d.qZA(),d.TgZ(174,"td"),d._uU(175,"-"),d.qZA(),d._UZ(176,"td"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(177,"h3",29),d.TgZ(178,"span"),d._uU(179,"nz-link"),d.qZA(),d.TgZ(180,"label",27),d._uU(181,"component"),d.qZA(),d.TgZ(182,"a",30),d._uU(183,"#"),d.qZA(),d.qZA(),d.TgZ(184,"table"),d.TgZ(185,"thead"),d.TgZ(186,"tr"),d.TgZ(187,"th"),d._uU(188,"\u6210\u5458"),d.qZA(),d.TgZ(189,"th"),d._uU(190,"\u8bf4\u660e"),d.qZA(),d.TgZ(191,"th"),d._uU(192,"\u7c7b\u578b"),d.qZA(),d.TgZ(193,"th"),d._uU(194,"\u9ed8\u8ba4\u503c"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(195,"tbody"),d.TgZ(196,"tr"),d.TgZ(197,"td"),d.TgZ(198,"code"),d._uU(199,"[nzHref]"),d.qZA(),d.qZA(),d.TgZ(200,"td"),d._uU(201,"\u951a\u70b9\u94fe\u63a5"),d.qZA(),d.TgZ(202,"td"),d.TgZ(203,"code"),d._uU(204,"string"),d.qZA(),d.qZA(),d.TgZ(205,"td"),d._uU(206,"-"),d.qZA(),d.qZA(),d.TgZ(207,"tr"),d.TgZ(208,"td"),d.TgZ(209,"code"),d._uU(210,"[nzTitle]"),d.qZA(),d.qZA(),d.TgZ(211,"td"),d._uU(212,"\u6587\u5b57\u5185\u5bb9"),d.qZA(),d.TgZ(213,"td"),d.TgZ(214,"code"),d._uU(215,"string | TemplateRef<void>"),d.qZA(),d.qZA(),d.TgZ(216,"td"),d._uU(217,"-"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.fQ9(),d.qZA(),d.qZA()),2&n&&(d.xp6(1),d.Q6J("nzOffsetTop",16),d.xp6(1),d.Q6J("nzAffix",!1),d.xp6(44),d.Q6J("nzGutter",16),d.xp6(1),d.Q6J("nzXl",12)("nzSpan",24),d.xp6(1),d.Q6J("nzId","components-anchor-demo-basic")("nzLink","components-anchor-demo-basic")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/anchor/demo/basic.md"),d.xp6(5),d.Q6J("nzXl",12)("nzSpan",24),d.xp6(1),d.Q6J("nzId","components-anchor-demo-static")("nzLink","components-anchor-demo-static")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/anchor/demo/static.md"))},directives:[g.$,c.IT,c.Fp,r.SY,T.SK,T.t3,a.G,A,q],encapsulation:2}),n})(),s=(()=>{class n{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return n.\u0275fac=function(Z){return new(Z||n)},n.\u0275cmp=d.Xpm({type:n,selectors:[["nz-demo-anchor"]],viewQuery:function(n,Z){if(1&n&&d.Gf(a.G,5),2&n){let n;d.iGM(n=d.CRH())&&(Z.codeBoxes=n)}},decls:218,vars:13,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-anchor-demo-basic","nzTitle","Basic"],["nzHref","#components-anchor-demo-static","nzTitle","Static Anchor"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/anchor/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-anchor-basic","nzGenerateCommand","ng g ng-zorro-antd:anchor-basic <name>","nzComponentName","NzDemoAnchorBasicComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["demo",""],["intro",""],["nzTitle","Static Anchor","nzSelector","nz-demo-anchor-static","nzGenerateCommand","ng g ng-zorro-antd:anchor-static <name>","nzComponentName","NzDemoAnchorStaticComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-anchor"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-anchor'",1,"anchor"],["id","nz-link"],["onclick","window.location.hash = 'nz-link'",1,"anchor"]],template:function(n,Z){1&n&&(d.TgZ(0,"article"),d.TgZ(1,"nz-affix",0),d.TgZ(2,"nz-anchor",1),d.NdJ("nzClick",function(n){return Z.goLink(n)}),d._UZ(3,"nz-link",2),d._UZ(4,"nz-link",3),d._UZ(5,"nz-link",4),d.qZA(),d.qZA(),d.TgZ(6,"section",5),d.TgZ(7,"h1"),d._uU(8,"Anchor"),d._UZ(9,"span",6),d._UZ(10,"span",7),d.TgZ(11,"a",8),d._UZ(12,"i",9),d.qZA(),d.qZA(),d.TgZ(13,"section",5),d.IAx(),d.TgZ(14,"p"),d._uU(15,"Hyperlinks to scroll on one page."),d.qZA(),d.TgZ(16,"h2",10),d.TgZ(17,"span"),d._uU(18,"When To Use"),d.qZA(),d.TgZ(19,"a",11),d._uU(20,"#"),d.qZA(),d.qZA(),d.TgZ(21,"p"),d._uU(22,"For displaying anchor hyperlinks on page and jumping between them."),d.qZA(),d.TgZ(23,"pre",12),d.TgZ(24,"code"),d.TgZ(25,"span",13),d._uU(26,"import"),d.qZA(),d._uU(27," "),d.TgZ(28,"span",14),d._uU(29,"{"),d.qZA(),d._uU(30," NzAnchorModule "),d.TgZ(31,"span",14),d._uU(32,"}"),d.qZA(),d._uU(33," "),d.TgZ(34,"span",13),d._uU(35,"from"),d.qZA(),d._uU(36," "),d.TgZ(37,"span",15),d._uU(38,"'ng-zorro-antd/anchor'"),d.qZA(),d.TgZ(39,"span",14),d._uU(40,";"),d.qZA(),d.qZA(),d.qZA(),d.fQ9(),d.qZA(),d.TgZ(41,"h2"),d.TgZ(42,"span"),d._uU(43,"Examples"),d.qZA(),d.TgZ(44,"i",16),d.NdJ("click",function(){return Z.expandAllCode()}),d.qZA(),d.qZA(),d.qZA(),d.TgZ(45,"div",17),d.TgZ(46,"div",18),d.TgZ(47,"nz-code-box",19),d._UZ(48,"nz-demo-anchor-basic",20),d.TgZ(49,"div",21),d.IAx(),d.TgZ(50,"p"),d._uU(51,"The simplest usage."),d.qZA(),d.fQ9(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(52,"div",18),d.TgZ(53,"nz-code-box",22),d._UZ(54,"nz-demo-anchor-static",20),d.TgZ(55,"div",21),d.IAx(),d.TgZ(56,"p"),d._uU(57,"Do not change state when page is scrolling."),d.qZA(),d.fQ9(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(58,"section",23),d.IAx(),d.TgZ(59,"h2",24),d.TgZ(60,"span"),d._uU(61,"API"),d.qZA(),d.TgZ(62,"a",25),d._uU(63,"#"),d.qZA(),d.qZA(),d.TgZ(64,"h3",26),d.TgZ(65,"span"),d._uU(66,"nz-anchor"),d.qZA(),d.TgZ(67,"label",27),d._uU(68,"component"),d.qZA(),d.TgZ(69,"a",28),d._uU(70,"#"),d.qZA(),d.qZA(),d.TgZ(71,"table"),d.TgZ(72,"thead"),d.TgZ(73,"tr"),d.TgZ(74,"th"),d._uU(75,"Property"),d.qZA(),d.TgZ(76,"th"),d._uU(77,"Description"),d.qZA(),d.TgZ(78,"th"),d._uU(79,"Type"),d.qZA(),d.TgZ(80,"th"),d._uU(81,"Default"),d.qZA(),d.TgZ(82,"th"),d._uU(83,"Global Config"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(84,"tbody"),d.TgZ(85,"tr"),d.TgZ(86,"td"),d.TgZ(87,"code"),d._uU(88,"[nzAffix]"),d.qZA(),d.qZA(),d.TgZ(89,"td"),d._uU(90,"Fixed mode of Anchor"),d.qZA(),d.TgZ(91,"td"),d.TgZ(92,"code"),d._uU(93,"boolean"),d.qZA(),d.qZA(),d.TgZ(94,"td"),d.TgZ(95,"code"),d._uU(96,"true"),d.qZA(),d.qZA(),d._UZ(97,"td"),d.qZA(),d.TgZ(98,"tr"),d.TgZ(99,"td"),d.TgZ(100,"code"),d._uU(101,"[nzBounds]"),d.qZA(),d.qZA(),d.TgZ(102,"td"),d._uU(103,"Bounding distance of anchor area, unit: px"),d.qZA(),d.TgZ(104,"td"),d.TgZ(105,"code"),d._uU(106,"number"),d.qZA(),d.qZA(),d.TgZ(107,"td"),d.TgZ(108,"code"),d._uU(109,"5"),d.qZA(),d.qZA(),d.TgZ(110,"td"),d._uU(111,"\u2705"),d.qZA(),d.qZA(),d.TgZ(112,"tr"),d.TgZ(113,"td"),d.TgZ(114,"code"),d._uU(115,"[nzOffsetTop]"),d.qZA(),d.qZA(),d.TgZ(116,"td"),d._uU(117,"Pixels to offset from top when calculating position of scroll"),d.qZA(),d.TgZ(118,"td"),d.TgZ(119,"code"),d._uU(120,"number"),d.qZA(),d.qZA(),d.TgZ(121,"td"),d.TgZ(122,"code"),d._uU(123,"0"),d.qZA(),d.qZA(),d.TgZ(124,"td"),d._uU(125,"\u2705"),d.qZA(),d.qZA(),d.TgZ(126,"tr"),d.TgZ(127,"td"),d.TgZ(128,"code"),d._uU(129,"[nzShowInkInFixed]"),d.qZA(),d.qZA(),d.TgZ(130,"td"),d._uU(131,"Whether show ink-balls in Fixed mode"),d.qZA(),d.TgZ(132,"td"),d.TgZ(133,"code"),d._uU(134,"boolean"),d.qZA(),d.qZA(),d.TgZ(135,"td"),d.TgZ(136,"code"),d._uU(137,"false"),d.qZA(),d.qZA(),d.TgZ(138,"td"),d._uU(139,"\u2705"),d.qZA(),d.qZA(),d.TgZ(140,"tr"),d.TgZ(141,"td"),d.TgZ(142,"code"),d._uU(143,"[nzContainer]"),d.qZA(),d.qZA(),d.TgZ(144,"td"),d._uU(145,"Scrolling container"),d.qZA(),d.TgZ(146,"td"),d.TgZ(147,"code"),d._uU(148,"string | HTMLElement"),d.qZA(),d.qZA(),d.TgZ(149,"td"),d.TgZ(150,"code"),d._uU(151,"window"),d.qZA(),d.qZA(),d._UZ(152,"td"),d.qZA(),d.TgZ(153,"tr"),d.TgZ(154,"td"),d.TgZ(155,"code"),d._uU(156,"(nzClick)"),d.qZA(),d.qZA(),d.TgZ(157,"td"),d._uU(158,"Click of Anchor item"),d.qZA(),d.TgZ(159,"td"),d.TgZ(160,"code"),d._uU(161,"EventEmitter<string>"),d.qZA(),d.qZA(),d.TgZ(162,"td"),d._uU(163,"-"),d.qZA(),d._UZ(164,"td"),d.qZA(),d.TgZ(165,"tr"),d.TgZ(166,"td"),d.TgZ(167,"code"),d._uU(168,"(nzScroll)"),d.qZA(),d.qZA(),d.TgZ(169,"td"),d._uU(170,"The scroll function that is triggered when scrolling to an anchor."),d.qZA(),d.TgZ(171,"td"),d.TgZ(172,"code"),d._uU(173,"EventEmitter<NzAnchorLinkComponent>"),d.qZA(),d.qZA(),d.TgZ(174,"td"),d._uU(175,"-"),d.qZA(),d._UZ(176,"td"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(177,"h3",29),d.TgZ(178,"span"),d._uU(179,"nz-link"),d.qZA(),d.TgZ(180,"label",27),d._uU(181,"component"),d.qZA(),d.TgZ(182,"a",30),d._uU(183,"#"),d.qZA(),d.qZA(),d.TgZ(184,"table"),d.TgZ(185,"thead"),d.TgZ(186,"tr"),d.TgZ(187,"th"),d._uU(188,"Property"),d.qZA(),d.TgZ(189,"th"),d._uU(190,"Description"),d.qZA(),d.TgZ(191,"th"),d._uU(192,"Type"),d.qZA(),d.TgZ(193,"th"),d._uU(194,"Default"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(195,"tbody"),d.TgZ(196,"tr"),d.TgZ(197,"td"),d.TgZ(198,"code"),d._uU(199,"[nzHref]"),d.qZA(),d.qZA(),d.TgZ(200,"td"),d._uU(201,"target of hyperlink"),d.qZA(),d.TgZ(202,"td"),d.TgZ(203,"code"),d._uU(204,"string"),d.qZA(),d.qZA(),d.TgZ(205,"td"),d._uU(206,"-"),d.qZA(),d.qZA(),d.TgZ(207,"tr"),d.TgZ(208,"td"),d.TgZ(209,"code"),d._uU(210,"[nzTitle]"),d.qZA(),d.qZA(),d.TgZ(211,"td"),d._uU(212,"content of hyperlink"),d.qZA(),d.TgZ(213,"td"),d.TgZ(214,"code"),d._uU(215,"string | TemplateRef<void>"),d.qZA(),d.qZA(),d.TgZ(216,"td"),d._uU(217,"-"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.fQ9(),d.qZA(),d.qZA()),2&n&&(d.xp6(1),d.Q6J("nzOffsetTop",16),d.xp6(1),d.Q6J("nzAffix",!1),d.xp6(43),d.Q6J("nzGutter",16),d.xp6(1),d.Q6J("nzXl",12)("nzSpan",24),d.xp6(1),d.Q6J("nzId","components-anchor-demo-basic")("nzLink","components-anchor-demo-basic")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/anchor/demo/basic.md"),d.xp6(5),d.Q6J("nzXl",12)("nzSpan",24),d.xp6(1),d.Q6J("nzId","components-anchor-demo-static")("nzLink","components-anchor-demo-static")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/anchor/demo/static.md"))},directives:[g.$,c.IT,c.Fp,r.SY,T.SK,T.t3,a.G,A,q],encapsulation:2}),n})(),z=(()=>{class n{}return n.\u0275fac=function(Z){return new(Z||n)},n.\u0275mod=d.oAB({type:n}),n.\u0275inj=d.cJS({imports:[[t.l,...i,e.Bz.forChild([{path:"en",component:s},{path:"zh",component:u}])]]}),n})()}}]);