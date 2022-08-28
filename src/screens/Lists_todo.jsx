import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import Register from './Register';



export default function List_todo({navigation}) {
  return (
    <View style={styles.container}>
    <View>
      <Text style={styles.name}>Fandi</Text>
      <Text style={styles.list}>200 list</Text>
    </View>
    <Image
      style={styles.image}
      source={{
        uri: 'https://res.cloudinary.com/fnxr/image/upload/v1661501145/14930_gcusi5.jpg',
      }}
    />
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:40,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  image:{
    width:50,
    height:50,
    borderRadius:'50%'
  },
  name:{
    color:'black',
    fontSize:25,
    fontWeight:900
  },
  list:{
    color:'rgba(255, 85, 85, 1)',
    fontSize:12,
    fontWeight:400
  }
})