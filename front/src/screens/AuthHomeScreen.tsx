import {Button, View} from 'react-native';
import React from 'react';

// reactNative의 화면(screen) 컴포넌트에는 props로 navigation이 전달된다.
export default function AuthHomeScreen({navigation: {navigate}}) {
  return (
    <View>
      <Button title="로그인화면으로 이동" onPress={() => navigate('Login')} />
    </View>
  );
}
