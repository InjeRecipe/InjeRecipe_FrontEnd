/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
 
} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
  
import { GoogleAuthButton } from './src/screens/home/signin/google/GoogleAuthButton';
import { LocationTestButton } from './src/Location/LocationTestButton';
import { HomeScreen } from './src/screens/home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigation from './src/navigations/RootStackNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeStackScreen from './src/navigations/HomeNavigator';

function App(){
 
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <RootStackNavigation/>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
