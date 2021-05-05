import { Component } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent {
  constructor(public userService: UserService) {}

  onSetToActive(user: string): void {
    this.userService.setUserActive(user);
  }
}
