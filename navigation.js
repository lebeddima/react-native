import * as React from 'react';
import { Platform, UIManager, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import { DarkTheme, LightTheme } from '../constants/themes';

const Stack = createNativeStackNavigator();

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

/**
 * Tha navigation of app
 * @returns {JSX.Element}
 */
const Routes = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name='RegisterScreen'
          component={RegisterScreen}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
