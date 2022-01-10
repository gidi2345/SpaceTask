import React , {useState, useEffect} from 'react';
import {StatusBar, StyleSheet, View, Text} from 'react-native';

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

const  MissionCard = ({title, description, timeToComplete, locations}) => {

    return (
        <GeneralCard>
           <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>{timeToComplete}</Text>
            <Text>dsfsdf</Text>
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

        elevation: 5,
        borderRadius: '10%'
    }
});

export default MissionCard;
