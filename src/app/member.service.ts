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
    const members = this.http.get<Member[]>(this.membersUrl + "/get");
    return members
  }

  public save(member: Member) {
    return this.http.post<Member>(this.membersUrl + "/save", member);
  }

}
