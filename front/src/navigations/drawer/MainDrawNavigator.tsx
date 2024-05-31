import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHomeScreen from '../../screens/MapHomeScreen';

function MainDrawNavigator() {
  const Drawer = createDrawerNavigator();

  // Drawer: 좌측에서 우측으로 슬라이드되는 메뉴를 제공하는 네비게이터
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}

export default MainDrawNavigator;
