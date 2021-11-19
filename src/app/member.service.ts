import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Member} from "./models/member.model";

@Injectable()
export class MemberService {

  private readonly membersUrl: string;

  constructor(private http: HttpClient) {
    this.membersUrl = 'http://localhost:8080/member'
  }

  public findAll(): Observable<Member[]> {
    return this.http.get<Member[]>(this.membersUrl + "/get")
  }

}
