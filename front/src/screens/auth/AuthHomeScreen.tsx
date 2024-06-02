import {SafeAreaView} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import LButton from '../../components/LButton';
import {AuthStackParamList} from '../../navigations/stack/AuthStackNavigator';
import {authNavigation} from '../../constants';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigation.AUTH_HOME // 혹은 'AuthHome'
>;

// reactNative의 화면(screen) 컴포넌트에는 props로 navigation이 전달된다.
export default function AuthHomeScreen({
  navigation: {navigate},
}: AuthHomeScreenProps) {
  return (
    <SafeAreaView>
      <LButton
        label="로그인화면으로 이동"
        onPress={() => navigate(authNavigation.LOGIN)}
      />
      <LButton
        label="회원가입화면으로 이동"
        onPress={() => navigate(authNavigation.SIGNUP)}
      />
    </SafeAreaView>
  );
}
