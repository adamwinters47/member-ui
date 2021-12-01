import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Slip} from "./models/slip.model";
import {SlipAssignment} from "./models/slip-assignments.model";
import {Member} from "./models/member.model";
import {AppConstantsService} from "./app-constants.service";

@Injectable({
  providedIn: 'root'
})
export class SlipService {

  private readonly slipsUrl: string

  constructor(
    private http: HttpClient,
    private appConstants: AppConstantsService) {
    this.slipsUrl = this.appConstants.API_URL + '/slip'
  }

  public getAllSlips() {
    return this.http.get<Slip[]>(this.slipsUrl + "/get")
  }

  public getAllSlipAssignments() {
    return this.http.get<SlipAssignment[]>(this.slipsUrl + "/getAssignments")
  }
//  return this.http.post<Member>(this.membersUrl + "/save", member);

  public assign(slipAssignment: SlipAssignment) {
    console.log("in service call")
    console.log(slipAssignment)
    return this.http.post<SlipAssignment>(this.slipsUrl + "/assign", slipAssignment)
  }

  public unassign(slipAssignment: SlipAssignment) {
    return this.http.post<SlipAssignment>(this.slipsUrl + "/unassign", slipAssignment)
  }


}
