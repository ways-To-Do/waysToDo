import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Input from '../components/Input'
import { TextInput } from 'react-native-web'
const Add_list = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1} >Add List</Text>
       <TextInput
            placeholder='Name'
            style={styles.input1}
            />
           <TextInput
            placeholder='category'
            style={styles.input1}
            />
            <TextInput
            placeholder='choose date'
            style={styles.input1}
            />
            <TextInput
            placeholder='Description'
            style={styles.input2}
            />
    <TouchableOpacity
    style={styles.buttonRG}>
        <Text style={styles.textRGB}  >Add List</Text>
    </TouchableOpacity>
</View>
  )
}

export default Add_list

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    buttonRG:{
        backgroundColor:'#FF5555',
        width:310,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'4px'
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
      input2: {
        border:'1px solid rgba(0, 0, 0, 0.3)',
        fontSize:12,
        fontWeight:400,
        paddingBottom:200,
        padding: 10,
        width:310,
        height:200,
        backgroundColor:'rgba(0, 0, 0, 0.1)',
        marginBottom:50,
        borderRadius:5,
        color:'black',
        justifyContent:'center',
        alignItems:'center'
       
      },
    text1:{
    marginTop:20,
    marginBottom:20,
    marginRight:150,
    fontSize:25,
    fontWeight:800
  }
})