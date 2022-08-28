import { Text,SafeAreaView, StyleSheet,Image, View,TextInput,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

const handleLogin =()=>{
  alert('login success')
}

export default function Login({navigation}) {
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
          style={styles.input}
          />
          <TextInput
          placeholder="Password"
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
    fontWeight:500
  },placeholder:{
    // fontColor:'rgba(153, 153, 153, 1)'
  }
})