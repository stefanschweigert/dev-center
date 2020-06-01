(window.webpackJsonp=window.webpackJsonp||[]).push([[39,145],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),o=n(9),i=(n(0),n(296)),c={},r={id:"web/snippets/prereqs-layout-config-editing",title:"prereqs-layout-config-editing",description:"-   Follow along by setting up the [Geocortex Web SDK](../sdk-overview.mdx) and editing the minimal layout and app config provided.",source:"@site/docs/web/snippets/prereqs-layout-config-editing.mdx",permalink:"/docs/web/snippets/prereqs-layout-config-editing",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-layout-config-editing.mdx"},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Follow along by setting up the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK")," and editing the minimal layout and app config provided."),Object(i.b)("li",{parentName:"ul"},"Check out the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#modifying-layout-and-app-config-using-the-geocortex-web-designer"}),"deployment instructions")," to learn about how to deploy layout and app config to an application.")))}l.isMDXComponent=!0},200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return h}));var a=n(1),o=n(9),i=(n(0),n(296)),c=n(301),r=n(304),s=n(303),u=n(300),l=n(299),b=n(138),d={title:"Configure Button Click Behavior",description:"Geocortex Web - Learn how to run an existing command or operation on a button press"},m={id:"web/tutorial-configure-button-click",title:"Configure Button Click Behavior",description:"Geocortex Web - Learn how to run an existing command or operation on a button press",source:"@site/docs/web/tutorial-configure-button-click.mdx",permalink:"/docs/web/tutorial-configure-button-click",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-configure-button-click.mdx",sidebar:"web",previous:{title:"Commands and Operations",permalink:"/docs/web/configuration-commands-operations"},next:{title:"Change the Default Behavior of Components",permalink:"/docs/web/tutorial-change-default-behavior"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Add a Button to the Layout",id:"add-a-button-to-the-layout",children:[]},{value:"Link the Button to a Command in App Config",id:"link-the-button-to-a-command-in-app-config",children:[]},{value:"Pass Arguments to the Command",id:"pass-arguments-to-the-command",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],g={rightToc:p};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This article will guide you through how to add a button to the layout and configure it to run and action through the app config."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"It's actually possible to configure the a button with a command in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://apps.geocortex.com/webviewer/designer/"}),"Geocortex Web Designer"),". However, the point of this tutorial is to demonstrate the concept of configuring behaviors using the app config."))),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)(b.default,{mdxType:"PrereqsLayoutConfigSnippet"}),Object(i.b)("h2",{id:"add-a-button-to-the-layout"},"Add a Button to the Layout"),Object(i.b)("p",null,"Let's create a a layout with two components; a map, and a button positioned on the map."),Object(i.b)(r.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"layout",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" >\n  <map>\n    <button slot="top-center"/>\n  </map>\n</layout>\n'))),Object(i.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(c.a)("img/web-basic-button-on-map.png")}))),Object(i.b)("h2",{id:"link-the-button-to-a-command-in-app-config"},"Link the Button to a Command in App Config"),Object(i.b)("p",null,"Link the button to the layout to a ",Object(i.b)("inlineCode",{parentName:"p"},"menu-item")," in app config, and configure it to run a basic command, ",Object(i.b)("inlineCode",{parentName:"p"},"zoom-in"),"."),Object(i.b)(r.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"layout",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" >\n  <map>\n    // highlight-next-line\n    <button config="button-config" slot="top-center"/>\n  </map>\n</layout>\n'))),Object(i.b)(s.a,{value:"config",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "menu-item",\n            // highlight-next-line\n            "id": "button-config",\n            "iconId": "zoom-in",\n            "title": "Zoom In",\n            "action": "map.zoom-in"\n        }\n    ]\n}\n'))),Object(i.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(c.a)("img/web-basic-button-with-command.png")}))),Object(i.b)("h2",{id:"pass-arguments-to-the-command"},"Pass Arguments to the Command"),Object(i.b)("p",null,"If the command you want to run takes arguments, you can pass them through the app config."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Check out the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/configuration-commands-operations#configuring-commands-and-operations"}),"commands and operations reference")," for more info on passing arguments."))),Object(i.b)(r.a,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"config",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "button-config",\n            "iconId": "info",\n            "title": "Alert",\n            "action": {\n                "name": "ui.alert",\n                // highlight-start\n                "arguments": {\n                    "message": "Message from config."\n                }\n                // highlight-end\n            },\n            "$type": "menu-item"\n        }\n    ]\n}\n'))),Object(i.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(c.a)("img/web-basic-button-alert.png")}))),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)(l.a,{mdxType:"UseCaseContainer"},Object(i.b)(u.a,{title:"Commands, Operations, and Events API",description:"Check out the available commands and operations",link:"api-commands-operations-events",mdxType:"UseCaseCard"}),Object(i.b)(u.a,{title:"Change Default Behavior with Commands and Operations",description:"Change built-in behavior or add new behavior using app config and layout",link:"tutorial-change-default-behavior",mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},298:function(e,t,n){"use strict";var a=n(0),o=n(51);t.a=function(){return Object(a.useContext)(o.a)}},299:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),o=n.n(a),i=n(297),c=n.n(i),r=n(130),s=n.n(r);function u(e){var t=e.children;return o.a.createElement("div",{className:c()(s.a.root)},t)}},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(306);var a=n(305),o=n(0),i=n.n(o),c=n(297),r=n.n(c),s=n(131),u=n.n(s);function l(e){var t=e.title,n=e.description,o=e.link;return i.a.createElement("div",{className:r()("card-demo",u.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,n)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(a.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(307);var a=n(298);function o(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},302:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=o},303:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},304:function(e,t,n){"use strict";n(26),n(21),n(22);var a=n(0),o=n.n(a),i=n(302);var c=function(){return Object(a.useContext)(i.a)},r=n(297),s=n.n(r),u=n(132),l=n.n(u),b=37,d=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,r=e.values,u=e.groupId,m=c(),p=m.tabGroupChoices,g=m.setTabGroupChoices,h=Object(a.useState)(i),f=h[0],v=h[1];if(null!=u){var j=p[u];null!=j&&j!==f&&v(j)}var O=function(e){v(e),null!=u&&g(u,e)},y=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},r.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===t,className:s()("tab-item",l.a.tabItem,{"tab-item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return O(t)},onClick:function(){return O(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}}}]);