<!-- ===========================  primary module configuration ============================================= -->

<variable name="module">CS2103</variable>
<variable name="module_pair">{{ module }}/T</variable>
<variable name="module_name">Software Engineering</variable>
<variable name="module_color">success</variable>

<variable name="S">1</variable>
<variable name="semester">AY2021S{{ S }}</variable>
<variable name="period">2020 Aug-Dec</variable>
<variable name="current_week">0</variable>
<variable name="archived"></variable>  <!-- keep empty during semester time -->

<variable name="url_announcements">https://luminus.nus.edu.sg/modules/5aee78b3-3927-432e-85a5-27be5f6a00fd/announcements/active</variable>
<variable name="url_files">https://luminus.nus.edu.sg/modules/5aee78b3-3927-432e-85a5-27be5f6a00fd/files</variable>
<variable name="url_instructors">https://docs.google.com/document/d/e/2PACX-1vR7NmKu1dSMXzpQToHbuaCQTFj-vn-zfZenM2p9ppbTcOizTB8mRmMIazA4FObQKq73cnev-i05ERVe/pub?embedded=true</variable>
<variable name="url_java_coding_standard">https://se-education.org/guides/conventions/java/intermediate.html</variable>
<variable name="url_git_conventions">https://se-education.org/guides/conventions/git.html</variable>
<variable name="url_repl_classroom">https://repl.it/classroom/invite/szXDJN4</variable>

<variable name="date_w1_start">2020-08-10</variable>
<variable name="date_w2_start">2020-08-14</variable>
<variable name="date_first_lecture">2020-08-14</variable>
<variable name="day_first_tutorial">Wednesday</variable>
<variable name="recess_after_week">7</variable>
<variable name="time_lecture_start">1600</variable>
<variable name="time_lecture_end">1800</variable>
<variable name="time_t_lecture_start">1200</variable>
<variable name="time_t_lecture_end">1400</variable>

<variable name="ip_name">iP</variable>
<variable name="ip_repo_name">ip</variable>
<variable name="ip_first_week">2</variable>
<variable name="ip_last_week">8</variable>

<variable name="tp_first_week">3</variable>
<variable name="version_practice">v1.1</variable>
<variable name="version_first">v1.2</variable>
<variable name="version_penultimate">v1.3</variable>
<variable name="version_final">v1.4</variable>
<variable name="version_future">v2.0</variable>
<variable name="example_team_id">{{ module }}-T09-2</variable>

<variable name="date_final_submission">2020-11-09</variable>
<variable name="ug_pages_per_person">1</variable>
<variable name="dg_pages_per_person">3</variable>
<variable name="uml_diagrams_per_person">2 types of</variable>

<variable name="marks_ip">30</variable>
<variable name="marks_ip_implementation">15</variable>
<variable name="marks_ip_pm">10</variable>
<variable name="marks_ip_documentation">5</variable>
<variable name="marks_tp">45</variable>
<variable name="marks_tp_design">5</variable>
<variable name="marks_tp_documentation">10</variable>
<variable name="marks_tp_implementation">10</variable>
<variable name="marks_tp_pm">10</variable>
<variable name="marks_tp_pm_individual">5</variable>
<variable name="marks_tp_pm_team">5</variable>
<variable name="marks_tp_qa">10</variable>
<variable name="marks_tp_individual">35</variable>
<variable name="marks_tp_team">10</variable>
<variable name="marks_participation">5</variable>
<variable name="marks_exam">30</variable>
<variable name="marks_exam_essay">0</variable>
<variable name="marks_exam_mcq">30</variable>
<variable name="marks_ca">70</variable>
<variable name="mcq_count">100</variable>


<!-- ===========================  secondary variables =========================================== -->

<variable name="cs2103">{{ "Y" if module == "CS2103" }}</variable>
<variable name="cs2113">{{ "Y" if module == "CS2113" }}</variable>
<variable name="tic2002">{{ "Y" if module == "TIC2002" }}</variable>
<variable name="tic4001">{{ "Y" if module == "TIC4001" }}</variable>
<variable name="te3201">{{ "Y" if module == "TE3201" }}</variable>
<variable name="has_t">{{ "Y" if cs2103 or cs2113 }}</variable>
<variable name="has_pe">{{ "Y" if cs2103 or cs2113 }}</variable>
<variable name="session_name">{{ "lecture" if tic4001 else "tutorial" }}</variable>
<variable name="Session_name">{{ "Lecture" if tic4001 else "Tutorial" }}</variable>

