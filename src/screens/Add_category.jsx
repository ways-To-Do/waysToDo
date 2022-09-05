import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect,useState } from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
const Tab = createBottomTabNavigator();

export default function Add_category({navigation}) {
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);



  var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
 


  const [form, setForm] = useState({
      name:'',
      color: ColorCode
  });


    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (name, value) => {
      setForm({
          ...form,
          [name]: value,
      });
  };

  //handle data to submit to konten base
  const handleOnPress = async ()=>{
    try {

      const token = await AsyncStorage.getItem('token');
      if (token === null){
        navigation.navigate("Login")
      }
      const config = {
        headers:{
          'Content-Type' :'application/json',
          // Authorization: 'Bearer' + token
        },
      }

      const body = JSON.stringify(form)
      setIsLoading(true)

      const response =await axios.post('https://api.kontenbase.com/query/api/v1/fbf9b4af-bf38-4f99-9815-a318d90a372a/CATEGORY',body,config);
      console.log(response)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }
  const getData =async()=>{
    try {
      const token =await AsyncStorage.getItem('token');
      if(token=== null){
        navigation.navigate('Login')
      };
      
      const config ={
        header : {
          'Content-Type':'application/json',
          // Authorization: 'Bearer' + token
        },
      };
      setDataLoading(true);

      const res =await axios.get('https://api.kontenbase.com/query/api/v1/fbf9b4af-bf38-4f99-9815-a318d90a372a/CATEGORY',config);
      setData(res.data)
      setDataLoading(false)

    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }
  useEffect(()=>{
    getData()
  },[data])
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>AddCategory</Text>
      <View >
      <TextInput
            placeholder='Name'
            style={styles.input1}
            onChangeText={(value) => handleOnChange('name', value)}
            value={form.name}
            />
        <TouchableOpacity
         style={styles.buttonRGB}
        onPress={handleOnPress}
         placeholder={'Add Category'}>
                   {
                        isLoading ? <Text style={styles.textRGB}>Add Category ...</Text> : <Text style={styles.textRGB}>Add Category</Text>
                    }
        </TouchableOpacity>
      </View>
      <Text style={styles.text2}>List Category</Text>
      {/* <SafeAreaView style={styles.wrap} > */}
        <FlatList
        style={styles.Input}
        numColumns={3}
        data={data}
        key={item=>item.index}
        renderItem={({item})=>(
          <text style={{backgroundColor:(item.color),height:20,borderRadius:5,margin:3,padding:3}}>
            {item.name}
          </text>
        )}
        refreshing={dataLoading}
        onRefresh={getData}
        />
      {/* </SafeAreaView> */}
    </View>
  )
}



const styles = StyleSheet.create({
  buttonRGB:{
    marginTop:40,
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
  input1: {
    height: 40,
    border:'1px solid rgba(0, 0, 0, 0.3)',
    // borderWidth: 1,
    fontSize:12,
    fontWeight:400,
    padding: 10,
    color:'black',
    marginBottom:20,
    width:310,
    height:40,
    backgroundColor:'rgba(0, 0, 0, 0.1)',
    borderRadius:5
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
    fontWeight:800,
  },
  textRGB:{
    color:'white',
  },wrap:{
    // display:'flex',
    // flexDirection:'row'
  },
  item:{
    backgroundColor:'rgba(255, 129, 129, 1)',
    margin:4,
    border:'none',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center  '
  },Input:{
    marginTop:2,
    marginRight:60,
  }
})

