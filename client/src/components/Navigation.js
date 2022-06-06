// Importing components from react and react-native library.
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importing functional components 
import HomeScreen from '../screens/HomeScreen'
import CreateCustomer from '../screens/CreateCustomer';
import CustomerDetail from '../components/CustomerDetail';
import CustomerEdit from '../components/CustomerEdit'

//Depending on whether stack or tab view is prefered
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

//The app's main navigation page and routing to associated components
const Navigation =()=>{

    const hideTabBar = () => {
        navigation.setOptions({
          tabBarStyle: { display: 'none' },
        });
      };


    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}} /> 
                <Tab.Screen name="Create Customer" component={CreateCustomer} options={{headerShown:false}} />
                <Tab.Screen name="Customer Detail" component={CustomerDetail} options={{headerShown:false}} />
                <Tab.Screen name="Customer Edit" component={CustomerEdit} options={{headerShown:false}} />
            </Tab.Navigator>
   
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    tabBarStyle: { 
        display: 'none',
        // backgroundColor:'red' 
    },
  })

export default Navigation