<variable name="w6_days">{{ 14 if recess_after_week == "6" else 7 }}</variable>
<variable name="w7_days">{{ 14 if recess_after_week == "7" else 7 }}</variable>

<variable name="format_normal">ddd, MMM Do</variable>
<variable name="day_lecture">{{ date_first_lecture | date("dddd") }}</variable>
<variable name="date_w3_start">{{ date_w2_start | date("YYYY-MM-DD", 7) }}</variable>
<variable name="date_w4_start">{{ date_w3_start | date("YYYY-MM-DD", 7) }}</variable>
<variable name="date_w5_start">{{ date_w4_start | date("YYYY-MM-DD", 7) }}</variable>
<variable name="date_w6_start">{{ date_w5_start | date("YYYY-MM-DD", 7) }}</variable>
<variable name="date_w7_start">{{ date_w6_start | date("YYYY-MM-DD", (w6_days | int)) }}</variable>
<variable name="date_w8_start">{{ date_w7_start | date("YYYY-MM-DD", (w7_days | int)) }}</variable>
<variable name="date_w9_start">{{ date_w8_start | date("YYYY-MM-DD", 7) }}</variable>
<variable name="date_w10_start">{{ date_w9_start | date("YYYY-MM-DD", 7) }}</variable>
<variable name="date_w11_start">{{ date_w10_start | date("YYYY-MM-DD", 7) }}</variable>
<variable name="date_w12_start">{{ date_w11_start | date("YYYY-MM-DD", 7) }}</variable>
<variable name="date_w13_start">{{ date_w12_start | date("YYYY-MM-DD", 7) }}</variable>
<variable name="date_w14_start">{{ date_w13_start | date("YYYY-MM-DD", 7) }}</variable>

<variable name="module_org">nus-{{ module | lower }}-{{ period if te3201 else semester }}</variable>
<variable name="url_module_org">https://github.com/{{ module_org }}</variable>
<variable name="url_module_gihub_io">https://{{ module_org | lower }}.github.io</variable>

<variable name="url_admin"><md>[Admin Info page]({{baseUrl}}/admin/index.html)</md></variable>
<variable name="url_bugs">{{ url_module_org | safe }}/forum/issues</variable>
<variable name="url_dashboards">{{ url_module_gihub_io | safe }}/dashboards</variable>
<variable name="url_gitter">https://gitter.im/{{ module_org }}/community</variable>
<variable name="url_forum">{{ url_module_org | safe }}/forum/issues</variable>
<variable name="url_forum_activities_dashboard">{{ url_dashboards }}/forum-activities.html</variable>
<variable name="url_ab3_fork_website">{{ url_module_gihub_io | safe }}/tp</variable>
<variable name="url_ab3_upstream_website">https://se-education.org/addressbook-level3</variable>
<variable name="url_ip_dashboard">{{ url_module_gihub_io | safe }}/ip-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByRepos&breakdown=true&checkedFileTypes=java~md~fxml~sh~bat~gradle~txt</variable>
<variable name="url_ip_progress_dashboard">{{ url_dashboards }}/ip-progress.html</variable>
<variable name="url_module_website">{{ url_module_gihub_io | safe }}/website</variable>
<variable name="url_participation_dashboard">{{ url_dashboards }}/participation.html</variable>
<variable name="url_schedule"><md>[Schedule page]({{baseUrl}}/schedule/index.html)</md></variable>
<variable name="url_team_list">{{baseUrl}}/admin/teamList.html</variable>
<variable name="url_tp_dashboard">{{ url_module_gihub_io | safe }}/tp-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByRepos&breakdown=true&checkedFileTypes=docs~functional-code~test-code~other</variable>
<variable name="url_tp_progress_dashboard">{{ url_dashboards }}/tp-progress.html</variable>

<!-- ===========================  icons ================================================= -->

