import { Text,SafeAreaView, StyleSheet,Image, View,TextInput,TouchableOpacity } from 'react-native'
import React, { useState }  from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Login({navigation}) {
  const [form,setForm] = useState({
    email:'',
    password:'',
  })

  const handleOnChange=(item,value)=>{
    setForm({
      ...form,
      [item]:value,
    })
  }

  const handleLogin = async()=>{
    try {
      const config={
        headers:{
          'content-type':'application/json'
        },
      }
      const body = JSON.stringify(form)

      const response = await axios.post('https://api.kontenbase.com/query/api/v1/fbf9b4af-bf38-4f99-9815-a318d90a372a/auth/login',body,config)
    console.log(response)

    if(response){
      await AsyncStorage.setItem('token',response.data.token)
    }

    const value = await AsyncStorage.getItem('token');
    if(value){
      navigation.navigate("Tabs")
    }
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <View style={styles.container}>
        <View style={styles.imageBanner}>
        <Image
        style={styles.image}
        source={{
          uri: 'https://res.cloudinary.com/fnxr/image/upload/v1661443579/Login_Icon_vsspaf.svg',
        }}
      />
        </View>
        <Text style={styles.textRG}>LOGIN</Text>
        <SafeAreaView>
          <TextInput
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(value)=>handleOnChange('email',value)}
          value={form.email}
          style={styles.input}
          />
          <TextInput
          placeholder="Password"
          onChangeText={(value)=>handleOnChange('password',value)}
          value={form.password}
          style={styles.input}
          />
        </SafeAreaView>
        <TouchableOpacity
        onPress={handleLogin}
        style={styles.buttonRG}>
            <Text style={styles.textRGB}  >Login</Text>
        </TouchableOpacity>
        <Text> New Users?
        <Text
        onPress={()=> navigation.navigate('Register')}
        style={styles.textLG}>Register
        </Text>
        </Text>
      </View>
    )
  }

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center'
  },
  // imageBanner:{
  //   width:400,
  //   height:300
  // },
  image:{
    marginTop:20,
    width:256,
    height:183
  },
  input: {
    height: 40,
    margin: 12,
    border:'1px solid rgba(0, 0, 0, 0.3)',
    borderWidth: 1,
    padding: 10,
    color:'black',
    width:310,
    height:40,
    backgroundColor:'rgba(0, 0, 0, 0.1)',
    borderRadius:5
  },
  textLG:{
    color:'#FF5555'
  },
  textRG:{
    marginVertical:20,
    width:350,
    fontSize:20,
    fontWeight:800,
    // border:'1px solid black'
  },
  buttonRG:{
    marginTop:70,
    backgroundColor:'#FF5555',
    width:310,
    height:40,
    margin:20,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'4px'
  },
  textRGB:{
    color:'white',
    fontSize:'16px',
    fontWeight:800
  },placeholder:{
    // fontColor:'rgba(153, 153, 153, 1)'
  }
})