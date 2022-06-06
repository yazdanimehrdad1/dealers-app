// Importing components from react and react-native library.
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Text, View,StyleSheet,TextInput, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const CustomerDetail =(props)=>{
    //one of the improvement is to apply useContext instead of prop drilling
    const customerId = props.route.params.data
    const{navigation}= props

    
    const [firstName, setFirstName] = useState(customerInfo.firstName)
    const [lastName, setLastName] = useState(customerInfo.lastName)
    const [email, setEmail] = useState(customerInfo.email)

    //get individual customer when the component is mounted
    useEffect(()=>{
        axios.get('http://192.168.1.218:8000/api/customer/'+customerId)
        .then(res=>{
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
            setEmail(res.data.email)
        })
        .catch(error=>{
            console.log(error)
        })
        
    },[customerInfo])

    // make api call to update the customer's information based on the stored data in state
    // It is prefered to define a same component to create and update so it can advantage the 
    // error handling and other common sections
    const updateHandler = (id)=>{
        axios.put('http://192.168.1.218:8000/api/customer/'+id,{
            firstName,
            lastName,
            email
        }).then( res=>{
            console.log("res.data after updatedf",res.data)
            navigation.navigate("Home")


        }).catch((error)=>{
            console.log(error)
        })
    }


    return(
        <View style={styles.container}>
            <Text style={styles.text}>Update Customer Information</Text>
            
            <View style={styles.field}>
                <Text style={styles.fieldInput}>First Name</Text>
                <TextInput 
                    value={firstName} 
                    onChangeText={text=>setFirstName(text)}
                />
            </View>


            <View style={styles.field}>
                <Text style={styles.fieldInput}>Last Name</Text>
                <TextInput 
                    value={lastName} 
                    onChangeText={text=>setLastName(text)}
                />
            </View>
            
         
            
            <View style={styles.field}>
                <Text style={styles.fieldInput}>E-mail</Text>
                <TextInput 
                    value={email} 
                    onChangeText={text=>setEmail(text)}
                />
            </View>

            <Button title="Update Customer"   onPress={()=>updateHandler(customerInfo._id)}/>
        </View>
        
    )
}

//styling
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