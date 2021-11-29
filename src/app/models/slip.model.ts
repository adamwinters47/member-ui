import {Boat} from "./boat.model";
import {Dock} from "./dock.model";

export class Slip {

  id: number
  slipNum: number
  length: number
  width: number
  slipType: string
  dock: Dock
  boat: Boat
  isAssigned: boolean

}
