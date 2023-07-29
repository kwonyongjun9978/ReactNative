import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

const {width:SCREEN_WIDTH} = Dimensions.get("window"); //Dimensions : 해당 핸드폰의 screen size를 알수 있는 API

const API_KEY = "479d5a1d6b5d6986971735a3e467c126";

export default function App() {
  const [city, setCity] = useState("기달려봐...")
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted){
      setOk(false);
    }
    const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
    const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps: false});
    setCity(location[0].city);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    const json = await response.json();
    console.log(json.list.filter)
    setDays(
      json.list.filter((weather) => {
      if (weather.dt_txt.includes("00:00:00")) {
      return weather;
      }
      })
    );
  };
  useEffect(() => {
    getWeather();
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView 
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator="false" 
      contentContainerStyle={styles.weather}>
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator color='white' size='large' style={{marginTop:10}}/>
          </View>
        ) : (
          days.map((day, index) => 
          <View key={index} style={styles.day}>
            <Text style={styles.temp}>{parseFloat(day.main.temp).toFixed(1)}</Text>
            <Text style={styles.description}>{day.weather[0].main}</Text>
            <Text style={styles.tinyText}>{day.weather[0].description}</Text>
          </View>
          )
        )}
      </ScrollView>  
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor: 'hotpink',
  },
  city:{
    flex:1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName:{
    fontSize: 68,
    fontWeight: '600',
  },
  weather:{
    
  },
  day:{
    width: SCREEN_WIDTH,
    alignItems:'center',
  },
  temp:{
    marginTop: 50,
    fontSize: 178,
  },
  description:{
    marginTop: -30,
    fontSize: 60,
  },
  tinyText: {
    fontSize: 20,

  }
})

