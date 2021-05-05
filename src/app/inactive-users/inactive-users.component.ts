import { Component } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private _userService: UserService) {
    this._userService.userActiveChange.subscribe(() => {
      this.users = this._userService.inactiveUsers;
    });

    this.users = this._userService.inactiveUsers;
  }

  onSetToActive(user: string): void {
    this._userService.setUserActive(user);
  }
}
