import {Boat} from "./boat.model";

export class Member {

  constructor(public firstName: string, public lastName: string, public address: string, public cellPhone: string,
              public homePhone: string, public officePhone: string, public email: string, public spouseName: string,
              public spousePhone: string, public spouseEmail: string, public childrenNames: string, public isOfficeMember: boolean,
              public isCommitteeMember: boolean, public committeeType: string, public officeType: string, public annualDues: number, public memberType: string, public memberBoats: Boat[]) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.cellPhone = cellPhone;
    this.homePhone = homePhone;
    this.officePhone = officePhone;
    this.email = email;
    this.spouseName = spouseName;
    this.spousePhone = spousePhone;
    this.spouseEmail = spouseEmail;
    this.childrenNames = childrenNames;
    this.isOfficeMember = isOfficeMember;
    this.isCommitteeMember = isCommitteeMember;
    this.committeeType = committeeType;
    this.officeType = officeType;
    this.annualDues = annualDues;
    this.memberType = memberType;
    this.memberBoats = memberBoats;
  }

}
