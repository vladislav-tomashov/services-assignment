import { Component } from "@angular/core";
import { CounterService } from "./services/counter.service";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(userService: UserService, public counterService: CounterService) {
    userService.addActiveUsers(["Max", "Anna"]);
    userService.addInactiveUsers(["Chris", "Manu"]);
  }
}
