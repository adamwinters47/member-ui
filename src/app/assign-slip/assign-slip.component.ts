import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SlipService} from "../slip.service";
import {Slip} from "../models/slip.model";
import {Boat} from "../models/boat.model";
import {BoatService} from "../boat.service";
import {SlipAssignment} from "../models/slip-assignments.model";

@Component({
  selector: 'app-assign-slip',
  templateUrl: './assign-slip.component.html',
  styleUrls: ['./assign-slip.component.css']
})
export class AssignSlipComponent implements OnInit {

  retrievedBoats: Boat[]
  boats: Boat[]
  boat: Boat
  retrievedSlips: Slip[]
  slips: Slip[]
  slipAssignments: SlipAssignment[]
  onlyShowUnassigned: boolean

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private slipService: SlipService,
    private boatService: BoatService
    ) {
      this.boat = new Boat()
  }

  ngOnInit(): void {
    this.retrieveAllSlips()
    this.retrieveAllBoats()
    this.retrieveAllSlipAssignments()
  }

  retrieveAllSlipAssignments() {
    this.slipService.getAllSlipAssignments().subscribe( data => {
      this.slipAssignments = data
    })

    console.log(this.slipAssignments)
  }

  retrieveAllSlips() {
    this.slipService.getAllSlips().subscribe( data => {
      this.retrievedSlips = data
      this.slips = this.retrievedSlips
    })
  }

  retrieveAllBoats() {
    this.boatService.getAllBoats().subscribe( data => {
        this.boats = data
        this.retrievedBoats = this.boats
      }
    )
  }

  assign(slip: SlipAssignment) {
    console.log(this.retrievedSlips[0])
    console.log(this.boats[0])
    console.log(slip)
    slip.boatId = this.boat.id
    slip.boatName = this.boat.boatName
    slip.boatModel = this.boat.boatModel
    this.slipService.assign(slip).subscribe(result => this.gotoMemberDirectory())
  }

  unassign(slip: SlipAssignment) {
      this.slipService.unassign(slip).subscribe(result => this.gotoMemberDirectory());
  }

  gotoMemberDirectory() {
    this.router.navigate(['/members'])
  }

  filterUnassigned() {
    if(this.onlyShowUnassigned) {
      this.boats = this.retrievedBoats.filter( b => {
        return b.slip === null;
      })
    } else {
      this.boats = this.retrievedBoats
    }
  }

}
