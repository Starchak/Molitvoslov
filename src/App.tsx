import 'react-native-gesture-handler';
import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import * as RNLocalize from 'react-native-localize';
import {setI18nConfig} from './config/translate';

import InitialScreen from './screens/InitialScreen';
import PraysScreen from './screens/PraysScreen';
import PrayScreen from './screens/PrayScreen';
import {navigationRef} from './config/nav';

const Stack = createStackNavigator();

type Props = {};
type State = {};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => SplashScreen.hide(), 500);
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  handleLocalizationChange = (setLang?: string) => {
    setI18nConfig(setLang);
    this.forceUpdate();
  };

  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName="Initial"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Initial"
            component={InitialScreen}
            initialParams={{
              handleLocalizationChange: this.handleLocalizationChange,
            }}
          />
          <Stack.Screen
            name="Prays"
            component={PraysScreen}
            initialParams={{
              handleLocalizationChange: this.handleLocalizationChange,
            }}
          />
          <Stack.Screen
            name="Pray"
            component={PrayScreen}
            initialParams={{
              handleLocalizationChange: this.handleLocalizationChange,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
