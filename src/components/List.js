import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableHighlight, Linking } from 'react-native';


const Item = ({ title, item }) => (
    <View style={styles.item}>
        <Text>{item.givenName}</Text>
        <TouchableHighlight onPress={() => Linking.openURL(`whatsapp://send?text=hello&phone=${item.phoneNumbers[0]?.number}`)}>
            <Text style={styles.title}>{item.phoneNumbers[0]?.number}</Text>
        </TouchableHighlight>
    </View>
);

const ScrollableList = ({data, property}) => {
    const renderItem = ({ item }) => (
        <Item item={item} title={item[property]} />
    );

    return (
        <View >
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item[property]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        background: 'blue',
        backgroundColor: 'blue'
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

export default ScrollableList;
