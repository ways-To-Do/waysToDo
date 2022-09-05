import { StyleSheet, Text, View,Image,FlatList, SafeAreaView, TouchableOpacity, } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import Register from './Register';
import Category from '../components/dropdown/Category';
import Status from '../components/dropdown/Status';
import { TextInput } from 'react-native-web';



export default function List_todo({navigation}) {
  const DATA=[
    {
    title: 'Study-Golang',
    describe :'Learn Golang to improve fundamentals and familiarize with coding.',
    category :'Study',
    date:'19 July 2022',
    status:'unactived'
    },
    {
    title: 'Home Work - Mathematics',
    describe :'Do homework math probability',
    category :'Home Work',
    date:'19 July 2022',
    status:'active'
    },
    {
      title: 'Study-HTML',
      describe :'Learn HTML to improve fundamentals and familiarize with coding.',
      category :'Study',
      date:'19 July 2022',
      status:'active'
      },
      {
      title: 'Study-JAVASCRIPT',
      describe :'Learn javascript to improve fundamentals and familiarize with coding.',
      category :'Study',
      date:'19 July 2022',
      status:'unactived'
      },
  ]

  return (
    <View >
      <View style={styles.profile}>
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
      <View style={styles.container}>
        {/* <Input placeHolder='ok'/> */}
        {/* <SafeAreaView> */}
            <TextInput
            placeholder='search List . . .'
            style={styles.input}
            />
        {/* </SafeAreaView> */}
        <View style={styles.dropdown}>
        <TextInput
            placeholder='choose date'
            style={styles.input1}
            />
          <Category/>
          <Status/>
        </View>
      </View>
    <SafeAreaView style={styles.wrap1}>
    <FlatList
        data={DATA}
        key={item => item.index}
        renderItem={({item}) =>(
          <TouchableOpacity style={styles.wrap}
          onPress={()=> navigation.navigate("Detail List")}>
            <View>
            <Text  style={styles.title}>{item.title}</Text>
            <Text  style={styles.desc}>{item.describe}</Text>
            <Text  style={styles.date}>{item.date}</Text>
            </View>
            <View style={styles.wrap2}>
            <Text  style={styles.category}>{item.category}</Text>
            {/* <Text  style={styles.s}>{item.status}</Text> */}
            </View>
          </TouchableOpacity>
        ) }
        />
        
      </SafeAreaView>
    
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center'
  },
  profile:{
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
  },
  dropdown:{
    display:'flex',
    flexDirection:'row',
  },
  wrap:{
    boxSizing:'border-box',
    display:'flex',
    width:310,
    height:100,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:8,
    backgroundColor:'rgba(218, 239, 255, 1)',
    borderRadius:5,
    margin:10
  },
  title:{
    color:'rgba(0, 0, 0, 1)',
    fontSize:12,
    fontWeight:800
  },
  desc:{
    color:'rgba(155, 155, 155, 1)',
    width:230,
    fontSize:10,
    fontWeight:400,
    marginTop:10
  },
  date:{
    color:'rgba(155, 155, 155, 1)',
    fontSize:8,
    fontWeight:400,
    marginTop:23
  },
  category:{
    color:'white',
    backgroundColor:'rgba(129, 200, 255, 1)',
    borderRadius:5,
    padding:3,
    fontSize:8,
    fontWeight:400
  },
  wrap1:{
    justifyContent:'center',
    alignItems:'center'
  },
  wrap2:{
    //  position:'absolute',
    // zIndex:-1,
    // display:'flex',
    // flexDirection:'collumn',
    // justifyContent:'flex-start',
    // alignItems:'flex-end'
  },
  input: {
    height: 40,
    border:'1px solid rgba(0, 0, 0, 0.3)',
    fontSize:12,
    fontWeight:400,
    padding: 10,
    color:'black',
    width:310,
    height:40,
    backgroundColor:'rgba(0, 0, 0, 0.1)',
    borderRadius:5
  },
  input1: {
    border:'1px solid rgba(0, 0, 0, 0.3)',
    fontSize:12,
    fontWeight:400,
    padding: 10,
    color:'black',
    marginBottom:20,
    width:100,
    height:48,
    backgroundColor:'rgba(0, 0, 0, 0.1)',
    borderRadius:10
  }
})