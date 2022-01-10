import * as mongoose from "mongoose";
import Mission from '../my_functions/models/Mission.model';


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
    const bodyReq: Mission = JSON.parse(event.body);
    try {
        console.log(`retrieved data ${event.body}`);
        const connect = await mongoose.connect(uri);
        const mission = new Mission({     title: bodyReq.title,
            description: bodyReq.description,
            timeToComplete: bodyReq.timeToComplete,
            locationString: bodyReq.locationString});
        await mission.save();
        await connect.connection.close().then(() => {
            console.log('connection closed');
        });
        return {
            statusCode: 200,
            body: JSON.stringify({message: "save"})
        };
    }
    catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify(err.message),
        };
    }
}
