import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {

  API_URL: String = "http://localhost:8080"

  constructor() { }
}
