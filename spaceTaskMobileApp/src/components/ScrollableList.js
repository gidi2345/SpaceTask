import React , {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';


const ScrollableList = ({data, property, children}) => {
  //const renderItem = ({item}) => {childrenWithProps(item)};

  const childrenWithProps = ({item}) => { return React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.

    if (React.isValidElement(child)) {
      return React.cloneElement(child, { item });
    }
    return <View key={ Number(item)}>{child}</View>;
  })};

  return (
    <View>
      <FlatList
        data={data}
        renderItem={childrenWithProps}
        keyExtractor={item => item[property]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    background: 'blue',
    backgroundColor: 'blue',

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
