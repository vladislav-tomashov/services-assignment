import { Component } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent {
  users: string[];

  constructor(private _userService: UserService) {
    this._userService.userActiveChange.subscribe(() => {
      this.users = this._userService.activeUsers;
    });

    this.users = this._userService.activeUsers;
  }

  onSetToInactive(user: string): void {
    this._userService.setUserInactive(user);
  }
}
