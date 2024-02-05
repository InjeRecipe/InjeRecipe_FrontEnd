import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomStackParamList } from '../@types/screen';
import { MainScreen } from '../screens/main/MainScreen';
import { SearchScreen } from '../screens/search/SearchScreen';
import { InfoScreen } from '../screens/info/InfoScreen';
import { RefrigatorScreen } from '../screens/refrigator/RefrigatorScreen';

const Tab = createBottomTabNavigator<BottomStackParamList>();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
        initialRouteName="Main"
        screenOptions={{
            headerShown:false
        }}>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Refrigator" component={RefrigatorScreen} />
      <Tab.Screen name="Info" component={InfoScreen} />
      
    </Tab.Navigator>
  );
}