import * as mongoose from "mongoose";
import Mission from '../my_functions/models/Mission.model';
import {NetllifyRequestBodyInterface} from '../../types/netllifyRequestBody.interface';
import {MissionsRequestsEnum} from "../../enums/missions.requests.enum";

require("dotenv").config();

const MONGO_PATH = process.env.MONGO_PATH;
const MONGO_DB = process.env.MONGO_DB;


const uri = `${MONGO_PATH}/${MONGO_DB}?retryWrites=true`;

interface Mission {
    title: string;
    description: string;
    timeToComplete: string;
    locationString: string;
}

exports.handler = async function (event, context) {
    context.callbackWaitsForEmptyEventLoop = false;
    // @ts-ignore
    const bodyReq: NetllifyRequestBodyInterface = JSON.parse(event.body);
    const {type, payload} ={...bodyReq};
    try {
        console.log(`retrieved data ${event.body}`);
        const connect = await mongoose.connect(uri);
        switch (type) {
            case MissionsRequestsEnum.CREATE_MISSIONS:
                const mission = new Mission({     title: payload.title,
                    description: payload.description,
                    timeToComplete: payload.timeToComplete,
                    locationString: payload.locationString});
                await mission.save();
                return {
                    statusCode: 200,
                    body: JSON.stringify({message: "save"})
                };
            case MissionsRequestsEnum.GET_ALL_MISSIONS:
                return {
                    statusCode: 200,
                    body: await Mission.find({})
                }
            default:
        }
        await connect.connection.close().then(() => {
            console.log('connection closed');
        });
    }
    catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify(err.message),
        };
    }
}
