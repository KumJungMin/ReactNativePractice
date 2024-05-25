import React, { useState, useEffect } from "react";

// ActivityIndicator는 로딩중일 때 보여주는 컴포넌트
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";

const API_KEY = "784ab24ff2ed5d94d4288abed9e25d13";
const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    await askPermission();
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });

    await getCity({ latitude, longitude });
    getDays({ latitude, longitude });
  };

  const askPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync({
      accuracy: 5,
    });
    if (status !== "granted") {
      throw new Error("Permission to access location was denied");
    }
  };

  const getCity = async ({ latitude, longitude }) => {
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
  };
  const getDays = async ({ latitude, longitude }) => {
    console.log("getDays", latitude, longitude);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setDays(json.daily);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      {/* TIP: ScrollView 스타일은 style아 이난 contentContainerStyle로 지정해야함*/}
      {/* pagingEnabled: 스크롤을 한 페이지씩 이동하게 해줌 */}
      {/* showsHorizontalScrollIndicator: 스크롤바를 보여줄지 말지 결정 */}
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator
              color="white"
              style={{ marginTop: 10 }}
              size="large"
            />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.day}>
              <Text style={styles.temp}>
                {parseFloat(day.temp.day).toFixed(1)}
              </Text>
              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
  tinyText: {
    fontSize: 20,
  },
});
