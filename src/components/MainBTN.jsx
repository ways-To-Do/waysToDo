import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import React from 'react'


export default function MainBTN({nameBtn}) {

    const onPress=()=>{
        alert(`button ${nameBtn} success`)
    }
    
  return (
  <TouchableOpacity
  onPress={onPress}
  style={styles.button}  >
      <Text style={styles.text}   >{nameBtn}</Text>
  </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#FF5555',
        width:310,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'4px'
    },
    text9:{
        fontSize:16,
        color:'rgba(255, 255, 255, 1)',
        fontWeight:800,

    }
})