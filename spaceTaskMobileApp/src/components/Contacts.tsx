import React, {useState, useEffect} from 'react';
import {
    PermissionsAndroid,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    Linking,
    Button
} from 'react-native';
import Contacts from 'react-native-contacts';

import ScrollableList from '../components/List';
import {useRecoilState} from "recoil";
import missionCreateAtom from "../atoms/missionCreateAtom";

const numberTest = {
    recordID: '6b2237ee0df85980',
    backTitle: '',
    company: '',
    emailAddresses: [
        {
            label: 'work',
            email: 'carl-jung@example.com',
        },
    ],
    familyName: 'Jung',
    givenName: 'Carl',
    middleName: '',
    jobTitle: '',
    phoneNumbers: [
        {
            label: 'mobile',
            number: '(555) 555-5555',
        },
    ],
    hasThumbnail: true,
    thumbnailPath: 'content://com.android.contacts/display_photo/3',
    postalAddresses: [
        {
            label: 'home',
            formattedAddress: '',
            street: '123 Fake Street',
            pobox: '',
            neighborhood: '',
            city: 'Sample City',
            region: 'CA',
            state: 'CA',
            postCode: '90210',
            country: 'USA',
        },
    ],
    prefix: 'MR',
    suffix: '',
    department: '',
    birthday: {year: 1988, month: 1, day: 1},
    imAddresses: [
        {username: '0123456789', service: 'ICQ'},
        {username: 'johndoe123', service: 'Facebook'},
    ],
};

const ContactsManager = ({chooseMode}) => {
    const [contacts, setContacts] = useState([numberTest]);
    const [filterString, setFilterString] = useState('');
    useEffect(() => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Please accept bare mortal',
        }).then(
            Contacts.getAll()
                .then(newcContacts => {
                    // work with contacts

                    setContacts([...contacts, ...newcContacts]);
                })
                .catch(e => {
                    console.log(e);
                }),
        );
    }, []);

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setFilterString}
                value={filterString}
                placeHolder="search contact"
            />
            <ScrollableList
                data={contacts.filter(
                    contact =>
                        filterString.length == 0 ||
                        contact.givenName.includes(filterString),
                )}
                property={'recordID'}
            >
                <Item chooseMode={chooseMode}/>
            </ScrollableList>
        </View>
    );
};

const Item = ({item, chooseMode}) => {
    const [newMission, setNewMission] = useRecoilState<any>(missionCreateAtom);

    return (
        <View style={styles.item}>
            <Text>{item?.givenName ? item?.givenName : item.title}</Text>
            <TouchableHighlight
                onPress={() =>
                    Linking.openURL(
                        `whatsapp://send?text=hello&phone=${item?.phoneNumbers[0]?.number}`,
                    )
                }>
                <Text style={styles.title}>{item?.phoneNumbers[0]?.number}</Text>
            </TouchableHighlight>
            {chooseMode && <Button
                onPress={() => setNewMission({...newMission, performers: [...newMission.performers, item]})}
                title="add"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />}
        </View>
    )
};

const styles = StyleSheet.create({
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
});

export default ContactsManager;
