import { Component, OnInit } from '@angular/core';
import {Member} from "../models/member.model";
import {Boat} from "../models/boat.model";
import {MemberService} from "../member.service";
import {BoatService} from "../boat.service";
import {MemberDirectoryEntry} from "../models/member-directory-entry.model";

@Component({
  selector: 'app-directory-entry',
  templateUrl: './directory-entry.component.html',
  styleUrls: ['./directory-entry.component.css']
})
export class DirectoryEntryComponent implements OnInit {

  searchText: string = ""

  retrievedMembers: MemberDirectoryEntry[] = []

  members: MemberDirectoryEntry[] = []


  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.retrieveAllMembers()
    this.assignRetrievedMembers();
    this.members = this.retrievedMembers;
  }

  retrieveAllMembers() {
    this.memberService.findAllEntries().subscribe( data => {
      this.retrievedMembers = data;
      this.members = this.retrievedMembers;
      //this.assignBoatsToMembers();

    })
  }

  assignRetrievedMembers() {
    this.members = this.retrievedMembers;
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
