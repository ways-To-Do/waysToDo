import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Input from '../components/Input'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import MyTab from '../components/tabs'

const Tab = createBottomTabNavigator();
function MyTabs() {

}


export default function Add_category({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>AddCategory</Text>
      <View >
        <Input  nameIP={'Name'} />
        <TouchableOpacity
        style={styles.buttonRGB}>
            <Text style={styles.textRGB}  >Add Category</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text2}>List Category</Text>
    </View>
    
  )
}



const styles = StyleSheet.create({
  buttonRGB:{
    backgroundColor:'#FF5555',
    width:310,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'4px'
},
  container:{
    justifyContent:'center',
    alignItems:'center'
  },
  text1:{
    marginTop:20,
    marginBottom:20,
    marginRight:150,
    fontSize:25,
    fontWeight:800
  },
  text2:{
    marginTop:60,
    marginRight:150,
    fontSize:25,
    fontWeight:800
  }
})