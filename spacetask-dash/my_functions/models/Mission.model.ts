import * as mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
    title: String,
    description: String,
    timeToComplete: String,
    locationString: String
});

const Mission = mongoose.model('Mission', missionSchema);

export default Mission;
