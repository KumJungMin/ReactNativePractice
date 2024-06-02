import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthHomeScreen from '../../screens/auth/AuthHomeScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import SignupScreen from '../../screens/auth/SignupScreen';

import {authNavigation} from '../../constants';

export type AuthStackParamList = {
  [authNavigation.AUTH_HOME]: undefined;
  [authNavigation.LOGIN]: undefined;
  [authNavigation.SIGNUP]: undefined;
};

export default function AuthStackNavigator() {
  const Stack = createStackNavigator<AuthStackParamList>();

  // Stack
  // : stack은 화면을 쌓아놓는 것을 의미한다.
  // : 즉, 화면을 이동할 때 이전 화면을 유지하고 다음 화면을 보여주는 것을 의미한다.
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: 'gray',
        },
        headerTitleStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
        headerTintColor: 'black',
      }}>
      <Stack.Screen
        name={authNavigation.AUTH_HOME}
        component={AuthHomeScreen}
        options={{
          headerTitle: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={authNavigation.LOGIN}
        component={LoginScreen}
        options={{
          headerTitle: '로그인',
        }}
      />
      <Stack.Screen
        name={authNavigation.SIGNUP}
        component={SignupScreen}
        options={{
          headerTitle: '회원가입',
        }}
      />
    </Stack.Navigator>
  );
}
