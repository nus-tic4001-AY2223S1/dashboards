
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://nus-tic4001-ay2223s1.github.io/website","title":"Home"}},[_c('span',{staticClass:"badge rounded-pill bg-warning text-dark }}"},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}})]),_v(" Go to TIC4001 main site")])])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/dashboards/index.html"}},[_c('span',[_v("Dashboards home")])])]),_v(" "),_c('li',{attrs:{"tags":"m--cs2103 m--cs2113 m--tic2002 m--tic4001 m--tic4002"}},[_c('a',{staticClass:"nav-link",attrs:{"href":"/dashboards/contents/participation.html"}},[_c('span',[_c('strong',[_v("Participation dashboard")])])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",attrs:{"tags":"m--cs2103 m--cs2113 m--tic4001 m--tic4002"},scopedSlots:_u([{key:"header",fn:function(){return [_c('strong',[_v("iP dashboards")])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/dashboards/contents/ip-progress.html"}},[_c('span',[_c('span',{staticClass:"fas fa-tasks",attrs:{"aria-hidden":"true"}}),_v(" iP progress")])])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/dashboards/contents/ip-comments.html"}},[_c('span',[_c('svg',{staticClass:"octicon octicon-comment",attrs:{"version":"1.1","width":"16","height":"16","viewBox":"0 0 16 16","aria-hidden":"true"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"}})]),_v(" iP comments")])])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-tic4001-ay2223s1.github.io/ip-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByRepos&breakdown=true&checkedFileTypes=java~md~fxml~sh~bat~gradle~txt","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fas fa-chart-area",attrs:{"aria-hidden":"true"}}),_v(" iP Code")])])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",attrs:{"tags":"m--cs2103 m--cs2113 m--tic4001 m--tic4002"},scopedSlots:_u([{key:"header",fn:function(){return [_c('strong',[_v("tP dashboards")])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/dashboards/contents/tp-progress.html"}},[_c('span',[_c('span',{staticClass:"fas fa-tasks",attrs:{"aria-hidden":"true"}}),_v(" tP progress")])])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/dashboards/contents/tp-comments.html"}},[_c('span',[_v("tP comments")])])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-tic4001-ay2223s1.github.io/tp-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByRepos&breakdown=true&checkedFileTypes=docs~functional-code~test-code~other","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fas fa-chart-area",attrs:{"aria-hidden":"true"}}),_v(" tP Code")])])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('p'),_v(" "),_m(0),_v(" "),_c('box',[_c('ul',[_c('li',[_v("Details about tP grading are "),_c('a',{attrs:{"href":"https://nus-tic4001-ay2223s1.github.io/website/admin/tp-grading.html"}},[_v("here")]),_v(".")]),_v(" "),_c('li',[_v("Note that the progress shown here is just a rough guidance as it was generated by an automated script. "),_c('mark',[_v("A manual inspection will be done after the final submission")]),_v(" to confirm the script's findings.")]),_v(" "),_c('li',[_v("Meaning of colors/icons:\n"),_c('ul',[_c('li',[_c('span',{staticClass:"badge bg-success"},[_v("ABC")]),_v(" : you have done the corresponding item.")]),_v(" "),_c('li',[_c('span',{staticClass:"badge bg-info"},[_v("ABC")]),_v(" : you have done the corresponding item which is an optional item (well done!).")]),_v(" "),_c('li',[_c('span',{staticClass:"badge bg-danger"},[_v("!"),_c('s',[_v("ABC")])]),_v(" : item overdue, you have not done the corresponding item yet.")]),_v(" "),_c('li',[_c('span',{staticClass:"badge bg-dark"},[_v("!"),_c('s',[_v("ABC")])]),_v(" : item due soon, not done yet.")]),_v(" "),_c('li',[_c('span',{staticClass:"badge bg-secondary"},[_v("!"),_c('s',[_v("ABC")])]),_v(" : optional item due soon, not done yet.")]),_v(" "),_c('li',[_v("The [?] suffix (e.g., "),_c('span',{staticClass:"badge bg-dark"},[_v("ABC [?]")]),_v(") indicates there are no data for that item yet. It will be updated in a later time when the relevant data are available.")])])]),_v(" "),_c('li',[_v("If you have queries about the data shown in this page, please email "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tic4001@comp.nus.edu.sg")]),_v(".")]),_v(" "),_c('li',[_v("This dashboard is "),_c('strong',[_v("updated daily")]),_v(".")])])]),_v(" "),_c('div',[_m(1),_v(" "),_c('tabs',{attrs:{"active":"1"}},[_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_c('strong',[_c('strong',[_c('span',{staticClass:"fas fa-users",attrs:{"aria-hidden":"true"}}),_v(" Team Progress")])])]},proxy:true}])},[_v(" "),_c('panel',{attrs:{"minimized":"","expand-headerless":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('strong',[_v("Overall progress")]),_v(" "),_c('span',{staticClass:"dimmed"},[_v("(click to expand)")])])]},proxy:true}])},[_v(" "),_c('h4',{attrs:{"id":"overall-progress"}},[_c('span',{staticClass:"anchor",attrs:{"id":"overall-progress"}}),_v("Overall progress"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#overall-progress","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("(total teams = "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("1")]),_v(")")]),_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Task")]),_v(" "),_c('th',[_v("count → %")]),_v(" "),_c('th',[_v("Completion level")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("product concept")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-success bg-success"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("user stories")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-success bg-success"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UG draft")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-success bg-success"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Forked")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-success bg-success"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Issues Enabled")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-success bg-success"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Docs Published")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-success bg-success"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PR Created")])]),_v(" "),_c('td',[_v("1 → 100%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-success bg-success"},[_v("....................................................................................................")]),_c('span',{staticClass:"text-light bg-light"})])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v1.0 set-up")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-info bg-info"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v1.0 wrap-up")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-info bg-info"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v1.0 released")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-success bg-success"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("assertions enabled")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-success bg-success"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v2.0 set-up")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-info bg-info"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v2.0 wrap-up")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-info bg-info"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v2.0 released")])]),_v(" "),_c('td',[_v("1 → 100%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-success bg-success"},[_v("....................................................................................................")]),_c('span',{staticClass:"text-light bg-light"})])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v3.0 set-up")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-info bg-info"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])])])])])]),_c('p'),_v(" "),_c('table',[_c('thead',[_c('tr',[_c('th',[_c('div',[_c('p',[_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("Team ID")]},proxy:true}])},[_v("Team")])],1)])]),_v(" "),_c('th',[_c('div',[_c('p',[_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("The current CI status as generated by GitHub actions")]},proxy:true}])},[_v("CI status")])],1)])]),_v(" "),_c('th',[_c('div',[_c('p',[_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("i.e., tP tasks to be done by the whole team")]},proxy:true}])},[_v("tP team tasks")])],1)])])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('div',[_c('p',[_c('a',{attrs:{"href":"https://github.com/AY2223S1-TIC4001-F18-1/tp"}},[_v("TIC4001-F18-1")])])])]),_v(" "),_c('td',[_c('div',[_c('img',{attrs:{"src":"https://github.com/AY2223S1-TIC4001-F18-1/tp/workflows/Java%20CI/badge.svg"}})])]),_v(" "),_c('td',[_c('div',[_c('panel',{attrs:{"type":"seamless"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',{staticClass:"card-title"},[_c('span',[_c('span',{staticClass:"badge bg-dark me-1"},[_v("product concept [?]")]),_c('span',{staticClass:"badge bg-dark me-1"},[_v("user stories [?]")]),_c('span',{staticClass:"badge bg-dark me-1"},[_v("UG draft [?]")]),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("Forked")])]),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("Issues Enabled")])]),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("Docs Published")])]),_c('span',{staticClass:"badge bg-success me-1"},[_v("PR Created")]),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("v1.0 released")])]),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("assertions enabled")])]),_c('span',{staticClass:"badge bg-success me-1"},[_v("v2.0 released")]),_c('span',{staticClass:"badge bg-secondary me-1"},[_v("!"),_c('s',[_v("v3.0 set-up")])]),_c('span',{staticClass:"badge bg-light text-primary me-1"},[_v("details "),_c('span',{staticClass:"fas fa-bars",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("activity")]),_v(" "),_c('th',[_v("week")]),_v(" "),_c('th',[_v("description")]),_v(" "),_c('th',[_v("status")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-dark me-1"},[_v("product concept [?]")])]),_v(" "),_c('td',[_v("4")]),_v(" "),_c('td',[_v("Submitted product concept via TEAMMATES")]),_v(" "),_c('td',[_v("No data yet")])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-dark me-1"},[_v("user stories [?]")])]),_v(" "),_c('td',[_v("5")]),_v(" "),_c('td',[_v("Brainstormed at least 20 user stories")]),_v(" "),_c('td',[_v("No data yet")])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-dark me-1"},[_v("UG draft [?]")])]),_v(" "),_c('td',[_v("6")]),_v(" "),_c('td',[_v("UG draft of reasonable quality submitted to LumiNUS")]),_v(" "),_c('td',[_v("No data yet")])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("Forked")])])]),_v(" "),_c('td',[_v("7")]),_v(" "),_c('td',[_v("Forked the tp repo from the module org to the team org")]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("Issues Enabled")])])]),_v(" "),_c('td',[_v("7")]),_v(" "),_c('td',[_v("Issue tracker enabled in the team repo")]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("Docs Published")])])]),_v(" "),_c('td',[_v("7")]),_v(" "),_c('td',[_v("docs have been published via GitHub pages e.g. "),_c('a',{attrs:{"href":"https://AY2223S1-TIC4001-F18-1.github.io/tp/UserGuide.html"}},[_v("https://AY2223S1-TIC4001-F18-1.github.io/tp/UserGuide.html")])]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-success me-1"},[_v("PR Created")])]),_v(" "),_c('td',[_v("7")]),_v(" "),_c('td',[_v("Created a PR from team fork to upstream repo")]),_v(" "),_c('td',[_v("Yes")])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("v1.0 released")])])]),_v(" "),_c('td',[_v("9")]),_v(" "),_c('td',[_v("Released v1.0 jar file on GitHub in week 9")]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("assertions enabled")])])]),_v(" "),_c('td',[_v("9")]),_v(" "),_c('td',[_v("Assertions enabled in the team repo (in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(")")]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-success me-1"},[_v("v2.0 released")])]),_v(" "),_c('td',[_v("11")]),_v(" "),_c('td',[_v("Released v2.0 jar file on GitHub in week 11")]),_v(" "),_c('td',[_v("Yes")])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-secondary me-1"},[_v("!"),_c('s',[_v("v3.0 set-up")])])]),_v(" "),_c('td',[_v("12")]),_v(" "),_c('td',[_v("milestone "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v3.0")]),_v(" is present and has a deadline")]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])])])])])])],1)])])])])],1),_v(" "),_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_c('strong',[_c('strong',[_c('span',{staticClass:"fas fa-user",attrs:{"aria-hidden":"true"}}),_v(" Individual Progress")])])]},proxy:true}])},[_v(" "),_c('panel',{attrs:{"minimized":"","expand-headerless":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('strong',[_v("Overall progress")]),_v(" "),_c('span',{staticClass:"dimmed"},[_v("(click to expand)")])])]},proxy:true}])},[_v(" "),_c('h4',{attrs:{"id":"overall-progress-2"}},[_c('span',{staticClass:"anchor",attrs:{"id":"overall-progress-2"}}),_v("Overall progress"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#overall-progress-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("(total students = "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("2")]),_v(")")]),_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Task")]),_v(" "),_c('th',[_v("count → %")]),_v(" "),_c('th',[_v("Completion level")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Forked")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-success bg-success"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Used JUnit")])]),_v(" "),_c('td',[_v("1 → 50%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-success bg-success"},[_v("..................................................")]),_c('span',{staticClass:"text-light bg-light"},[_v("..................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v1.0 Issues")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-info bg-info"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v1.0 PRs")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-info bg-info"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Assertions")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-success bg-success"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logging")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-info bg-info"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DG Draft")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-success bg-success"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v2.0 Issues")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-info bg-info"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v2.0 PRs")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-info bg-info"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UG Draft")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-success bg-success"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v3.0 Issues")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-info bg-info"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v3.0 PRs")])]),_v(" "),_c('td',[_v("0 → 0%")]),_v(" "),_c('td',[_c('span',{staticClass:"text-info bg-info"}),_c('span',{staticClass:"text-light bg-light"},[_v("....................................................................................................")])])])])])])]),_c('p'),_v(" "),_c('table',[_c('thead',[_c('tr',[_c('th',[_c('div',[_c('p',[_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("Student number (partial)")]},proxy:true}])},[_v("Student")])],1)])]),_v(" "),_c('th',[_c('div',[_c('p',[_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("i.e., weeks in which some code was committed to the repo")]},proxy:true}])},[_v("Weekly progress")])],1)])]),_v(" "),_c('th',[_c('div',[_c('p',[_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("i.e., other tP-related individual tasks")]},proxy:true}])},[_v("Individual tasks")])],1)])])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('div',[_c('p',[_v("A---4621H")])])]),_v(" "),_c('td',[_c('div',[_c('p',[_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("8")])]),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("9")])]),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("10")])]),_c('span',{staticClass:"badge bg-success me-1"},[_v("11")]),_c('span',{staticClass:"badge bg-dark me-1"},[_v("!"),_c('s',[_v("12")])])])])]),_v(" "),_c('td',[_c('div',[_c('panel',{attrs:{"type":"seamless"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',{staticClass:"card-title"},[_c('span',[_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("Forked")])]),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("Used JUnit")])]),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("Assertions")])]),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("DG Draft")])]),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("UG Draft")])]),_c('span',{staticClass:"badge bg-secondary me-1"},[_v("!"),_c('s',[_v("v3.0 Issues")])]),_c('span',{staticClass:"badge bg-secondary me-1"},[_v("!"),_c('s',[_v("v3.0 PRs")])]),_c('span',{staticClass:"badge bg-light text-primary me-1"},[_v("details "),_c('span',{staticClass:"fas fa-bars",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('h5',{attrs:{"id":"tp-weekly-progress"}},[_c('span',{staticClass:"anchor",attrs:{"id":"tp-weekly-progress"}}),_v("tP Weekly Progress"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tp-weekly-progress","onclick":"event.stopPropagation()"}})]),_v(" "),_c('div',{staticClass:"indented"},[_c('ul',[_c('li',[_c('strong',[_v("Week "),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("8")])])]),_v(" Sep 16 2022 07:00 PM - Oct 07 2022 06:59 PM: Did not contribute any commits to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch of the team repo "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})]),_v(" "),_c('li',[_c('strong',[_v("Week "),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("9")])])]),_v(" Oct 07 2022 07:00 PM - Oct 14 2022 06:59 PM: Did not contribute any commits to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch of the team repo "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})]),_v(" "),_c('li',[_c('strong',[_v("Week "),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("10")])])]),_v(" Oct 14 2022 07:00 PM - Oct 21 2022 06:59 PM: Did not contribute any commits to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch of the team repo "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})]),_v(" "),_c('li',[_c('strong',[_v("Week "),_c('span',{staticClass:"badge bg-success me-1"},[_v("11")])]),_v(" Oct 21 2022 07:00 PM - Oct 28 2022 06:59 PM: Contributed "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("1")]),_v(" commit")]),_v(" to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch of the team repo")]),_v(" "),_c('li',[_c('strong',[_v("Week "),_c('span',{staticClass:"badge bg-dark me-1"},[_v("!"),_c('s',[_v("12")])])]),_v(" Oct 28 2022 07:00 PM - Nov 04 2022 06:59 PM: Did not contribute any commits to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch of the team repo "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])])]),_v(" "),_c('h5',{attrs:{"id":"tp-admin-tasks"}},[_c('span',{staticClass:"anchor",attrs:{"id":"tp-admin-tasks"}}),_v("tP Admin Tasks"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tp-admin-tasks","onclick":"event.stopPropagation()"}})]),_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("activity")]),_v(" "),_c('th',[_v("week")]),_v(" "),_c('th',[_v("description")]),_v(" "),_c('th',[_v("status")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("Forked")])])]),_v(" "),_c('td',[_v("7")]),_v(" "),_c('td',[_v("Forked team repo to own GitHub account")]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("Used JUnit")])])]),_v(" "),_c('td',[_v("8")]),_v(" "),_c('td',[_v("Contributed to JUnit code")]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("Assertions")])])]),_v(" "),_c('td',[_v("9")]),_v(" "),_c('td',[_v("Used "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("assert")]),_v("s in the code (found: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("0")]),_v(")")]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("DG Draft")])])]),_v(" "),_c('td',[_v("10")]),_v(" "),_c('td',[_v("Added at least 5 lines to the DG in week 10 (found: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("0")]),_v(" lines added)")]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("UG Draft")])])]),_v(" "),_c('td',[_v("11")]),_v(" "),_c('td',[_v("Added at least 3 lines to the UG in week 11 (found: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("0")]),_v(" lines added)")]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-secondary me-1"},[_v("!"),_c('s',[_v("v3.0 Issues")])])]),_v(" "),_c('td',[_v("12")]),_v(" "),_c('td',[_v("Has GitHub issues assigned in milestone "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v3.0")]),_v(" (found: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("0")]),_v(" issues)")]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-secondary me-1"},[_v("!"),_c('s',[_v("v3.0 PRs")])])]),_v(" "),_c('td',[_v("12")]),_v(" "),_c('td',[_v("Authored PRs (any workflow is accepted) "),_c('em',[_v("assigned")]),_v(" to milestone "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v3.0")]),_v(" (found: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("0")]),_v(" PRs)")]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])])])])])])],1)])]),_v(" "),_c('tr',[_c('td',[_c('div',[_c('p',[_v("A---3936N")])])]),_v(" "),_c('td',[_c('div',[_c('p',[_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("8")])]),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("9")])]),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("10")])]),_c('span',{staticClass:"badge bg-success me-1"},[_v("11")]),_c('span',{staticClass:"badge bg-dark me-1"},[_v("!"),_c('s',[_v("12")])])])])]),_v(" "),_c('td',[_c('div',[_c('panel',{attrs:{"type":"seamless"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',{staticClass:"card-title"},[_c('span',[_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("Forked")])]),_c('span',{staticClass:"badge bg-success me-1"},[_v("Used JUnit")]),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("Assertions")])]),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("DG Draft")])]),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("UG Draft")])]),_c('span',{staticClass:"badge bg-secondary me-1"},[_v("!"),_c('s',[_v("v3.0 Issues")])]),_c('span',{staticClass:"badge bg-secondary me-1"},[_v("!"),_c('s',[_v("v3.0 PRs")])]),_c('span',{staticClass:"badge bg-light text-primary me-1"},[_v("details "),_c('span',{staticClass:"fas fa-bars",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('h5',{attrs:{"id":"tp-weekly-progress-2"}},[_c('span',{staticClass:"anchor",attrs:{"id":"tp-weekly-progress-2"}}),_v("tP Weekly Progress"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tp-weekly-progress-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('div',{staticClass:"indented"},[_c('ul',[_c('li',[_c('strong',[_v("Week "),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("8")])])]),_v(" Sep 16 2022 07:00 PM - Oct 07 2022 06:59 PM: Did not contribute any commits to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch of the team repo "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})]),_v(" "),_c('li',[_c('strong',[_v("Week "),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("9")])])]),_v(" Oct 07 2022 07:00 PM - Oct 14 2022 06:59 PM: Did not contribute any commits to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch of the team repo "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})]),_v(" "),_c('li',[_c('strong',[_v("Week "),_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("10")])])]),_v(" Oct 14 2022 07:00 PM - Oct 21 2022 06:59 PM: Did not contribute any commits to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch of the team repo "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})]),_v(" "),_c('li',[_c('strong',[_v("Week "),_c('span',{staticClass:"badge bg-success me-1"},[_v("11")])]),_v(" Oct 21 2022 07:00 PM - Oct 28 2022 06:59 PM: Contributed "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("9")]),_v(" commits")]),_v(" to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch of the team repo")]),_v(" "),_c('li',[_c('strong',[_v("Week "),_c('span',{staticClass:"badge bg-dark me-1"},[_v("!"),_c('s',[_v("12")])])]),_v(" Oct 28 2022 07:00 PM - Nov 04 2022 06:59 PM: Did not contribute any commits to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch of the team repo "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])])]),_v(" "),_c('h5',{attrs:{"id":"tp-admin-tasks-2"}},[_c('span',{staticClass:"anchor",attrs:{"id":"tp-admin-tasks-2"}}),_v("tP Admin Tasks"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tp-admin-tasks-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("activity")]),_v(" "),_c('th',[_v("week")]),_v(" "),_c('th',[_v("description")]),_v(" "),_c('th',[_v("status")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("Forked")])])]),_v(" "),_c('td',[_v("7")]),_v(" "),_c('td',[_v("Forked team repo to own GitHub account")]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-success me-1"},[_v("Used JUnit")])]),_v(" "),_c('td',[_v("8")]),_v(" "),_c('td',[_v("Contributed to JUnit code")]),_v(" "),_c('td',[_v("Yes")])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("Assertions")])])]),_v(" "),_c('td',[_v("9")]),_v(" "),_c('td',[_v("Used "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("assert")]),_v("s in the code (found: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("0")]),_v(")")]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("DG Draft")])])]),_v(" "),_c('td',[_v("10")]),_v(" "),_c('td',[_v("Added at least 5 lines to the DG in week 10 (found: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("0")]),_v(" lines added)")]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-danger me-1"},[_v("!"),_c('s',[_v("UG Draft")])])]),_v(" "),_c('td',[_v("11")]),_v(" "),_c('td',[_v("Added at least 3 lines to the UG in week 11 (found: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("0")]),_v(" lines added)")]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-secondary me-1"},[_v("!"),_c('s',[_v("v3.0 Issues")])])]),_v(" "),_c('td',[_v("12")]),_v(" "),_c('td',[_v("Has GitHub issues assigned in milestone "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v3.0")]),_v(" (found: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("0")]),_v(" issues)")]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('tr',[_c('td',[_c('span',{staticClass:"badge bg-secondary me-1"},[_v("!"),_c('s',[_v("v3.0 PRs")])])]),_v(" "),_c('td',[_v("12")]),_v(" "),_c('td',[_v("Authored PRs (any workflow is accepted) "),_c('em',[_v("assigned")]),_v(" to milestone "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v3.0")]),_v(" (found: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("0")]),_v(" PRs)")]),_v(" "),_c('td',[_v("No "),_c('span',{staticClass:"far fa-frown",attrs:{"aria-hidden":"true"}})])])])])])])],1)])])])])],1)],1)],1),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(2)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{staticClass:"display-4",attrs:{"id":"tp-progress-dashboard"}},[_c('span',{staticClass:"anchor",attrs:{"id":"tp-progress-dashboard"}}),_v("tP progress dashboard"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tp-progress-dashboard","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('span',{staticClass:"dimmed"},[_v("[This page was last updated on 2022-10-31 @21:18]")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.0.2")]),_v(", generated on Mon, 31 Oct 2022, 22:18:46 GMT+8]")])])])}
}];
  