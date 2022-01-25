import React, {useState, useEffect} from 'react';
import {
    View,
    StyleSheet,
    Modal,
    Alert,
    Button,
    Text
} from 'react-native';

import useRequest from "../hooks/useRequest.hook";
import {AddressesRequestsEnum, MissionsRequestsEnum} from "../enums/missions.requests.enum";
import ScrollableList from '../components/ScrollableList';
import netlifyRequest from "../utils/netlifyRequest";

const Address = ({item}) => {

    return (
        <View>
            <Text>
                {item.address}
            </Text>
        </View>
    )
}

const AddressesManagePage = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        netlifyRequest('addresses', {type: AddressesRequestsEnum.GET_ALL_ADDRESSES, payload: {address: 'coffee'}},
            setData);
    }, [data]);

    const addAddress = () => {
        netlifyRequest('addresses', {type: AddressesRequestsEnum.ADD_ADDRESS, payload: {address: 'bini'}});
    }

    return (
        <View>
            <View>
                <Text>Manage addresses</Text>
                <Text>dfdsfsdf</Text>
            </View>
            {
                    data?.length === 0 ?
                        <View>
                            <Text>you have no addresses yet, please press to add </Text>
                            <Button title={'add'} onPress={() => addAddress() } >

                            </Button>
                        </View>
                        :
                        <View>
                            <ScrollableList data={data} property={'_id'} children={undefined}>
                                <Address  item={undefined} />
                            </ScrollableList>
                            <Button title={'add'} onPress={() => addAddress() } >

                            </Button>
                        </View>
            }
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        color: 'blue',
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    tinyLogo: {
        width: 150,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});

export default AddressesManagePage;
