import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default function App() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={{flex: 1, alignItems: "center", flexDirection: "row"}}>
      <Image style={{flex: 3, height: windowHeight/2, width: windowWidth, borderColor: "black", borderWidth: 3.5}} source={require('./assets/rover.jpg')}></Image>
      <Text style={{flex: 1, flexWrap: "wrap", color: "red", fontSize: 20}}>Le rover opportunity</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
