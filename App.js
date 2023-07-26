import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import * as Location from 'expo-location';

const {width:SCREEN_WIDTH} = Dimensions.get("window"); //Dimensions : 해당 핸드폰의 screen size를 알수 있는 API

console.log(SCREEN_WIDTH);

export default function App() {
  const [city, setCity] = useState("기달려봐...")
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const ask = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted){
      setOk(false);
    }
    const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
    const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps: false});
    setCity(location[0].city);
  };
  useEffect(() => {
    ask();
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
        <View style={styles.day}>
          <Text style={styles.temp}>34</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>34</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>34</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>34</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
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
})

