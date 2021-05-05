import { Injectable } from "@angular/core";
import { UserService } from "./user.service";

@Injectable({ providedIn: "root" })
export class CounterService {
  activeCounter = 0;
  inactiveCounter = 0;

  constructor(userService: UserService) {
    userService.userActiveChange.subscribe(({ active }) => {
      if (active) {
        this.activeCounter = this.activeCounter + 1;
      } else {
        this.inactiveCounter = this.inactiveCounter + 1;
      }
    });
  }
}
