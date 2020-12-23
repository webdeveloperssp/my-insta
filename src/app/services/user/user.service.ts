import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(public http: HttpClient) {}

  getFeeds(page, result) {
    return this.http.get(
      `https://randomuser.me/api/?page=${page}&results=${result}&seed=feed`
    );
  }
}