<variable name="icon_announcement"><md>:fas-bell:</md></variable>
<variable name="icon_book"><md>:fas-book:</md></variable>
<variable name="icon_calendar"><md>:fas-calendar-alt:</md></variable>
<variable name="icon_deadline"><md>:fas-clock:</md></variable>
<variable name="icon_dislike"><md>:fas-thumbs-down:</md></variable>
<variable name="icon_example"><md>:fas-cube:</md></variable>
<variable name="icon_embedding"><md>:glyphicon-log-in:</md></variable>
<variable name="icon_exercise"><md>:fas-dumbbell:</md></variable>
<variable name="icon_extra"><span class='badge rounded-pill bg-secondary'><md>:fas-plus: extra</md></span></variable>
<variable name="icon_evidence"><md>:fas-briefcase:</md></variable>
<variable name="icon_graded"><span class="text-info"><tooltip content="counted for participation">:fab-product-hunt:</tooltip></span></variable>
<variable name="icon_info"><md>:fas-info-circle:</md></variable>
<variable name="icon_lecture"><md>:glyphicon-blackboard:</md></variable>
<variable name="icon_like"><md>:fas-thumbs-up:</md></variable>
<variable name="icon_linux"><md>:fab-linux:</md></variable>
<variable name="icon_important_big_red"><font color="red"><big>:glyphicon-exclamation-sign:</big></font></variable>
<variable name="icon_important"><md>:glyphicon-exclamation-sign:</md></variable>
<variable name="icon_new_window"><md>:glyphicon-new-window:</md></variable>
<variable name="icon_outcome"><md>:fas-trophy:</md></variable>
<variable name="icon_output"><md>:fas-arrow-down:</md></variable>
<variable name="icon_output_right"><md>:fas-arrow-right:</md></variable>
<variable name="icon_pr"><md>:octicon-git-pull-request:</md></variable>
<variable name="icon_prereq"><md>:glyphicon-education:</md></variable>
<variable name="icon_preview"><md>:glyphicon-eye-open:</md></variable>
<variable name="icon_print"><md>:glyphicon-print:</md></variable>
<variable name="icon_pro_tip"><span class="badge rounded-pill bg-warning text-dark">:fas-lightbulb: PRO TIP</span></variable>
<variable name="icon_project"><md>:fas-drafting-compass:</md></variable>
<variable name="icon_Q"><md>:glyphicon-question-sign:</md></variable>
<variable name="icon_green_Q"><thumbnail circle text="**Q**" background="#28a745" font-color="white" size="25"/></variable>
<variable name="icon_Q_A">{{ icon_Q | safe }}:glyphicon-ok-sign:</variable>
<variable name="icon_repo"><md>:fas-code-branch:</md></variable>
<variable name="icon_resource"><md>:fas-paperclip:</md></variable>
<variable name="icon_terminal"><smal><span class="badge bg-secondary">&gt;_</span></smal></variable>
<variable name="icon_text"><md>:far-file-alt:</md></variable>
<variable name="icon_tick"><md>:fas-check:</md></variable>
<variable name="icon_tip"><span class="badge rounded-pill bg-warning text-dark">:fas-lightbulb:</span></variable>
<variable name="icon_tick_green"><span style="color:green">{{ icon_tick | safe }}</span></variable>
<variable name="icon_todo"><md>:glyphicon-check:</md></variable>
<variable name="icon_try">:fas-laptop:</variable>
<variable name="icon_tutorial"><md>:fas-chalkboard-teacher:</md></variable>
<variable name="icon_slides"><md>:far-images:</md></variable>
<variable name="icon_video"><md>:glyphicon-facetime-video:</md></variable>
<variable name="icon_windows"><md>:fab-windows:</md></variable>
<variable name="icon_x"><md>:fas-times:</md></variable>
<variable name="icon_x_red"><span style="color:red">{{ icon_x | safe }}</span></variable>

<variable name="icon_tab_admin_info">{{ icon_info | safe }}</variable>
<variable name="icon_tab_project">{{ icon_project | safe }}</variable>
<variable name="icon_tab_programming_topics"><md>:fas-code:</md></variable>
<variable name="icon_tab_tasks">{{ icon_todo | safe }}</variable>
<variable name="icon_tab_topics">{{ icon_book | safe }}</variable>
<variable name="icon_tab_tutorial">{{ icon_tutorial | safe }}</variable>
<variable name="icon_tab_summary">{{ icon_announcement | safe }}</variable>

