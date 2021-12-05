import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {
  //Local Testing
  //API_URL: String = "http://localhost:8080"
  //AWS URL
  API_URL: String = "http://okcboatclub.us-east-1.elasticbeanstalk.com"

  constructor() { }
}
