import {BoatDirectoryEntry} from "./boat-directory-entry.model";

export class MemberDirectoryEntry {
  id: number
  firstName: string
  lastName: string
  address: string
  cellPhone: string
  homePhone: string
  officePhone: string
  email: string
  spouseName: string
  spousePhone: string
  spouseEmail: string
  childrenNames: string
  isOfficeMember: boolean
  isCommitteeMember: boolean
  committeeType: string
  officeType: string
  annualDues: number;
  memberType: string;
  boatList: BoatDirectoryEntry[]
}
