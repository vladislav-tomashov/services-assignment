import { EventEmitter, Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class UserService {
  private _users: Array<{ name: string; active: boolean }> = [];

  userActiveChange = new EventEmitter<{ name: string; active: boolean }>();

  get activeUsers(): Array<string> {
    return this._users.filter(({ active }) => active).map(({ name }) => name);
  }

  get inactiveUsers(): Array<string> {
    return this._users.filter(({ active }) => !active).map(({ name }) => name);
  }

  addUser(username: string, active: boolean): void {
    if (this._users.find(({ name }) => name === username)) {
      throw `User "${username}" already exists`;
    }

    this._users.push({ name: username, active });
  }

  addActiveUsers(users: Array<string>): void {
    users.forEach((user) => this.addUser(user, true));
  }

  addInactiveUsers(users: Array<string>): void {
    users.forEach((user) => this.addUser(user, false));
  }

  setUserActive(user: string): void {
    this._setUserActivity(user, true);
  }

  setUserInactive(user: string): void {
    this._setUserActivity(user, false);
  }

  private _setUserActivity(user: string, active: boolean): void {
    const tmp = this._users.find(({ name }) => name === user);

    if (!tmp || tmp.active === active) {
      return;
    }

    tmp.active = active;

    this.userActiveChange.emit({ ...tmp });
  }
}
