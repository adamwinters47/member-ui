import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Boat} from "./models/boat.model";

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  private readonly boatsUrl: string;

  constructor(private http: HttpClient) {
    this.boatsUrl = 'http://localhost:8080/boat'
  }

  public save(boat: Boat){
    return this.http.post<Boat>(this.boatsUrl + "/save", boat);
  }

  public getBoatsByMemberId(memberId: number) {
    const getMemberUrl = `http://localhost:8080/boat/get/member/${memberId}`
    return this.http.get<Boat[]>(getMemberUrl)
  }
}
