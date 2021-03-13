import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { repos } from "./repos";

@Injectable()
export class GithubService {
  baseURL: string = "https://api.github.com/";
  varName = "LnD";
  constructor(private httpclient: HttpClient) {}

  getRepo(userName: string): Observable<any> {
    return this.httpclient.get(this.baseURL + "users/" + userName + "/repos");
  }
}
