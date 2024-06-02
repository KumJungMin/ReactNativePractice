// Button과 Pressable의 차이
// Button은 onPress 이벤트 핸들러를 받아서 버튼을 누르면 이벤트 핸들러가 실행된다.
// Pressable은 onPress 이벤트 핸들러를 받아서 버튼을 누르고 떼는 순간, 누르고 있는 동안, 누르고 떼는 순간에 각각 이벤트 핸들러가 실행된다.
import {
  Pressable,
  StyleSheet,
  Text,
  PressableProps,
  Dimensions,
} from 'react-native';
import React from 'react';

import {colors} from '../constants/colors';

interface LButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'medium' | 'large';
  disabled?: boolean;
}

// Dimensions.get('window'), Dimensions.get('screen')의 차이(안드로이드만 해당)
// get('window')는 화면의 크기를 반환한다.
// get('screen')은 디바이스의 크기를 반환한다.
const deviceHeight = Dimensions.get('screen').height;

export default function LButton(props: LButtonProps) {
  const {
    label = '버튼',
    variant = 'filled',
    size = 'large',
    disabled = false,
    ...rest
  } = props;
  return (
    <Pressable
      style={[
        styles[variant],
        styles.container,
        styles[size],
        disabled && styles.disabled,
      ]}
      disabled={disabled}
      {...rest}>
      <Text style={[styles.text, styles[`${variant}Text`]]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  filled: {
    backgroundColor: colors.PINK_Primary,
    padding: 10,
  },
  outlined: {
    borderColor: colors.PINK_Primary,
    borderWidth: 1,
    padding: 10,
  },
  large: {
    width: '100%',
    // deviceHeight로, 화면 사이즈별 버튼 크기 조절 대응
    paddingVertical: deviceHeight > 700 ? 15 : 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  medium: {
    width: '50%',
    paddingVertical: deviceHeight > 700 ? 12 : 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 700,
  },
  filledText: {
    color: colors.WHITE,
  },
  outlinedText: {
    color: '#C4C4C4',
  },
});
