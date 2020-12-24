import { Component } from "@angular/core";
import { UserService } from "src/app/services/user/user.service";
import { UtilityService } from "src/app/services/utility/utility.service";
import * as moment from "moment";

@Component({
  selector: "app-userprofile",
  templateUrl: "./userprofile.component.html",
  styleUrls: ["./userprofile.component.scss"],
})
export class UserprofileComponent {
  segmentOption: any = "posts";
  constructor(
    public utilityService: UtilityService,
    public userService: UserService
  ) {}
  page = 1;
  result = 25;
  profilePost: any = [];
  dob: any;

  ionViewWillEnter() {
    this.getProfilePosts();
  }

  getProfilePosts() {
    this.utilityService.presentLoading("Loading...");
    this.userService.getFeeds(this.page, this.result).subscribe(
      (data) => {
        this.utilityService.dismissLoader();
        this.profilePost = data["results"];
        this.dob = moment(new Date(this.profilePost[0]?.dob.date)).format(
          "Do MMM"
        );
      },
      (err) => {
        this.utilityService.dismissLoader();
        this.utilityService.presentToast("Something Went Wrong", "danger");
      }
    );
  }

  ionViewDidLeave() {
    this.segmentOption = "posts";
  }
}
