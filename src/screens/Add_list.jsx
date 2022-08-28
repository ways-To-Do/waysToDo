import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Input from '../components/Input'
const Add_list = () => {
  return (
    <View style={styles.container}>
    <Input/>
    <TouchableOpacity
    // onPress={handleRegister}
    style={styles.buttonRG}>
        <Text style={styles.textRGB}  >Register</Text>
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
        marginTop:70,
        backgroundColor:'#FF5555',
        width:310,
        height:40,
        margin:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'4px'}
})