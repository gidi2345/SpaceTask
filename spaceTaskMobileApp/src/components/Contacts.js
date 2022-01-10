import React, {useState, useEffect} from 'react';
import {PermissionsAndroid, View, Text, TextInput, StyleSheet} from 'react-native';
import Contacts from 'react-native-contacts';

import ScrollableList from "../components/List";

const numberTest = {
    recordID: '6b2237ee0df85980',
    backTitle: '',
    company: '',
    emailAddresses: [{
        label: 'work',
        email: 'carl-jung@example.com',
    }],
    familyName: 'Jung',
    givenName: 'Carl',
    middleName: '',
    jobTitle: '',
    phoneNumbers: [{
        label: 'mobile',
        number: '(555) 555-5555',
    }],
    hasThumbnail: true,
    thumbnailPath: 'content://com.android.contacts/display_photo/3',
    postalAddresses: [{
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
    }],
    prefix: 'MR',
    suffix: '',
    department: '',
    birthday: {'year': 1988, 'month': 1, 'day': 1 },
    imAddresses: [
        { username: '0123456789', service: 'ICQ'},
        { username: 'johndoe123', service: 'Facebook'}
    ]
}


const ContactsManager = () => {
    const [contacts, setContacts] = useState([numberTest]);
    const [filterString, setFilterString] = useState('');
    useEffect(() => {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
                'title': 'Contacts',
                'message': 'This app would like to view your contacts.',
                'buttonPositive': 'Please accept bare mortal'
            }
        )
            .then(Contacts.getAll()
                .then((newcContacts) => {
                    // work with contacts

                    setContacts([...contacts,...newcContacts]);
                })
                .catch((e) => {
                    console.log(e)
                }))

    }, [])

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setFilterString}
                value={filterString}
                placeHolder ='search contact'
            />
            <ScrollableList data={contacts.filter((contact) => filterString.length == 0|| contact.givenName.includes(filterString))} property={'recordID'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});


export default ContactsManager;
