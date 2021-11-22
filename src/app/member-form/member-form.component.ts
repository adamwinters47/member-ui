import { Component, OnInit } from '@angular/core';
import {Member} from "../models/member.model";
import {ActivatedRoute, Router} from "@angular/router";
import {MemberService} from "../member.service";

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {

  member: Member;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private memberService: MemberService
  ) {
    this.member = new Member();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.member);
    this.memberService.save(this.member).subscribe(result => this.gotoMemberDirectory());
  }

  gotoMemberDirectory() {
    this.router.navigate(['/members'])
  }


}
