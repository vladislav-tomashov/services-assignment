import { EventEmitter, Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class UserService {
  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];

  userActiveChange = new EventEmitter<{ name: string; active: boolean }>();

  setUserActive(user: string): void {
    const index = this.inactiveUsers.findIndex((name) => name === user);

    if (index === -1) {
      return;
    }

    this.inactiveUsers.splice(index, 1);
    this.activeUsers.push(user);

    this.userActiveChange.emit({
      name: user,
      active: true,
    });
  }

  setUserInactive(user: string): void {
    const index = this.activeUsers.findIndex((name) => name === user);

    if (index === -1) {
      return;
    }

    this.activeUsers.splice(index, 1);
    this.inactiveUsers.push(user);

    this.userActiveChange.emit({
      name: user,
      active: false,
    });
  }
}
