import { Component } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent {
  constructor(public userService: UserService) {}

  onSetToInactive(user: string): void {
    this.userService.setUserInactive(user);
  }
}
