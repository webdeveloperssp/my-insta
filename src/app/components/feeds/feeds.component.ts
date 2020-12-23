import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "src/app/services/user/user.service";
import { UtilityService } from "src/app/services/utility/utility.service";
import { IonContent } from "@ionic/angular";

@Component({
  selector: "app-feeds",
  templateUrl: "./feeds.component.html",
  styleUrls: ["./feeds.component.scss"],
})
export class FeedsComponent implements OnInit {
  feedsData: any = [];
  page = 1;
  result = 5;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    pager: false,
  };
  loaded: boolean;
  @ViewChild(IonContent, { static: false }) private content: IonContent;
  constructor(
    public userService: UserService,
    public utilityService: UtilityService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.content.scrollToTop();
    this.getFeeds(true);
  }

  getFeeds(initialLoad) {
    initialLoad && this.utilityService.presentLoading("Loading Feeds...");
    this.userService.getFeeds(this.page, this.result).subscribe(
      (data) => {
        initialLoad && this.utilityService.dismissLoader();
        this.feedsData = this.feedsData.concat(data["results"]);
      },
      (err) => {
        initialLoad && this.utilityService.dismissLoader();
        this.utilityService.presentToast("Something Went Wrong", "danger");
      }
    );
  }

  loadMoreFeeds(event) {
    setTimeout(() => {
      this.page++;
      this.getFeeds(false);
      event.target.complete();
    }, 500);
  }
}
