import { View, Text, Image } from 'react-native';
import { Tabs, Redirect, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';


interface TabIconProps {
  color: string,
  name: string,
}

// SplashScreen.preventAutoHideAsync: 스플래시 화면을 숨기지 않도록 설정
SplashScreen.preventAutoHideAsync();

const TabIcon = ({ name, color }: TabIconProps) => {
  return (
    <View>
      <Text style={{ color }}>
        { name }
      </Text>
    </View>
  );
};

/** (tabs): 하단 네비게이션 탭 역할 */ 
const TabsLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "SpaceMono-Regular": require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // fontsLoaded: 폰트 로딩이 완료되면 true, 아니면 false
  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) {
      // SplashScreen.hideAsync: 스플래시 화면을 숨김
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <>
      <Tabs>
        <Tabs.Screen 
          name="home" 
          options={{ 
            title: '홈' ,
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon color={color} name='H' />
            )
          }} 
          />
      </Tabs>
    </>
  )
}

export default TabsLayout;