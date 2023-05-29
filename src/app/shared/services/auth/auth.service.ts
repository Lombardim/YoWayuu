import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginUser, RegisterUser, User} from "../../types/user.interface";
import {ServerResponse} from "../../types/server_response.interface";
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = 'http://localhost:3000';
  private _loggedUser?: User;
  public isAdmin: boolean = false;

  get loggedUser(): User | undefined {
    return this._loggedUser;
  };

  constructor(
    private http: HttpClient
  ) { }

  public async logIn(userData: LoginUser, isAdmin: boolean = false): Promise<User> {
    let res = await lastValueFrom(
      this.http.post<ServerResponse<User>>(
      `${this.url}/auth/login`, userData)
    );
    this._loggedUser = res.data;
    this.isAdmin = isAdmin;
    this.updateNames();
    return res.data;
  }

  public async register(userData: RegisterUser): Promise<void> {
    await lastValueFrom(
      this.http.post(`${this.url}/auth/register`, userData)
    );
  }

  public async loginAdmin(): Promise<void> {
    this._loggedUser = await this.logIn({
      email: 'admin@admin.com',
      password: 'admin12345'
    });
    this.updateNames();
    this.isAdmin = true;
  }

  public async autoLogin(userId: number): Promise<User> {
    this._loggedUser = await this.getById(userId);
    this.isAdmin = false;
    this.updateNames();
    return this.loggedUser!;
  }

  updateNames() {
    if (this._loggedUser) {
      let names = this._loggedUser.name.split(' ');
      let lastNames = this._loggedUser.lastName.split(' ');
      this._loggedUser.name = names.map((name) => name[0].toUpperCase() + name.substring(1).toLowerCase()).join(' ');
      this._loggedUser.lastName = lastNames.map((name) => name[0].toUpperCase() + name.substring(1).toLowerCase()).join(' ');
    }
  }

  public async getById(userId: number): Promise<User> {
    let res = await lastValueFrom(
      this.http.get<ServerResponse<User>>(`${this.url}/user/${userId}`)
    );
    return res.data;
  }

  public async getAll(): Promise<User[]> {
    let res = await lastValueFrom(
      this.http.get<ServerResponse<User[]>>(`${this.url}/user/search`)
    );
    return res.data.filter((data) => data.email !== 'admin@admin.com');
  }
}
