// 이 파일에는 페이지 첫 진입시, 실행할 로직을 작성.

import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainDrawNavigator from '../drawer/MainDrawNavigator';

function RootNavigator() {
  const isLoggedIn = false;

  return <>{isLoggedIn ? <MainDrawNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
