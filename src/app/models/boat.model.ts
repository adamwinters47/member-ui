import {Member} from "./member.model";

export class Boat {

  boatName: string;
  boatModel: string;
  length: number;
  beam: number;
  depth: number;
  registration: string;
  isBoatRegistrationCurrent: boolean;
  isCityRegistrationCurrent: boolean;
  member: Member;

}
