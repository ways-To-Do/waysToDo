import { Text,StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Detail_list extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profil}>
          <View>
            <Text>Study-Golang</Text>
          </View>
          <View>
            <Text>Study</Text>
            <Text style={styles.image}></Text>

          </View>
        </View>
        <Text>
        Learn Golang to improve fundamentals and familiarize with coding.
        Advantages of Go
        Go has advantages over other languages, including:

        Supports concurrency at the language level with fairly easy application
        Supports data processing with multiple processors at the same time (parallel processing)
        Have a garbage collector
        The compilation process is very fast
        It's not a hierarchical programming language and it's not strict OOP, giving developers the freedom to how to write code. 
        Listing Material :

        1.Installation
        2.Setup Go Modules
        3.Setup Gopath and Workspace
        4.Go Command
        5.Hello World
        6.Variable
        7.Tipe DataKonstanta
        8.Operator
        9.Condition
        10.Loops
        </Text>
        <Text>19 july 2022</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'rgba(218, 239, 255, 1)',
    padding:20,
    margin:10,
    borderRadius:10,
  },
  profil:{
    padding:40,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  image:{
    backgroundColor:'rgba(217, 217, 217, 1)',
    width:30,
    height:30,
    borderRadius:"50%"
  
  }
})