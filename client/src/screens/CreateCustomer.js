// Importing components from react and react-native library.
import React ,{useState}from 'react'
import {View, Text, StyleSheet, TextInput,Button,TouchableOpacity} from 'react-native'
import axios from 'axios'

//CreateCustomer component
const CreateCustomer = ({navigation})=>{
   
    //defining states
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [errMsg, setErrMsg] = useState({})
    
    // make api call to add input data to DB
    const createCustomerAPI = ()=>{
        axios.post('http://192.168.1.218:8000/api/customer',{
            firstName,
            lastName,
            email
        }).then((res)=>{
            console.log(res.data)
            //reset states after user submission
            setFirstName('')
            setLastName('')
            setEmail('')
            setErrMsg({})
        })
        .catch( (err)=> {
            setErrMsg(err.response.data.errors)
        })
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput 
                    style={styles.input} 
                    value={firstName} 
                    placeholder="First Name" 
                    onChangeText={text=>setFirstName(text)}
                />
                {/* error handling */}
                {
                    errMsg && errMsg.firstName && <Text style={styles.error}>{errMsg.firstName.message}</Text>
                }
                
                <TextInput 
                    style={styles.input} 
                    value={lastName} 
                    placeholder="Last Name"
                    onChangeText={text=>setLastName(text)} 
                />
                {/* error handling */}
                {
                    errMsg && errMsg.lastName && <Text style={styles.error}>{errMsg.lastName.message}</Text>
                }
          
                <TextInput 
                    style={styles.input} 
                    value={email} 
                    placeholder="E-mail"
                    onChangeText={text=>setEmail(text)} 
 
                />
                {/* error handling */}
                {
                    errMsg && errMsg.email && <Text style={styles.error}>{errMsg.email.message}</Text>
                }

                <Button title="Add Customer"   onPress={()=>createCustomerAPI()}/>
            </View>

            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      wrapper: {
        width: '80%',
      },
      input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
      },
      error:{
          color:'red'
      }
})


export default CreateCustomer