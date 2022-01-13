import {SubMissionInterface} from "./SubMission.interface";

enum MissionStatus {
    OPEN='OPEN',
    CLOSED='CLOSED'
}

export interface MissionInterface {
    uuid: string;
    title: string;
    data: Date;
    addresses: string[];
    subMissions: SubMissionInterface[];
    status: MissionStatus;
    progress: number;
}
