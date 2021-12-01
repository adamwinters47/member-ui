import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Member} from "./models/member.model";
import {AppConstantsService} from "./app-constants.service";
import {MemberDirectoryEntry} from "./models/member-directory-entry.model";

@Injectable()
export class MemberService {

  private readonly membersUrl: string;

  constructor(
    private http: HttpClient,
    private appConstants: AppConstantsService) {
    this.membersUrl = this.appConstants.API_URL + '/member'
  }

  public findAll(): Observable<Member[]> {
    const members = this.http.get<Member[]>(this.membersUrl + "/get");
    return members
  }

  public findAllEntries(): Observable<MemberDirectoryEntry[]> {
    const members = this.http.get<MemberDirectoryEntry[]>(this.membersUrl + "/getEntries");
    return members
  }

  public save(member: Member) {
    return this.http.post<Member>(this.membersUrl + "/save", member);
  }

  public delete(memberId: number) {
    return this.http.delete(this.membersUrl + '/remove/' + memberId)
  }

}
