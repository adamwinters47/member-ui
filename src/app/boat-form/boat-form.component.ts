import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Boat} from "../models/boat.model";
import {BoatService} from "../boat.service";
import {Member} from "../models/member.model";
import {MemberService} from "../member.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {of} from "rxjs";

@Component({
  selector: 'app-boat-form',
  templateUrl: './boat-form.component.html',
  styleUrls: ['./boat-form.component.css']
})
export class BoatFormComponent implements OnInit {

  boat: Boat
  members: Member[] = []

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private boatService: BoatService,
    private memberService: MemberService,
  ) {
    this.boat = new Boat()
  }

  ngOnInit(): void {
    this.retrieveAllMembers()
  }

  retrieveAllMembers() {
    this.memberService.findAll().subscribe( data => {
      this.members = data;
    })
    console.log("Members inside retrieve function")
    console.log(this.members)
  }

  onSubmit() {
    console.log(this.boat.member.firstName + " " + this.boat.member.lastName)

    console.log(this.boat)
    this.boatService.save(this.boat).subscribe(result => this.goToMemberDirectory())
  }

  goToMemberDirectory() {
    this.router.navigate(['/members'])
  }
}
