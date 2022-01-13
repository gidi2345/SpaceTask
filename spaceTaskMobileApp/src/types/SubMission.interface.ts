import {AddressManageInterface} from "./AddressManage.interface";
import {SubMissionContactInterface} from "./SubMissionContact.interface";

export interface SubMissionInterface {
    contact: SubMissionContactInterface;
    addressesManaged: AddressManageInterface[];
    isComplete: boolean;
}
