import {MissionsRequestsEnum} from "../enums/missions.requests.enum";

export interface NetllifyRequestBodyInterface {
    type: MissionsRequestsEnum;
    payload: any;
}
