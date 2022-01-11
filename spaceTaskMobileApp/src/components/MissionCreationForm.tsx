import React, {useState, useEffect} from 'react';
import netlifyRequest from '../utils/netlifyRequest';
import ContactsManager from './Contacts';
import {
    Alert, Modal,
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';
import {MissionsRequestsEnum} from "../enums/missions.requests.enum";
import {useRecoilState, useRecoilValue} from "recoil";
import missionCreateAtom from "../atoms/missionCreateAtom";
import missionCreateSelector from "../atoms/selectors/missionCreateSelectors";

const MissionCreationForm = () => {
    const [newMission, setNewMission] = useRecoilState<any>(missionCreateAtom);
    const [modalVisible, setModalVisible] = useState(false);

    function sendFormRequest() {
        console.log(newMission);
        netlifyRequest('mission', {type: MissionsRequestsEnum.CREATE_MISSIONS, payload: newMission});
    }

    return (
        <View style={styles.GeneralCardContainer}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
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
                  width: 300,
                    backgroundColor: 'white',
                  height: 300}}>
                    <Text>Choose PernewMissioner</Text>
                    <Button
                        onPress={() => setModalVisible(!modalVisible)}
                        title="close"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                  <ContactsManager chooseMode={true} />
                </View>
              </View>

            </Modal>
            <Text>Create Mission</Text>
            <Text>title</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setNewMission({...newMission, title: text})}
                value={newMission.title}
                placeHolder="cool title"
            />
            <Text>description</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setNewMission({...newMission, description: text})}
                value={newMission.description}
                placeHolder="cool title"
            />
            <Button
                onPress={() => setModalVisible(!modalVisible)}
                title="Choose Performer"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setNewMission({...newMission, locationString: text})}
                value={newMission.locationString}
                placeHolder="location"
            />

            <Button
                onPress={sendFormRequest}
                title="Create Mission"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    GeneralCardContainer: {
        display: 'flex',
        flexDirection: 'column',
        shadowColor: '#000',
        fontSize: 32,
        shadowOffset: {
            width: 0,
            height: 2,
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
});

export default MissionCreationForm;
