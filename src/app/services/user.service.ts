import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@features/user/model/user';
@Injectable()
export class UserService {

  public users$: Observable<User[]>;
  private baseUrl: string;
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.appRoot;
    this.usersUrl = this.baseUrl + '/users';

    this.users$ = this.http.get<User[]>(this.usersUrl);
  }

  public findAll() {
    this.users$ = this.http.get<User[]>(this.usersUrl);
  }

  public onSave(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
}
