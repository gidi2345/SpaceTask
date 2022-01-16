import * as mongoose from "mongoose";
import Address from '../my_functions/models/Address.model';
import {NetllifyRequestBodyInterface} from '../../spaceTaskMobileApp/src/types/netllifyRequestBody.interface';
import {AddressesRequestsEnum, MissionsRequestsEnum} from "../../spaceTaskMobileApp/src/enums/missions.requests.enum";

import {Schema} from "mongoose";

require("dotenv").config();

const MONGO_PATH = process.env.MONGO_PATH;
const MONGO_DB = process.env.MONGO_DB;


const uri = `${MONGO_PATH}/${MONGO_DB}?retryWrites=true`;

interface Address {
    address: string;
    location: any;
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
            case AddressesRequestsEnum.ADD_ADDRESS:
                const addAddress = new Address({ address: payload.address, location: ''});
                await addAddress.save();
                return {
                    statusCode: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({message: "address saved successfully"})
                };
            case AddressesRequestsEnum.GET_ALL_ADDRESSES:
                const getAllAddresses = await Address.find({});
                return {
                    statusCode: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(getAllAddresses)
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
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(err.message),
        };
    }
}
