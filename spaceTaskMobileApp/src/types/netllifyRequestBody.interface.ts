import {MissionsRequestsEnum , AddressesRequestsEnum} from "../enums/missions.requests.enum";

export interface NetllifyRequestBodyInterface {
    type: MissionsRequestsEnum | AddressesRequestsEnum;
    payload: any;
}
