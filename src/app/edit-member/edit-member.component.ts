import { Component, OnInit } from '@angular/core';
import {Member} from "../models/member.model";
import {ActivatedRoute, Router} from "@angular/router";
import {MemberService} from "../member.service";

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {

  member: Member
  members: Member[]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private memberService: MemberService
  ) {
    this.member = new Member()
  }

  ngOnInit(): void {
    this.retrieveAllMembers()
  }

  retrieveAllMembers() {
    this.memberService.findAll().subscribe(data => {
      this.members = data;
    })
  }

  onSubmit(){
    console.log(this.member)
    this.memberService.save(this.member).subscribe(result => this.gotoMemberDirectory());
  }

  gotoMemberDirectory() {
    this.router.navigate(['/members'])
  }

  deleteMember() {
    this.memberService.delete(this.member.id).subscribe()
    this.gotoMemberDirectory()
  }
}
