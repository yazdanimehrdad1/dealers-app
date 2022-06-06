// Importing components from react and react-native library.
import React, {useState, useEffect} from 'react';
import {Text, View, headerShown,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'


const CustomerDetail =(props)=>{
    const navigation = useNavigation();
    const customerInfo = props.route.params.data
    console.log("propsInsideDetail",customerInfo)
    
    const [customer, setCustomer] = useState({})

    // make api call to get the customer's data and update the state upon the component is mounted
    useEffect(()=>{

        axios.get('http://192.168.1.218:8000/api/customer/'+customerInfo)
        .then(res=>{
            console.log("***IndividualCustomerFromAPICall",res.data)
            setCustomer({...res.data})
        })
        .catch(error=>{
            console.log(error)
        })
        
    },[customerInfo])
    

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Customer Information</Text>
            <Text style={styles.text}>{customer._id}</Text>
            <View style={styles.field}>
                <Text style={styles.fieldInput}>First Name</Text><Text style={styles.field}>{customer.firstName}</Text>
            </View>
            
            <View style={styles.field}>
                <Text style={styles.fieldInput}>Last Name Name</Text><Text style={styles.field}>{customer.lastName}</Text>
            </View>
            
            <View style={styles.field}>
                <Text style={styles.fieldInput}>E-mail</Text><Text style={styles.field}>{customer.email}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
      padding:40,
      paddingTop:100,
    },
    field:{
        padding:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    fieldInput:{
        fontWeight:'bold'
    },
    text:{
        maxWidth:'80%',
        fontWeight:'bold',
        paddingBottom:50
    }
  
  })
export default CustomerDetail