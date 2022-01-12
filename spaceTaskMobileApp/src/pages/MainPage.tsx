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

const MainPage = () => {
    const [filterString, setFilterString] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modals, setModals] = useRecoilState<any>(modalsAtom);
    useEffect(() => {

    }, []);

    return (
        <View style = {styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modals.missionCreate}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                    <View style={{
                        width: '85%',
                        backgroundColor: 'white',
                        height: '70%'}}>
                        <MissionCreationForm />
                    </View>
                </View>
            </Modal>
             <View style={{display: 'flex', flex:1}}><Header /></View>
             <View style={{display: 'flex', flex:8, backgroundColor: 'white'}}></View>
             <View style={{display: 'flex', flex:1, backgroundColor: 'green'}}></View>
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

export default MainPage;
