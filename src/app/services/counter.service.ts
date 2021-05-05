import { EventEmitter, Injectable } from "@angular/core";
import { UserService } from "./user.service";

@Injectable({ providedIn: "root" })
export class CounterService {
  activeCounter = 0;
  inactiveCounter = 0;

  activeCounterChange = new EventEmitter<number>();
  inactiveCounterChange = new EventEmitter<number>();

  constructor(userService: UserService) {
    userService.userActiveChange.subscribe(({ active }) => {
      if (active) {
        this.activeCounter = this.activeCounter + 1;
        this.activeCounterChange.emit(this.activeCounter);
      } else {
        this.inactiveCounter = this.inactiveCounter + 1;
        this.inactiveCounterChange.emit(this.inactiveCounter);
      }
    });
  }
}
