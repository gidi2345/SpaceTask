import * as mongoose from "mongoose";
import {Schema} from "mongoose";

const addressSchema = new mongoose.Schema({
    address: String,
    location: Schema.Types.Mixed
});

const Address = mongoose.model('Address', addressSchema);

export default Address;
