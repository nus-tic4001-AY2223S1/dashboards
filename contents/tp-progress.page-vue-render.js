
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://nus-tic4001-ay2223s1.github.io/website","title":"Home"}},[_c('span',{staticClass:"badge rounded-pill bg-warning text-dark }}"},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}})]),_v(" Go to TIC4001 main site")])])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/dashboards/index.html"}},[_c('span',[_v("Dashboards home")])])]),_v(" "),_c('li',{attrs:{"tags":"m--cs2103 m--cs2113 m--tic2002 m--tic4001 m--tic4002"}},[_c('a',{staticClass:"nav-link",attrs:{"href":"/dashboards/contents/participation.html"}},[_c('span',[_c('strong',[_v("Participation dashboard")])])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",attrs:{"tags":"m--cs2103 m--cs2113 m--tic4001 m--tic4002"},scopedSlots:_u([{key:"header",fn:function(){return [_c('strong',[_v("iP dashboards")])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/dashboards/contents/ip-progress.html"}},[_c('span',[_c('span',{staticClass:"fas fa-tasks",attrs:{"aria-hidden":"true"}}),_v(" iP progress")])])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/dashboards/contents/ip-comments.html"}},[_c('span',[_c('svg',{staticClass:"octicon octicon-comment",attrs:{"version":"1.1","width":"16","height":"16","viewBox":"0 0 16 16","aria-hidden":"true"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"}})]),_v(" iP comments")])])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-tic4001-ay2223s1.github.io/ip-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByRepos&breakdown=true&checkedFileTypes=java~md~fxml~sh~bat~gradle~txt","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fas fa-chart-area",attrs:{"aria-hidden":"true"}}),_v(" iP Code")])])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",attrs:{"tags":"m--cs2103 m--cs2113 m--tic4001 m--tic4002"},scopedSlots:_u([{key:"header",fn:function(){return [_c('strong',[_v("tP dashboards")])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/dashboards/contents/tp-progress.html"}},[_c('span',[_c('span',{staticClass:"fas fa-tasks",attrs:{"aria-hidden":"true"}}),_v(" tP progress")])])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/dashboards/contents/tp-comments.html"}},[_c('span',[_v("tP comments")])])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-tic4001-ay2223s1.github.io/tp-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByRepos&breakdown=true&checkedFileTypes=docs~functional-code~test-code~other","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fas fa-chart-area",attrs:{"aria-hidden":"true"}}),_v(" tP Code")])])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('p'),_v(" "),_m(0),_v(" "),_c('box',[_c('ul',[_c('li',[_v("Details about tP grading are "),_c('a',{attrs:{"href":"https://nus-tic4001-ay2223s1.github.io/website/admin/tp-grading.html"}},[_v("here")]),_v(".")]),_v(" "),_c('li',[_v("Note that the progress shown here is just a rough guidance as it was generated by an automated script. "),_c('mark',[_v("A manual inspection will be done after the final submission")]),_v(" to confirm the script's findings.")]),_v(" "),_c('li',[_v("Meaning of colors/icons:\n"),_c('ul',[_c('li',[_c('span',{staticClass:"dimmed"},[_c('span',[_c('span',{staticClass:"fas fa-info-circle",attrs:{"aria-hidden":"true"}})])]),_v(" : you can click on this icon to find more info")]),_v(" "),_c('li',[_c('span',{staticClass:"badge bg-success"},[_v("ABC")]),_v(" : you have done the corresponding item.")]),_v(" "),_c('li',[_c('span',{staticClass:"badge bg-info"},[_v("ABC")]),_v(" : you have done the corresponding item which is an optional item (well done!).")]),_v(" "),_c('li',[_c('span',{staticClass:"badge bg-danger"},[_v("!"),_c('s',[_v("ABC")])]),_v(" : item overdue, you have not done the corresponding item yet.")]),_v(" "),_c('li',[_c('span',{staticClass:"badge bg-dark"},[_v("!"),_c('s',[_v("ABC")])]),_v(" : item due soon, not done yet.")]),_v(" "),_c('li',[_c('span',{staticClass:"badge bg-secondary"},[_v("!"),_c('s',[_v("ABC")])]),_v(" : optional item due soon, not done yet.")]),_v(" "),_c('li',[_v("The [?] suffix (e.g., "),_c('span',{staticClass:"badge bg-dark"},[_v("ABC [?]")]),_v(") indicates there are no data for that item yet. It will be updated in a later time when the relevant data are available.")])])]),_v(" "),_c('li',[_v("If you have queries about the data shown in this page, please email "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tic4001@comp.nus.edu.sg")]),_v(".")]),_v(" "),_c('li',[_v("This dashboard is "),_c('strong',[_v("updated daily")]),_v(".")])])]),_v(" "),_m(1),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(2)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{staticClass:"display-4",attrs:{"id":"tp-progress-dashboard"}},[_c('span',{staticClass:"anchor",attrs:{"id":"tp-progress-dashboard"}}),_v("tP progress dashboard"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tp-progress-dashboard","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',[_c('p',[_c('span',{staticClass:"dimmed"},[_v("[We have not started updating this dashboard yet]")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.0.1")]),_v(", generated on Wed, 24 Aug 2022, 20:59:26 GMT+8]")])])])}
}];
  