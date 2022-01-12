import React, {useState, useEffect} from 'react';
import {
    PermissionsAndroid,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    Button
} from 'react-native';

// @ts-ignore
import Logo from './../assets/images/Logo5.svg';
import {useRecoilState} from "recoil";
import modalsAtom from "../atoms/modalsAtom";

const Header = () => {
    const [modals, setModals] = useRecoilState<any>(modalsAtom);
    const [filterString, setFilterString] = useState('');
    useEffect(() => {

    }, []);

    return (
        <View style={styles.container}>
            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10}}>
                <TouchableOpacity
                    onPress={() => {
                    }}
                >
                    <Image style={{width: 30, height: 30}} source={require('../assets/images/user.png')}/>
                </TouchableOpacity>
            </View>
            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{height: 100, width: 200}}>
                    <Logo width={'100%'} height={'100%'}/>
                </View>
            </View>
            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10}}>
                <TouchableOpacity
                    onPress={() =>setModals({...modals, missionCreate: !modals.missionCreate})}
                >
                    <Image style={{width: 30, height: 30}} source={require('../assets/images/plus.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
         flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ff8785',
        shadowColor: "black",
        fontSize: 32,
        shadowOffset: {
            width: 0,
            height: 42,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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

export default Header;
