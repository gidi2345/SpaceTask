import * as mongoose from "mongoose";

const addressSchema = new mongoose.Schema({

});

const Address = mongoose.model('Address', addressSchema);

export default Address;
