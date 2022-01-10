import React, {useState, useEffect} from 'react';
import netlifyRequest from '../utils/netlifyRequest';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import {MissionsRequestsEnum} from "../enums/missions.requests.enum";

const MissionCreationForm = ({
  title,
  description,
  timeToComplete,
  locations,
}) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    timeToComplete: 0,
    locationString: '',
  });

  function sendFormRequest() {
    netlifyRequest('mission', {type: MissionsRequestsEnum.CREATE_MISSIONS, payload: form});
  }

  return (
    <View style={styles.GeneralCardContainer}>
      <Text>Create Mission</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setForm({...form, title: text})}
        value={form.title}
        placeHolder="cool title"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setForm({...form, description: text})}
        value={form.description}
        placeHolder="cool title"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setForm({...form, locationString: text})}
        value={form.locationString}
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
