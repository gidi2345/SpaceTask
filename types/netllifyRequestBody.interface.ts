import {MissionsRequestsEnum} from "../spaceTaskMobileApp/src/enums/missions.requests.enum";

export interface NetllifyRequestBodyInterface {
    type: MissionsRequestsEnum;
    payload: any;
}
