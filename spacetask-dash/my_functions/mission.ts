import * as mongoose from "mongoose";
import Mission from '../my_functions/models/Mission.model';


require("dotenv").config();

const MONGO_PATH = process.env.MONGO_PATH;
const MONGO_DB = process.env.MONGO_DB;


const uri = `${MONGO_PATH}/${MONGO_DB}?retryWrites=true`;

exports.handler = async function (event, context) {
    context.callbackWaitsForEmptyEventLoop = false;
    const bodyReq: any = JSON.parse(event.body);

    try {
        await mongoose.connect(uri);
        const mission = new Mission({     title: 'df',
            description: 'df',
            timeToComplete: 'df',
            locationString: 'df'});
        await mission.save();
    }
    catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify(err.message),
        };
    }
}
