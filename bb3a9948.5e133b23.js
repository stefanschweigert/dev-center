(window.webpackJsonp=window.webpackJsonp||[]).push([[113,110],{149:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return r})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return l}));var n=o(1),a=o(9),c=(o(0),o(296)),i={},r={id:"web/snippets/designer-callout",title:"designer-callout",description:":::note Have you explored the Geocortex Web Designer?",source:"@site/docs/web/snippets/designer-callout.mdx",permalink:"/docs/web/snippets/designer-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/designer-callout.mdx"},s=[],p={rightToc:s};function l(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Have you explored the Geocortex Web Designer?")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://apps.geocortex.com/webviewer/designer/"}),"Geocortex Web Designer")," allows you to edit your application's layout, configure custom behaviors for buttons and other UI components, and solve complex business problems through ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/overview"}),"Geocortex Workflow"),". Many use cases can be solved through the Geocortex Web Designer and don't require custom development."))))}l.isMDXComponent=!0},262:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return s})),o.d(t,"rightToc",(function(){return p})),o.d(t,"default",(function(){return b}));var n=o(1),a=o(9),c=(o(0),o(296)),i=o(149),r={title:"Key Concepts",description:"Geocortex Web - Learn about key concepts of Geocortex Web",hide_table_of_contents:!0},s={id:"web/key-concepts",title:"Key Concepts",description:"Geocortex Web - Learn about key concepts of Geocortex Web",source:"@site/docs/web/key-concepts.mdx",permalink:"/docs/web/key-concepts",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/key-concepts.mdx",sidebar:"web",previous:{title:"Overview",permalink:"/docs/web/overview"},next:{title:"Layout",permalink:"/docs/web/configuration-layout-getting-started"}},p=[{value:"Applications",id:"applications",children:[{value:"1. Layout XML that represents the visual layout of the application.",id:"1-layout-xml-that-represents-the-visual-layout-of-the-application",children:[]},{value:"2. App Config JSON that configures the application.",id:"2-app-config-json-that-configures-the-application",children:[]},{value:"3. The Geocortex Web code which renders the layout and powers functionality.",id:"3-the-geocortex-web-code-which-renders-the-layout-and-powers-functionality",children:[]}]}],l={rightToc:p};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)(i.default,{mdxType:"DesignerCallout"}),Object(c.b)("h2",{id:"applications"},"Applications"),Object(c.b)("p",null,"The core element of Geocortex Web is an ",Object(c.b)("strong",{parentName:"p"},"Application"),". Applications are composed of three main pieces:"),Object(c.b)("h3",{id:"1-layout-xml-that-represents-the-visual-layout-of-the-application"},"1. Layout XML that represents the visual layout of the application."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<layout xmlns="https://geocortex.com/layout/v1">\n    <map config="default" />\n</layout>\n')),Object(c.b)("p",null,"An ",Object(c.b)("strong",{parentName:"p"},"layout")," is composed of ",Object(c.b)("strong",{parentName:"p"},"components"),", such as a ",Object(c.b)("inlineCode",{parentName:"p"},"<map>"),", which are the conceptual building blocks of an application. Components can define their own UI, consume configuration, and can be nested and interact with other components."),Object(c.b)("p",null,"Every component can have a ",Object(c.b)("inlineCode",{parentName:"p"},"config")," attribute; this attribute links a layout component to the ",Object(c.b)("strong",{parentName:"p"},"app config"),"."),Object(c.b)("h3",{id:"2-app-config-json-that-configures-the-application"},"2. App Config JSON that configures the application."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onInitialized": [\n                {\n                    "name": "ui.alert",\n                    "arguments": {\n                        "message": "Hello World"\n                    }\n                }\n            ]\n        }\n    ]\n}\n')),Object(c.b)("p",null,"App Config files describe component configuration and other values relevant to application behavior. An app config file is composed of a list of ",Object(c.b)("strong",{parentName:"p"},"app items"),". App items can correspond to components in the layout, portal items, or any ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/web/configuration-app-config-reference#custom-app-items"}),"other defined item type"),"."),Object(c.b)("h3",{id:"3-the-geocortex-web-code-which-renders-the-layout-and-powers-functionality"},"3. The Geocortex Web code which renders the layout and powers functionality."),Object(c.b)("p",null,"Geocortex Web consumes layout and app config to create fully functional web mapping applications. You can use Geocortex Web out of the box, or extend it using the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK"),"."),Object(c.b)("br",null),Object(c.b)("p",null,"These three pieces are the building blocks behind an application, with the ",Object(c.b)("inlineCode",{parentName:"p"},"layout.xml")," and ",Object(c.b)("inlineCode",{parentName:"p"},"app.json")," files being the driving forces that control how an application looks, how it responds to user interaction, and what data it consumes. Extensive customization can be done simply by modifying these two files, without requiring any custom code."))}b.isMDXComponent=!0}}]);