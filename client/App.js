
import React, {useState} from 'react'
import Navigation from './src/components/Navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()


export default function App() {
  return (
    <Navigation />
  );
}


