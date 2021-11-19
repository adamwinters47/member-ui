import { Component, OnInit } from '@angular/core';
import {Member} from "../models/member.model";
import {Boat} from "../models/boat.model";
import {MemberService} from "../member.service";

@Component({
  selector: 'app-directory-entry',
  templateUrl: './directory-entry.component.html',
  styleUrls: ['./directory-entry.component.css']
})
export class DirectoryEntryComponent implements OnInit {

  searchText: string = "";

  boats: Boat[] = [
    new Boat("boatName", "boatModel", 69, 420, 42069, "boatRegistration", true, true)
  ]

  retrievedMembers: Member[] = [
    new Member("Adam", "Winters", "123 fake st", "cellPhone", "homePhone", "officePhone", "email", "spouseName", "spousePhone", "spouseEmail", "childrenNames", true, true, "committeeType", "officeType", 42069, "memberType", this.boats),
    new Member("Adam", "Winters", "123 fake st", "cellPhone", "homePhone", "officePhone", "email", "spouseName", "spousePhone", "spouseEmail", "childrenNames", true, true, "committeeType", "officeType", 42069, "memberType", this.boats)
]

  members: Member[] = [];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.members = this.retrievedMembers;
    this.members[0].cellPhone = "";
    this.members[1].firstName = "Kelsey";
    this.memberService.findAll().subscribe( data => {
      this.retrievedMembers = data;
    })
    console.log(this.retrievedMembers)
  }

  clearFilter() {
    this.searchText = ""
    this.members = this.retrievedMembers;
  }

  filterMembers() {
    this.members = this.retrievedMembers.filter( m => {
      return m.firstName.toLowerCase().includes(this.searchText) || m.lastName.toLowerCase().includes(this.searchText)
    })
  }

}
