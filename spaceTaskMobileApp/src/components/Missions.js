import React, {useState, useEffect} from 'react';
import netlifyRequest from '../utils/netlifyRequest';
import {
  PermissionsAndroid,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import ScrollableList from '../components/List';
import {MissionsRequestsEnum} from '../enums/missions.requests.enum';

const Missions = () => {
  const [missions, setMissions] = useState([]);

  function getData(data) {
    console.log(data);
    setMissions(data);
  }

  useEffect(() => {
    netlifyRequest(
      'mission',
      {
        type: MissionsRequestsEnum.GET_ALL_MISSIONS,
        payload: null,
      },
      getData,
    );
  }, []);

  return (
    <View>
      <ScrollableList data={missions} property={'recordID'} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Missions;