<variable name="icon_individual"><md>:fas-user:</md></variable>
<variable name="icon_team"><md>:fas-users:</md></variable>
<variable name="icon_both">{{ icon_individual }}/{{ icon_team }}</variable>

<variable name="bad"><font color="red"><md>**{{ icon_dislike | safe }} Bad**</md></font></variable>
<variable name="good"><font color="green"><md>**{{ icon_like | safe }} Good**</md></font></variable>
<variable name="pros"><span class="text-success">**pros:**</span></variable>
<variable name="cons"><span class="text-danger">**cons:**</span></variable>
<variable name="required"><span class="badge rounded-pill bg-danger">REQUIRED</span></variable>
<variable name="optional"><span class="badge rounded-pill bg-success">OPTIONAL</span></variable>
<variable name="evidence"><big>{{ icon_evidence | safe }} Evidence:</big></variable>

<variable name="edition_badge"><small><small><small><span class='badge rounded-pill bg-{{ module_color }}'>{{ module_pair }} edition - {{ period }}</span></small></small></small></variable>
<variable name="M"><span class="badge bg-info">&nbsp;{{ module }}&nbsp;</span></variable>
<variable name="MT"><span class="badge bg-warning">{{ module }}T</span></variable>
<variable name="badge_main_site"><span class="badge rounded-pill bg-warning text-dark }}"><md>:fas-chevron-circle-left:</md> Go to {{ module_pair }} main site</span></variable>

<variable name="heading_project"><h3 class="bg-dark text-white p-2 mb-4 mt-4">{{ icon_project }} Project</h3></variable>

<variable name="s"><md>:glyphicon-star:</md></variable>
<variable name="star"><span class='glyphicon glyphicon-star' aria-hidden='true'></span></variable>
<variable name="one_star"><span class='badge rounded-pill bg-light text-danger'>{{ star | safe }} </span></variable>
<variable name="prereq_no_stars"><span class='badge rounded-pill bg-secondary'>{{ icon_prereq | safe }}{{ icon_prereq | safe }}</span></variable>
<variable name="prereq_one_star"><span class='badge rounded-pill bg-secondary'>{{ icon_prereq | safe }}{{ icon_prereq | safe }} : {{ star | safe }} </span></variable>
<variable name="two_stars"><span class='badge rounded-pill bg-light text-warning'>{{ star | safe }}{{ star | safe }} </span></variable>
<variable name="prereq_two_stars"><span class='badge rounded-pill bg-secondary'>{{ icon_prereq | safe }}{{ icon_prereq | safe }} : {{ star | safe }}{{ star | safe }} </span></variable>
<variable name="three_stars"><span class='badge rounded-pill bg-light text-primary'>{{ star | safe }}{{ star | safe }}{{ star | safe }} </span></variable>
<variable name="prereq_three_stars"><span class='badge rounded-pill bg-secondary'>{{ icon_prereq | safe }}{{ icon_prereq | safe }} : {{ star | safe }}{{ star | safe }}{{ star | safe }} </span></variable>
<variable name="four_stars"><span class='badge rounded-pill bg-success'>{{ star | safe }}{{ star | safe }}{{ star | safe }}{{ star | safe }}: OPTIONAL</span></variable>
<variable name="prereq_four_stars"><span class='badge rounded-pill bg-secondary'>{{ icon_prereq | safe }}{{ icon_prereq | safe }} : {{ star | safe }}{{ star | safe }}{{ star | safe }}{{ star | safe }} </span></variable>

<!-- ===========================  misc aliases =========================================== -->

<variable name="line_dashed"><hr style="border-top: dashed 1px; border-color:grey" /></variable>
<variable name="line_dotted"><hr style="border-width: 1px; border-color: #f3ccff; border-style: dotted"></variable>
<variable name="line_double"><hr style="border-top: 3px double #c5c5c5;"></variable>
<variable name="pagebreak"><p style="page-break-after: always;">&nbsp;</p></variable>
