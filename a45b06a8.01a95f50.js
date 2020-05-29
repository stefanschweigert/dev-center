(window.webpackJsonp=window.webpackJsonp||[]).push([[96,77,136],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(1),o=n(9),s=(n(0),n(295)),r={},i={id:"web/snippets/prereqs-custom-code",title:"prereqs-custom-code",description:"-   Download and setup the [Geocortex Web SDK](../sdk-overview.mdx).",source:"@site/docs/web/snippets/prereqs-custom-code.mdx",permalink:"/docs/web/snippets/prereqs-custom-code",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-custom-code.mdx"},c=[],l={rightToc:c};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Download and setup the ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK"),"."),Object(s.b)("li",{parentName:"ul"},"Check out the ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#uploading-custom-code-to-an-app"}),"deployment instructions")," to learn more about deploying custom code to a Geocortex Web App.")))}m.isMDXComponent=!0},137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(1),o=n(9),s=(n(0),n(295)),r={},i={id:"web/snippets/framework-components",title:"framework-components",description:"\x3c!-- TODO-API link once available --\x3e",source:"@site/docs/web/snippets/framework-components.mdx",permalink:"/docs/web/snippets/framework-components",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/framework-components.mdx"},c=[],l={rightToc:c};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"This example uses Geocortex Web layout components"))))}m.isMDXComponent=!0},246:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return v})),n.d(t,"default",(function(){return h}));var a=n(1),o=n(9),s=(n(0),n(295)),r=n(300),i=n(299),c=n(298),l=n(133),m=n(137),d=n(303),p=n(302),u={title:"Manage Dynamic Data with a Service",description:"Geocortex Web - Implement a service that manages dynamic data for a component"},b={id:"web/tutorial-service-dynamic-data",title:"Manage Dynamic Data with a Service",description:"Geocortex Web - Implement a service that manages dynamic data for a component",source:"@site/docs/web/tutorial-service-dynamic-data.mdx",permalink:"/docs/web/tutorial-service-dynamic-data",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/tutorial-service-dynamic-data.mdx",sidebar:"web",previous:{title:"Translate a Component's Text",permalink:"/docs/web/tutorial-internationalization"},next:{title:"Commands, Operations and Events Reference",permalink:"/docs/web/api-commands-operations-events"}},v=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Create and Register the Service",id:"create-and-register-the-service",children:[]},{value:"Mock a Sporadically Updated Data Source",id:"mock-a-sporadically-updated-data-source",children:[]},{value:"Consume the Data in the Component",id:"consume-the-data-in-the-component",children:[]},{value:"Complete Example",id:"complete-example",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],w={rightToc:v};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},w,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"When extending Geocortex Web, you may find yourself creating multiple ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-components-overview"}),"components")," that have a shared concern, like a data source, or a REST endpoint call. Shared concerns like this present a good use case for creating a ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-services-create"}),"custom service"),".\nImplementing a custom service in Geocortex Web allows you to implement logic and shared resources that are available on startup to any component. Custom Services are also the recommended way of registering implementations for ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-services-commands-operations#implementing-commands-and-operations"}),"custom commands and operations"),"."),Object(s.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(s.b)(l.default,{mdxType:"PrereqsCustomCodeSnippet"}),Object(s.b)("h2",{id:"overview"},"Overview"),Object(s.b)("p",null,"In this article, we will build a custom service that mocks a periodic fetch of data from a REST endpoint and stores that data for consumption by components. This service will populate a list of news items which will be consumed by a news feed component."),Object(s.b)("h2",{id:"create-and-register-the-service"},"Create and Register the Service"),Object(s.b)("p",null,"Create a new folder structure with the following files. These files define a new service and export it from the ",Object(s.b)("inlineCode",{parentName:"p"},"CustomService")," folder."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"src/services/CustomDataService/CustomDataService.ts")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"src/services/CustomDataService/index.ts"))),Object(s.b)(d.a,{defaultValue:"service",values:[{label:"Service",value:"service"},{label:"Index",value:"index"}],mdxType:"Tabs"},Object(s.b)(p.a,{value:"service",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomDataService/CustomDataService.ts"',title:'"src/services/CustomDataService/CustomDataService.ts"'}),'import { ServiceBase } from "@geocortex/web/services";\n\nexport default class CustomDataService extends ServiceBase {}\n'))),Object(s.b)(p.a,{value:"index",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomDataService/index.ts"',title:'"src/services/CustomDataService/index.ts"'}),'export { default } from "./CustomDataService";\n')))),Object(s.b)("p",null,"Every service needs to be registered with the Web SDK in order to be discovered and initialized."),Object(s.b)("p",null,"Add a call to ",Object(s.b)("inlineCode",{parentName:"p"},"registerService")," in ",Object(s.b)("inlineCode",{parentName:"p"},"src/index.ts"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'export default function(registry: LibraryRegistry) {\n    ...\n    registry.registerService({\n        id: "custom-service",\n        getServiceType: () => CustomService,\n    })\n    ...\n}\n')),Object(s.b)("h2",{id:"mock-a-sporadically-updated-data-source"},"Mock a Sporadically Updated Data Source"),Object(s.b)("p",null,"The purpose of this service will be to create a mock data source for the a news feed component. We can mock a sporadically updated news feed data source, simulating what a real news feed, with data arriving at unknown intervals, might behave like. This service will expose a single public property, ",Object(s.b)("inlineCode",{parentName:"p"},"newsItems")," which will act as a dynamic data source for the news feed component."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomDataService/CustomDataService.ts"',title:'"src/services/CustomDataService/CustomDataService.ts"'}),'import { ServiceBase } from "@geocortex/web/services";\nimport Collection from "esri/core/Collection";\n\nconst newsItems = [\n    "New fire hydrant installed at Main and 5th.",\n    "Pipe burst at 4th and Broadview",\n    "Fire hydrant reported as needs maintenance by citizen.",\n    "Crack in road on the Johnson Street Bridge",\n    "Fire Hydrant vandalized in front of City Hall",\n];\n\nexport default class CustomDataService extends ServiceBase {\n    private _curIndex = 0;\n\n    // highlight-next-line\n    newsItems: Collection<string> = new Collection<string>();\n\n    private async _fetchRecentNews() {\n        // REST request for a news item would go here.\n        return newsItems[this._curIndex++ % newsItems.length];\n    }\n\n    // In a real application, you would want to subscribe to a\n    // data source and not use polling.\n    private _startPollingForNewItems() {\n        const fetchNewsLoop = async () => {\n            const newNews = await this._fetchRecentNews();\n            let curTime = new Date().toTimeString().split("GMT")[0];\n            this.newsItems.unshift(`${curTime}- ${newNews}`);\n            setTimeout(fetchNewsLoop, Math.random() * 6000);\n        };\n\n        fetchNewsLoop();\n    }\n\n    // highlight-start\n    protected _onInitialize(): Promise<void> {\n        super._onInitialize();\n        this._startPollingForNewItems();\n        return;\n    }\n    // highlight-end\n}\n')),Object(s.b)("h2",{id:"consume-the-data-in-the-component"},"Consume the Data in the Component"),Object(s.b)("p",null,"Now that we have the news feed data being populated by a service, we need to consume that data in the news feed component.\nFollowing the best practices for implementing components, the news item data should be managed by the news feed model. Component Models can ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-components-injecting-services"}),"inject services")," as properties, and doing so allows us to directly access the dynamically updated ",Object(s.b)("inlineCode",{parentName:"p"},"newsItems")," property on the service."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/NewsFeed//NewsFeedModel.ts"',title:'"src/components/NewsFeed//NewsFeedModel.ts"'}),'import { ComponentModelBase, serializable } from "@geocortex/web/models";\nimport Collection from "esri/core/Collection";\nimport CustomDataService from "../../services/CustomDataService";\nimport { inject } from "@geocortex/web/services";\n\n@serializable\nexport default class NewsFeedModel extends ComponentModelBase {\n    @inject("custom-data-service")\n    customDataService: CustomDataService | undefined;\n\n    /**\n     * Collection of items to display in the news feed\n     */\n    get newsItems(): Collection<string> {\n        if (\n            this.customDataService &&\n            this.customDataService.newsItems !== undefined\n        ) {\n            return this.customDataService.newsItems;\n        } else {\n            this.messages.commands.ui.displayNotification.execute({\n                message:\n                    "Could not retrieve news items from dynamic data source.",\n            });\n        }\n    }\n}\n')),Object(s.b)("h2",{id:"complete-example"},"Complete Example"),Object(s.b)("p",null,"Finally, we can bring it all together, and add the news item component and styling to the application. The news feed component watches for changes on the news feed model's ",Object(s.b)("inlineCode",{parentName:"p"},"newsItems")," property, which is in turn linked to the custom service's ",Object(s.b)("inlineCode",{parentName:"p"},"newsItems")," property. In this way, we've built a service which exposes shared data to components. Multiple news feed components could be created, and they would all rely on a single copy of the news items. For more information on how the news feed component was built, see the article on ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/tutorial-implement-component-with-ui"}),"custom components")," and ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/tutorial-implement-component-participate-app-config"}),"linking app config to custom components"),"."),Object(s.b)(m.default,{mdxType:"FrameworkComponentsSnippet"}),Object(s.b)(d.a,{defaultValue:"component",values:[{label:"News Feed Component",value:"component"},{label:"Css",value:"css"},{label:"News Feed Model",value:"model"},{label:"Data Service",value:"service"},{label:"Registration",value:"index"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(s.b)(p.a,{value:"service",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomDataService/CustomDataService.ts"',title:'"src/services/CustomDataService/CustomDataService.ts"'}),'import { ServiceBase } from "@geocortex/web/services";\nimport Collection from "esri/core/Collection";\n\nconst newsItems = [\n    "New fire hydrant installed at Main and 5th.",\n    "Pipe burst at 4th and Broadview",\n    "Fire hydrant reported as needs maintenance by citizen.",\n    "Crack in road on the Johnson Street Bridge",\n    "Fire Hydrant vandalized in front of City Hall",\n];\n\nexport default class CustomDataService extends ServiceBase {\n    private _curIndex = 0;\n\n    newsItems: Collection<string> = new Collection<string>();\n\n    private async _fetchRecentNews() {\n        // REST request for a news item would go here.\n        return newsItems[this._curIndex++ % newsItems.length];\n    }\n\n    private _startPollingForNewItems() {\n        const fetchNewsLoop = async () => {\n            const newNews = await this._fetchRecentNews();\n            const curTime = new Date().toTimeString().split("GMT")[0];\n            this.newsItems.unshift(`${curTime}- ${newNews}`);\n            setTimeout(fetchNewsLoop, Math.random() * 6000);\n        };\n\n        fetchNewsLoop();\n    }\n\n    protected _onInitialize(): Promise<void> {\n        super._onInitialize();\n        this._startPollingForNewItems();\n        return;\n    }\n}\n'))),Object(s.b)(p.a,{value:"component",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/component/NewsFeed/NewsFeed.tsx"',title:'"src/component/NewsFeed/NewsFeed.tsx"'}),'import React from "react";\nimport {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@geocortex/web/components";\nimport "./NewsFeed.css";\nimport { NewsFeedModel } from ".";\nimport { useWatchCollectionAndRerender } from "@geocortex/web/ui/hooks";\nimport List from "@geocortex/web/ui/list";\nimport ListItem from "@geocortex/web/ui/list-item";\nimport TitleBar from "@geocortex/web/ui/title-bar";\nimport "./NewsFeed.css";\nimport Typography from "@geocortex/web/ui/typography";\n\nexport default function NewsFeed(\n    props: LayoutElementProperties<NewsFeedModel>\n) {\n    const { model } = props;\n\n    useWatchCollectionAndRerender(model.newsItems);\n\n    return (\n        <LayoutElement {...props}>\n            <List className="news-item-list">\n                <TitleBar text="Recent News" />\n                {model.newsItems.toArray().map((news, idx) => (\n                    <ListItem key={idx}>\n                        <Typography>{news}</Typography>\n                    </ListItem>\n                ))}\n            </List>\n        </LayoutElement>\n    );\n}\n'))),Object(s.b)(p.a,{value:"model",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/component/NewsFeed/NewsFeedModel.ts"',title:'"src/component/NewsFeed/NewsFeedModel.ts"'}),'import { ComponentModelBase, serializable } from "@geocortex/web/models";\nimport Collection from "esri/core/Collection";\nimport CustomDataService from "../../services/CustomDataService";\nimport { inject } from "@geocortex/web/services";\n\n@serializable\nexport default class NewsFeedModel extends ComponentModelBase {\n    @inject("custom-data-service")\n    customDataService: CustomDataService | undefined;\n\n    /**\n     * Collection of items to display in the news feed\n     */\n    get newsItems(): Collection<string> {\n        if (\n            this.customDataService &&\n            this.customDataService.newsItems !== undefined\n        ) {\n            return this.customDataService.newsItems;\n        } else {\n            this.messages.commands.ui.displayNotification.execute({\n                message:\n                    "Could not retrieve news items from dynamic data source.",\n            });\n        }\n    }\n}\n'))),Object(s.b)(p.a,{value:"css",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css",metastring:'title="src/components/NewsFeed/NewsFeed.css"',title:'"src/components/NewsFeed/NewsFeed.css"'}),".news-item-list {\n    max-height: 15em;\n    overflow: scroll;\n    padding: 1em;\n}\n"))),Object(s.b)(p.a,{value:"index",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'}),'import CustomDataService from "./services/CustomDataService";\nimport NewsFeed, { NewsFeedModel } from "./components/NewsFeed";\nimport { LibraryRegistry } from "@geocortex/web/config";\nimport { ComponentType } from "react";\n\nexport default function (registry: LibraryRegistry) {\n    registry.registerService({\n        // highlight-next-line\n        id: "custom-data-service",\n        getServiceType: () => CustomDataService,\n    });\n    registry.registerComponent({\n        name: "news-feed",\n        namespace: "your.custom.namespace",\n        getComponentType: () => NewsFeed as ComponentType,\n        itemType: "news-feed-model",\n        title: "News Feed",\n    });\n    registry.registerModel({\n        getModelType: () => NewsFeedModel,\n        itemType: "news-feed-model",\n    });\n}\n'))),Object(s.b)(p.a,{value:"ui",mdxType:"TabItem"},Object(s.b)("img",{src:Object(r.a)("img/web-implement-service-example.png")}))),Object(s.b)("h2",{id:"next-steps"},"Next Steps"),Object(s.b)(c.a,{mdxType:"UseCaseContainer"},Object(s.b)(i.a,{title:"Check out the Component Reference",description:"Take a deep dive into components in the Geocortex Web SDK",link:"sdk-components-reference",mdxType:"UseCaseCard"}),Object(s.b)(i.a,{title:"Check out the Service Reference",description:"Take a deep dive into services in the Geocortex Web SDK",link:"sdk-services-reference",mdxType:"UseCaseCard"}),Object(s.b)(i.a,{title:"Learn more about Referencing Services in Components",description:"Learn the dependency injection pattern for referencing services",link:"sdk-components-injecting-services",mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},297:function(e,t,n){"use strict";var a=n(0),o=n(51);t.a=function(){return Object(a.useContext)(o.a)}},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),o=n.n(a),s=n(296),r=n.n(s),i=n(130),c=n.n(i);function l(e){var t=e.children;return o.a.createElement("div",{className:r()(c.a.root)},t)}},299:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n(305);var a=n(304),o=n(0),s=n.n(o),r=n(296),i=n.n(r),c=n(131),l=n.n(c);function m(e){var t=e.title,n=e.description,o=e.link;return s.a.createElement("div",{className:i()("card-demo",l.a.root)},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card__header"},s.a.createElement("h3",null,t)),s.a.createElement("div",{className:"card__body"},s.a.createElement("p",null,n)),s.a.createElement("div",{className:"card__footer"},s.a.createElement(a.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(306);var a=n(297);function o(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},301:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=o},302:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},303:function(e,t,n){"use strict";n(26),n(21),n(22);var a=n(0),o=n.n(a),s=n(301);var r=function(){return Object(a.useContext)(s.a)},i=n(296),c=n.n(i),l=n(132),m=n.n(l),d=37,p=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,i=e.values,l=e.groupId,u=r(),b=u.tabGroupChoices,v=u.setTabGroupChoices,w=Object(a.useState)(s),h=w[0],f=w[1];if(null!=l){var g=b[l];null!=g&&g!==h&&f(g)}var j=function(e){f(e),null!=l&&v(l,e)},y=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===t,className:c()("tab-item",m.a.tabItem,{"tab-item--active":h===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return j(t)},onClick:function(){return j(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}}}]);