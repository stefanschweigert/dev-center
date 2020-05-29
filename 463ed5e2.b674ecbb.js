(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return u}));var s=n(1),a=n(9),r=(n(0),n(295)),c=n(299),o=n(298),i={title:"Events Overview",sidebar_label:"Overview",description:"Geocortex Web - Overview of events"},b={id:"web/sdk-events-overview",title:"Events Overview",description:"Geocortex Web - Overview of events",source:"@site/docs/web/sdk-events-overview.mdx",permalink:"/docs/web/sdk-events-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-events-overview.mdx",sidebar_label:"Overview",sidebar:"web",previous:{title:"Service Injection",permalink:"/docs/web/sdk-services-injecting-services"},next:{title:"Events Reference",permalink:"/docs/web/sdk-events-reference"}},d=[{value:"Next Steps",id:"next-steps",children:[]}],v={rightToc:d};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},v,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Events")," are distinct, discrete messaging about a change or update that occurs in the viewer. They can be published or subscribed to by any ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/web/sdk-components-overview"}),"component")," or ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/web/sdk-services-overview"}),"service"),", and can be used to initiate behaviors, communicate data changes, and more. Events themselves do not execute behavior, but merely provide messaging so subscribers can act on changes."),Object(r.b)("p",null,"Events are internal to Geocortex Web, so they can only be consumed by custom code. Custom components can access events through ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/web/sdk-events-reference#component-models-1"}),"their models")," or through the ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/web/sdk-components-ui-context"}),"UIContext"),". Custom services can publish or subscribe to built-in or custom events ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/web/sdk-events-reference#services-1"}),"through the MessageBus"),"."),Object(r.b)("p",null,"The full list of existing events available in Geocortex Web can be ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/web/api-commands-operations-events#events"}),"found in the API documentation"),"."),Object(r.b)("p",null,"Events in Geocortex Web are grouped by categories, such as ",Object(r.b)("inlineCode",{parentName:"p"},"ui")," or ",Object(r.b)("inlineCode",{parentName:"p"},"viewer"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{}),"ui.activated\ncoordinates.coordinate-systems-changed\nviewer.layout-changed\nauth.sign-in-failed\n")),Object(r.b)("p",null,"Events can publish custom arguments with information about the change they are communicating."),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)(o.a,{mdxType:"UseCaseContainer"},Object(r.b)(c.a,{title:"Subscribing to Existing Events",description:"Learn how to subscribe to an existing event",link:"tutorial-events-subscribe",mdxType:"UseCaseCard"}),Object(r.b)(c.a,{title:"Events API",description:"Check out the full list of Events available in Geocortex Web",link:"api-commands-operations-events#events",mdxType:"UseCaseCard"}),Object(r.b)(c.a,{title:"Implementing Custom Events",description:"Learn how to implement a custom Event.",link:"sdk-events-reference#creating-custom-events",mdxType:"UseCaseCard"})))}u.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var s=n(0),a=n.n(s),r=n(296),c=n.n(r),o=n(130),i=n.n(o);function b(e){var t=e.children;return a.a.createElement("div",{className:c()(i.a.root)},t)}},299:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(305);var s=n(304),a=n(0),r=n.n(a),c=n(296),o=n.n(c),i=n(131),b=n.n(i);function d(e){var t=e.title,n=e.description,a=e.link;return r.a.createElement("div",{className:o()("card-demo",b.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(s.a,{className:"button button--secondary button--block",to:a},"Get Started"))))}}}]);