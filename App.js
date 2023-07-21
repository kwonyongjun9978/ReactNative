import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

const {width:SCREEN_WIDTH} = Dimensions.get("window"); //Dimensions : 해당 핸드폰의 screen size를 알수 있는 API

console.log(SCREEN_WIDTH);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
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

