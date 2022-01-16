import React, {useState, useEffect} from 'react';
import {
    View,
    StyleSheet,
    Modal,
    Alert,
    Button
} from 'react-native';

// @ts-ignore
import Logo from './../assets/images/Logo5.svg';

import Header from "../components/Header";
import {useRecoilState} from "recoil";
import missionCreateAtom from "../atoms/missionCreateAtom";
import modalsAtom from "../atoms/modalsAtom";
import ContactsManager from "../components/Contacts";
import MissionCreationForm from "../components/MissionCreationForm";

const AddressesManagePage = () => {
    const [filterString, setFilterString] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modals, setModals] = useRecoilState<any>(modalsAtom);
    useEffect(() => {

    }, []);

    return (
        <View style = {styles.container}>
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
