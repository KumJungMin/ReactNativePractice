import {SafeAreaView, View, Image, StyleSheet, Dimensions} from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          // resizeMode은 이미지의 크기를 조절하는 속성이다.
          // contain은 이미지의 비율을 유지하면서 이미지 전체가 보이도록 한다.
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/logo.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <LButton
          label="로그인화면으로 이동"
          onPress={() => navigate(authNavigation.LOGIN)}
        />
        <LButton
          label="회원가입화면으로 이동"
          variant="outlined"
          onPress={() => navigate(authNavigation.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1.5,
    width: Dimensions.get('screen').width / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
  },
});
