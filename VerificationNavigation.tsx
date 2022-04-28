import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Verification from '@screens/Profile/Verification';
import UploadDocuments from '@screens/Profile/Verification/UploadDocument';
import UploadVideo from '@screens/Profile/Verification/UploadVideo';
import {VerificationOptions} from './config';

const Stack = createStackNavigator();

function VerificationNavigation() {
  return (
    <Stack.Navigator screenOptions={VerificationOptions}>
      <Stack.Screen name="VChooseDocuments" component={Verification} />
      <Stack.Screen name="UploadDocuments" component={UploadDocuments} />
      <Stack.Screen name="UploadVideo" component={UploadVideo} />
    </Stack.Navigator>
  );
}

export default VerificationNavigation;
