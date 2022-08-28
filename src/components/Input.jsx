import { StyleSheet, Text, View,TextInput,SafeAreaView } from 'react-native'
import React from 'react'

export default function input({nameIP}) {
  return (
    <SafeAreaView>
    <TextInput
    placeholder={nameIP}
    style={styles.input}
    />

  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    border:'1px solid rgba(0, 0, 0, 0.3)',
    borderWidth: 1,
    padding: 10,
    color:'black',
    width:310,
    height:40,
    backgroundColor:'rgba(0, 0, 0, 0.1)',
    borderRadius:5
  }
})