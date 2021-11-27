import { Component, OnInit } from '@angular/core';
import {Boat} from "../models/boat.model";
import {ActivatedRoute, Router} from "@angular/router";
import {BoatService} from "../boat.service";

@Component({
  selector: 'app-edit-boat',
  templateUrl: './edit-boat.component.html',
  styleUrls: ['./edit-boat.component.css']
})
export class EditBoatComponent implements OnInit {

  boats: Boat[]
  boat: Boat


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private boatService: BoatService
  ) {
    this.boat = new Boat()
  }

  ngOnInit(): void {
    this.retrieveAllBoats()
  }

  onSubmit(){
    console.log(this.boat)
    this.boatService.save(this.boat).subscribe(result => this.gotoMemberDirectory())

  }

  retrieveAllBoats() {
    this.boatService.getAllBoats().subscribe( data => {
        this.boats = data
      }
    )
  }

  gotoMemberDirectory() {
    this.router.navigate(['/members'])
  }

}
