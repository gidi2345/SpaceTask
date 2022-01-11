import * as mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
    title: String,
    description: String,
    timeToComplete: String,
    locationString: String,
    performers: { type : Array , "default" : [] }
});

const Mission = mongoose.model('Mission', missionSchema);

export default Mission;
