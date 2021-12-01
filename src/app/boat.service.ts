import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Boat} from "./models/boat.model";
import {AppConstantsService} from "./app-constants.service";

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  private readonly boatsUrl: string;

  constructor(
    private http: HttpClient,
    private appConstants: AppConstantsService
  ) {
    this.boatsUrl = this.appConstants.API_URL + '/boat'
  }

  public save(boat: Boat){
    return this.http.post<Boat>(this.boatsUrl + "/save", boat);
  }

  public getBoatsByMemberId(memberId: number) {
    const getMemberUrl = this.boatsUrl + `/get/member/${memberId}`
    return this.http.get<Boat[]>(getMemberUrl)
  }

  public getAllBoats() {
    return this.http.get<Boat[]>(this.boatsUrl + "/get")
  }
}
