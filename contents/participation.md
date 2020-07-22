<frontmatter>
title: "Participation Dashboard"
</frontmatter>

<h1 class="display-4">Participation dashboard</h1>

<box>

* Details about participation marks calculations are [here]({{ url_module_website }}/admin/participation.html).
* The important column of the table below is the <span class="text-monospace">==Weeks participated==</span> column. It tells you how many weeks you have met the bar for the [criterion <span class="badge badge-info badge-pill">A</span>](participation.html). Your target is to hit 10 weeks.
* Meaning of colors/icons:
  * %%{{ icon_info }}%% : you can click on this icon to find more info
  * <span class="badge badge-success">N</span> : you reached the participation bar for week `N`
  * <span class="badge badge-danger">~~N~~</span> : you did not reach the participation bar for week `N`
* If you have queries about the participation marks, please email `{{ module | lower }}@comp.nus.edu.sg`.
</box>

<include src="participation-table.mbdf" />
