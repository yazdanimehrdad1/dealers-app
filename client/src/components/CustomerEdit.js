import axios from 'axios';
import React, {useContext, useState, useEffect} from 'react';
import {Text, View, headerShown,StyleSheet,TextInput, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const CustomerDetail =(props)=>{
    const customerId = props.route.params.data
    console.log("customerInfoInCustomerDetail",customerId)
    const{navigation}= props

    // console.log("CustomerEdit page",props.route.params.data)
    
    const [firstName, setFirstName] = useState(customerInfo.firstName)
    const [lastName, setLastName] = useState(customerInfo.lastName)
    const [email, setEmail] = useState(customerInfo.email)

    useEffect(()=>{

        axios.get('http://192.168.1.218:8000/api/customer/'+customerId)
        .then(res=>{
            console.log("***IndividualCustomerFromAPICall",res.data)
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
            setEmail(res.data.email)
        })
        .catch(error=>{
            console.log(error)
        })
        
    },[customerInfo])


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
                    // style={styles.input}
                    // placeholder= {firstName}
                    value={firstName} 
                    onChangeText={text=>setFirstName(text)}
                />
            </View>


            <View style={styles.field}>
                <Text style={styles.fieldInput}>Last Name</Text>
                <TextInput 
                    // style={styles.input}
                    // placeholder= {firstName}
                    value={lastName} 
                    onChangeText={text=>setLastName(text)}
                />
            </View>
            
         
            
            <View style={styles.field}>
                <Text style={styles.fieldInput}>E-mail</Text>
                <TextInput 
                    // style={styles.input} 
                    value={email} 
                    onChangeText={text=>setEmail(text)}
                />
            </View>

            <Button title="Update Customer"   onPress={()=>updateHandler(customerInfo._id)}/>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container:{
      padding:40,
      paddingTop:100,
    //   alignItems: 'center',
      
    },
    field:{
        
        padding:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        // margin:10,
        // maxWidth:'100%'
    
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