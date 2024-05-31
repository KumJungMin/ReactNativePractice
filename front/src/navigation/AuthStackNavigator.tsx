import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthHomeScreen from '../screens/AuthHomeScreen';
import LoginScreen from '../screens/LoginScreen';

export default function AuthStackNavigator() {
  const Stack = createStackNavigator();

  // Stack
  // : stack은 화면을 쌓아놓는 것을 의미한다.
  // : 즉, 화면을 이동할 때 이전 화면을 유지하고 다음 화면을 보여주는 것을 의미한다.
  return (
    <Stack.Navigator>
      <Stack.Screen name="AuthHome" component={AuthHomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
