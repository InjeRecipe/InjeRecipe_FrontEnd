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

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import store from './src/redux/store';
import RootStackNavigation from './src/navigations/RootStackNavigation';

function App(){
 
  return (
    <SafeAreaProvider>
      <Provider store={store}>
    <NavigationContainer>
      
      <RootStackNavigation/>
      
    </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
