import 'react-native-gesture-handler';
import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import * as RNLocalize from 'react-native-localize';
import {setI18nConfig} from './config/translate';
import HomeScreen from './screens/HomeScreen';
import PraysScreen from './screens/PraysScreen';
import PrayScreen from './screens/PrayScreen';

const Stack = createStackNavigator();

type Props = {};
type State = {};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    setI18nConfig(); // set initial config
  }

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  handleLocalizationChange = (setLang: string) => {
    setI18nConfig(setLang);
    this.forceUpdate();
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{
              handleLocalizationChange: this.handleLocalizationChange,
            }}
          />
          <Stack.Screen name="Prays" component={PraysScreen} />
          <Stack.Screen name="Pray" component={PrayScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
