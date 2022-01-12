import React , {useState, useEffect} from 'react';
import {StatusBar, StyleSheet, View, Text, Button,TouchableHighlight, Linking} from 'react-native';

const Missions = [
    {
        uuid: 'uuid-test-1',
        title: 'חלוקת אוכל',
        description: 'מחלקים אוכל',
        timeToComplete: 32,
        locations:[{x:2, y:3}],
        locationsAsString:['dsd','sds']
    }
]

const GeneralCard = ({children}) => {

    return (
        <View style={styles.GeneralCardContainer}>
            {children}
        </View>
    )
}

const  MissionCard = ({item}) => {
    const {title, description, timeToComplete, locationString, performers } = {...item};
    return (
        <GeneralCard>
           <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>{timeToComplete}</Text>
            <Text>{locationString}</Text>
                <Button
                    onPress={() => {
                        console.log(performers[0]?.phoneNumbers[0]?.number);
                        Linking.openURL(
                            `whatsapp://send?text=${title}-${description}&phone=${performers[0]?.phoneNumbers[0]?.number}`,
                        )}}
                    title="open mission"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Text></Text>
        </GeneralCard>
    )
}

const styles = StyleSheet.create({
    GeneralCardContainer: {
        display: 'flex',
        flexDirection: 'column',
        shadowColor: "#000",
        fontSize: 32,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 10,
        margin: 5
    }
});

export default MissionCard;
