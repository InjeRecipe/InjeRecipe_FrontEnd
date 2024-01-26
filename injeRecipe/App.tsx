/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
 
} from 'react-native';

import { GoogleAuthButton } from './src/screens/signin/google/GoogleAuthButton';
import { LocationTestButton } from './src/Location/LocationTestButton';
import { HomeScreen } from './src/screens/home/HomeScreen';

function App(){

 
  return (
    <>
      <HomeScreen/>
      </>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
