import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Index({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.imageBanner}>
        <Image
        style={styles.image}
        source={{
          uri: 'https://res.cloudinary.com/fnxr/image/upload/v1661443579/accept-request_1_arzb1u.svg',
        }}
      />
        </View>
        <Text style={styles.header}><Text>Ways </Text>< Text style={styles.text1} >To</Text><Text style={styles.text2}>DO</Text></Text>
        <Text style={styles.middle}>Write your activity and finish your activity. Fast, Simple and Easy to Use</Text>
        <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.buttonLG}>
            <Text style={styles.textRL}  >Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
        style={styles.buttonRG}>
            <Text style={styles.textRL} >Register</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContet:'center',
        alignItems:'center'
    },
    image:{
        width:228,
        height:258,
    },
    imageBanner:{
        // justifyContet:'center',
        // alignItems:'center'
    },
    header:{
        // position:'absolute',
        // marginTop:280,
        // paddingTop:300,
        fontSize:35,
        textAlign:'center'
    },
    middle:{
        textAlign:'center',
        // border:'1px solid black',
        height:100,
        width:230,
        fontWeight:600,
        fontSize:12,
        marginTop:50,
        marginBottom:40
    },
    text1:{
        color:'#B82020'
    },
    text2:{
        color:'#FF5555'
    },textRL:{
        color:'white',
        fontSize:'16px',
        fontWeight:500
    },
    buttonRG:{
        backgroundColor:'rgba(0, 0, 0, 0.31)',
        width:310,
        height:40,
        padding:'10px',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'4px'
    },
    buttonLG:{
        backgroundColor:'rgba(255, 85, 85, 1)',
        width:310,
        height:40,
        marginBottom:30,
        padding:'10px',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'4px'
    }

})