import React, {useState, useEffect} from 'react';
import netlifyRequest from '../utils/netlifyRequest';
import ContactsManager from './Contacts';
import {
    Alert, Modal,
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import {MissionsRequestsEnum} from "../enums/missions.requests.enum";
import {useRecoilState, useRecoilValue} from "recoil";
import missionCreateAtom from "../atoms/missionCreateAtom";
import missionCreateSelector from "../atoms/selectors/missionCreateSelectors";
import modalsAtom from "../atoms/modalsAtom";

const MissionCreationForm = () => {
    const [newMission, setNewMission] = useRecoilState<any>(missionCreateAtom);
    const [modalVisible, setModalVisible] = useState(false);
    const [modals, setModals] = useRecoilState<any>(modalsAtom);

    function sendFormRequest() {
        netlifyRequest('mission', {type: MissionsRequestsEnum.CREATE_MISSIONS, payload: newMission});
    }

    return (
        <View style={styles.GeneralCardContainer}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modals.contacts}
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
                  width: '70%',
                    backgroundColor: 'white',
                  height: '70%'}}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <View style={{display: 'flex', flex:8}}>
                            <Text style={styles.textStyle}>Contacts</Text>
                        </View>
                        <View style={{display: 'flex', flex:2, justifyContent:'center', alignItems: 'center'}}>
                            <TouchableOpacity
                                onPress={() => setModals({...modals, contacts: !modals.contacts })}
                            >
                                <Image style={{width: 20, height: 20}} source={require('../assets/images/close.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                  <ContactsManager chooseMode={true} />
                </View>
              </View>

            </Modal>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <View style={{display: 'flex', flex:8}}>
                    <Text style={styles.textStyle}>Create Mission</Text>
                </View>
                <View style={{display: 'flex', flex:2, justifyContent:'center', alignItems: 'center'}}>
                    <TouchableOpacity
                        onPress={() => setModals({...modals, missionCreate: !modals.missionCreate })}
                    >
                        <Image style={{width: 20, height: 20}} source={require('../assets/images/close.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={text => setNewMission({...newMission, title: text})}
                value={newMission.title}
                onFocus={(e) => e.target.placeholder = ''}
                placeholder="mission title"
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setNewMission({...newMission, description: text})}
                value={newMission.description}
                onFocus={(e) => e.target.placeholder = ''}
                placeholder="mission description"
            />
            <Button
                onPress={() => setModals({...modals, contacts: !modals.contacts })}
                title="Choose Performer"
                color="#841584"
                onFocus={(e) => e.target.placeholder = ''}
                accessibilityLabel="Learn more about this purple button"
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setNewMission({...newMission, locationString: text})}
                value={newMission.locationString}
                onFocus={(e) => e.target.placeholder = ''}
                placeholder="location"
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
        borderStyle:'solid',
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
        elevation: 2,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    textStyle: {
        fontSize: 28,
        margin: 2,
        color: 'black'
    }
});

export default MissionCreationForm;
