import { Component, OnInit } from '@angular/core';
import {Member} from "../models/member.model";
import {Boat} from "../models/boat.model";
import {MemberService} from "../member.service";
import {BoatService} from "../boat.service";

@Component({
  selector: 'app-directory-entry',
  templateUrl: './directory-entry.component.html',
  styleUrls: ['./directory-entry.component.css']
})
export class DirectoryEntryComponent implements OnInit {

  searchText: string = ""

  retrievedMembers: Member[] = []

  members: Member[] = []

  constructor(private memberService: MemberService, private boatService: BoatService) { }

  ngOnInit(): void {
    this.retrieveAllMembers()
    this.assignRetrievedMembers();
    this.members = this.retrievedMembers;
  }

  retrieveAllMembers() {
    this.memberService.findAll().subscribe( data => {
      this.retrievedMembers = data;
      this.members = this.retrievedMembers;
      this.assignBoatsToMembers();

    })
  }

  assignRetrievedMembers() {
    this.members = this.retrievedMembers;
  }

  assignBoatsToMembers() {
    console.log("Assigning Boats")
    for(const member of this.retrievedMembers) {
      this.boatService.getBoatsByMemberId(member.id).subscribe( data => {
          member.boatList = data
        }
      )
    }
  }

  clearFilter() {
    this.searchText = ""
    this.members = this.retrievedMembers;
  }

  filterMembers() {
    this.members = this.retrievedMembers.filter( m => {
      return m.firstName.toLowerCase().startsWith(this.searchText.toLowerCase()) || m.lastName.toLowerCase().startsWith(this.searchText.toLowerCase())
      || m.email.toLowerCase().startsWith(this.searchText.toLowerCase())
    })

  }

}
