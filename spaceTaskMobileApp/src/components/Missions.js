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
import MissionCard from "./Cards";

const Missions = () => {
  const [missions, setMissions] = useState([]);

  function getData(data) {
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
      <ScrollableList data={missions.reverse()} property={'recordID'}>
        <MissionCard />
      </ScrollableList>
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
