// Importing components from react and react-native library.
import axios from 'axios'
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'

//Customer component
const Customer = (props)=>{
    //destructing props
    const {navigation} = props
    customerInfo = props.customerInfo
    // get customer's id
    const customerId=  customerInfo._id
    const {removeFromDom} = props;
    
    //api call to remove from DB
    const deleteHandler = (id)=>{
        console.log("id-in-delete",id)
        axios.delete('http://192.168.1.218:8000/api/customer/'+id)
        .then(res =>{
            removeFromDom(id)
            console.log(res.data)
        })
        .catch(error=>{
            console.log(error)
        })

    }

    //navigate to customer's detail component
    const detailHandler = (customerInfo)=>{
        navigation.navigate("Customer Detail", {data:customerInfo})
    }

    //navigate to edit component
    const editHandler = (customerInfo)=>{
        navigation.navigate("Customer Edit", {data:customerInfo , navigaction:navigation})
    }
    
    return (
        <View style={styles.tab}>
            <View style={styles.leftItem}>
                <TouchableOpacity 
                    style ={styles.squareSymbol}
                    onPress={()=>detailHandler(customerId) }
                >
                </TouchableOpacity>

                <Text 
                    style={styles.text}
                >
                    {`${customerInfo.firstName}- ${customerInfo.lastName}`}
                </Text>
            </View>
            
            <View style={styles.rightItem}>
                <Button 
                    onPress={()=>deleteHandler(customerId)}
                    title="Delete"
                    style={styles.individualItem}
                />

                <Button 
                    onPress={(e)=>editHandler(customerId)}
                    title="Edit"
                    style={styles.individualItem}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tab:{
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        margin:10,
        display:'flex',
        justifyContent: 'space-around'

    },
    leftItem:{
        alignItems:'flex-start',
        flexDirection: 'row',
        display:'flex',
        justifyContent: 'flex-start'
    },
    rightItem:{
        alignItems:'flex-end',
        flexDirection: 'row',
        display:'flex',
        justifyContent: 'space-around',
        marginLeft:'auto'
    },
    individualItem:{
        flexDirection: 'row',
    },
    squareSymbol:{
        width:24,
        height:24,
        backgroundColor:'blue',
        opacity:0.4,
        borderRadius:5,
        marginRight:20
    },
    circularSymbol:{
        width:24,
        height:24,
        borderColor:"red",
        borderWidth:2,
        borderRadius:20
    },
    text:{
        maxWidth:'80%',

    }

})

export default Customer