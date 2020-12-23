import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeedsComponent } from "../components/feeds/feeds.component";
import { UserprofileComponent } from "../components/userprofile/userprofile.component";
import { ActivityComponent } from "./../components/activity/activity.component";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "feeds",
        component: FeedsComponent,
      },
      {
        path: "tab2",
        loadChildren: () =>
          import("../tab2/tab2.module").then((m) => m.Tab2PageModule),
      },
      {
        path: "tab3",
        loadChildren: () =>
          import("../tab3/tab3.module").then((m) => m.Tab3PageModule),
      },
      {
        path: "activity",
        component: ActivityComponent,
      },
      {
        path: "profile",
        component: UserprofileComponent,
      },
      {
        path: "",
        redirectTo: "/tabs/feeds",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/feeds",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
