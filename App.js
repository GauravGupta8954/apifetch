import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationScreen } from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FinalNavigation } from './src/finalnavigation';
const Stack=createNativeStackNavigator();
export default function App() {
  
  return (
    <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='list' component={NavigationScreen} />
      <Stack.Screen name='Details' component={FinalNavigation} />
      </Stack.Navigator>  
      </NavigationContainer>
      </View>
  );
}


