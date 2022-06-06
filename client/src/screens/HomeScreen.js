// Importing components from react and react-native library.
import axios from 'axios';
import React, { useState, useEffect} from 'react';
import {View,StyleSheet,ScrollView} from 'react-native';
import { useIsFocused } from '@react-navigation/native';

// Importing functional components 
import Customer from '../components/Customer'


//HomeScreen component
const HomeScreen = (props)=>{
  const isFocused = useIsFocused();
  const [customers, setCustomers] = useState([])

  //make api call to obtain all the customers stored in DB
  useEffect(()=>{
    if(isFocused){
      axios.get('http://192.168.1.218:8000/api/customer')
      .then(res=>{
        setCustomers(res.data)
      })
      .catch(error=>{
        console.log("error from homescreen",error)
      })
    }
  },[isFocused])


  //define a remove function to to pass as "props" to each component
  const removeFromDom = (customerId)=>{
    setCustomers(customers.filter( customer=>customer._id != customerId ))
  }

  return(
      <View style={styles.container}>
        <ScrollView >
          {
            customers.map((customer, index)=>(
              <View key={index} >
                <Customer   customerInfo={customer} removeFromDom={removeFromDom}  navigation={props.navigation} />
              </View>
          ))}
        </ScrollView>
      </View>
      
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop:35,
  }
})
export default HomeScreen;