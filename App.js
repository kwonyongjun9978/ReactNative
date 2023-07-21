import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, flexDirection: 'row'}}>
    <View style={styles.container}>
      <Text style={styles.text}>어플을 만들어 볼까?</Text>
    </View>
    <View style={{flex:1, backgroundColor: 'tomato'}}></View>
    <View style={{flex:1, backgroundColor: 'orange'}}></View>
    <View style={{flex:1, backgroundColor: 'blue'}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    color: 'yellow',
  }
});
