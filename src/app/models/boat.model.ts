export class Boat {
  constructor(public boatName: string, public boatModel: string, public length: number, public beam: number,
              public depth: number, public registration: string, public isBoatRegistrationCurrent: boolean, public isCityRegistrationCurrent: boolean) {
    this.boatName = boatName;
    this.boatModel = boatModel;
    this.length = length;
    this.beam = beam;
    this.depth = depth;
    this.registration = registration;
    this.isBoatRegistrationCurrent = isBoatRegistrationCurrent;
    this.isCityRegistrationCurrent = isCityRegistrationCurrent;
  }
}
