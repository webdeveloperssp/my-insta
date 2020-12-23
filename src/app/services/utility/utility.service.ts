import { Injectable } from "@angular/core";
import { LoadingController, ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class UtilityService {
  constructor(
    public loadingController: LoadingController,
    public toastController: ToastController
  ) {}

  async presentLoading(msg) {
    const customeLoader = await this.loadingController.getTop();

    if (customeLoader) return;

    return await this.loadingController
      .create({
        message: msg,
        mode: "ios",
      })
      .then((a) => {
        a.present();
      });
  }

  async dismissLoader() {
    const customeLoader = await this.loadingController.getTop();

    if (!customeLoader) return;
    return await this.loadingController.dismiss().then(() => {});
  }

  async presentToast(msg, color?) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      color: color,
      mode: "ios",
    });
    toast.present();
  }
}
