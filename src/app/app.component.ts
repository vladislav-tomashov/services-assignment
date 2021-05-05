import { Component } from "@angular/core";
import { CounterService } from "./services/counter.service";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  activeCounter = 0;
  inactiveCounter = 0;

  constructor(userService: UserService, counterService: CounterService) {
    userService.addActiveUsers(["Max", "Anna"]);
    userService.addInactiveUsers(["Chris", "Manu"]);

    counterService.activeCounterChange.subscribe((counter) => {
      this.activeCounter = counter;
    });

    counterService.inactiveCounterChange.subscribe((counter) => {
      this.inactiveCounter = counter;
    });
  }
}
