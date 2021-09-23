import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SpaceCraftScreen from './screens/SpaceCraft';
import dailyPicScreen from './screens/DailyPic';
import starMapScreen from './screens/StarMap';
export default function App() {
  return (
    <NavigationContainer>
  <Stack.Navigator  initialRouteName="Home" screenOptions={{
   headerShown:false
  }}>
    <Stack.Screen name="DailyPic" component={dailyPicScreen}/>
    <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen}/>
    <Stack.Screen name="StarMap" component={starMapScreen}/>
  </Stack.Navigator>

</NavigationContainer>
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
