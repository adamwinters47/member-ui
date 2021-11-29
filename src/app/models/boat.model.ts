import {Member} from "./member.model";
import {Slip} from "./slip.model";

export class Boat {

  id: number;
  boatName: string;
  boatModel: string;
  length: number;
  beam: number;
  depth: number;
  registration: string;
  isBoatRegistrationCurrent: boolean;
  isCityRegistrationCurrent: boolean;
  member: Member;
  slip: Slip;

}
