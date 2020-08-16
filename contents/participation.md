<frontmatter>
title: "Participation dashboard"
</frontmatter>

<h1 class="display-4">Participation dashboard</h1>

<box>

* Details about participation marks calculations are [here]({{ url_module_website }}{{ '/#assessment' if tic2002 else '/admin/participation.html' }}).
* The important column of the table below is the <span class="text-monospace">==Weeks participated==</span> column. It tells you how many weeks in which you have met _participation bar_ %%(i.e., scored more than half of the participation points)%%.
* Meaning of colors/icons:
  * %%{{ icon_info }}%% : you can click on this icon to find more info
  * <span class="badge badge-success">N</span> : you reached the participation bar for week `N`
  * <span class="badge badge-danger">~~N~~</span> : you did not reach the participation bar for week `N`
* If you have queries about the participation marks, please email `{{ module | lower }}@comp.nus.edu.sg`.
</box>

<include src="{{ module | lower }}/participation-table.mbdf" />
