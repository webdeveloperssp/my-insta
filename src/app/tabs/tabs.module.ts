import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TabsPageRoutingModule } from "./tabs-routing.module";

import { TabsPage } from "./tabs.page";
import { UserprofileComponent } from "../components/userprofile/userprofile.component";
import { FeedsComponent } from "../components/feeds/feeds.component";
import { ActivityComponent } from "../components/activity/activity.component";

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, TabsPageRoutingModule],
  declarations: [
    TabsPage,
    FeedsComponent,
    UserprofileComponent,
    ActivityComponent,
  ],
})
export class TabsPageModule {}
