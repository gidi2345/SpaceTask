import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  useWindowDimensions,
} from 'react-native';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import {TabView, SceneMap} from 'react-native-tab-view';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ContactsManager from './src/components/Contacts';
import MissionCard from './src/components/Cards';
import MissionCreationForm from './src/components/MissionCreationForm';
import Missions from './src/components/Missions';
import MainPage from "./src/pages/MainPage";
import useRequest from '../spaceTaskMobileApp/src/hooks/useRequest.hook';
import AddressesManagePage from './src/pages/AdressesManagePage';

const FirstRoute = () => (
  <View style={{flex: 1, backgroundColor: '#ff4081'}}>
    <Missions />
  </View>
);

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}}>
    <ContactsManager />

  </View>
);

const ThirdRoute = () => (
  <View style={{flex: 1, backgroundColor: 'white'}}>
    <MissionCreationForm />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Missions'},
    {key: 'second', title: 'Contacts'},
    {key: 'third', title: 'Create'},
  ]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


 /* const [data, error] = useRequest('https://angry-stonebraker-21425c.netlify.app/.netlify/functions/addresses', {
    type: 'ADD_ADDRESS',
    payload: { address: 'gan yavne'}
  })*/

  return (
      <RecoilRoot>
    {/*<TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />*/}
       {/* <MainPage />*/}
        <AddressesManagePage />
      </RecoilRoot>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
