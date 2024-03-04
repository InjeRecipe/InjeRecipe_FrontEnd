import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomStackParamList } from '../@types/screen';
import { MainScreen } from '../screens/main/MainScreen';
import { SearchScreen } from '../screens/search/SearchScreen';
import { InfoScreen } from '../screens/info/InfoScreen';
import { RefrigatorScreen } from '../screens/refrigator/RefrigatorScreen';
import Icon from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator<BottomStackParamList>();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
        initialRouteName="Main"
        screenOptions={{
            headerShown:false
        }}>
      <Tab.Screen name="Main" component={MainScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={'black'} />
          ),
        }}/>
      <Tab.Screen name="Search" component={SearchScreen} 
       options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="search" size={size} color={'black'} />
        ),
      }}
      />
      
      <Tab.Screen name="Refrigator" component={RefrigatorScreen} 
      options={{
       tabBarIcon: ({ color, size }) => (
        <Icon name="storefront" size={size} color={'black'} />
      ),
    }}/>
      
      <Tab.Screen name="Info" component={InfoScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="man" size={size} color={'black'} />
        ),
      }}/>
      
    </Tab.Navigator>
  );
}