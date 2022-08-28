import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import List_todo from '../screens/Lists_todo';
import Add_category from '../screens/Add_category';
import Add_list from '../screens/Add_list';
const Tab = createBottomTabNavigator();

export default function MyTab() {
  return (
    <Tab.Navigator style={styles.container}
    tabBarOptions={{
      showLabel: false,
      style:{
        position:'absolute',
        bottom:25,
        left:20,
        right:20,
        elevation:0,
        backgroundColor:'white',
        borderRadius:15,
        height:90
      }
    }}
    >
        <Tab.Screen 
        name="List-Todo" 
        component={List_todo}
        options={{headerShown:false}}
        />
        <Tab.Screen 
        name="Add_category" 
        component={Add_category}
        options={{headerShown:false}}
        />
        <Tab.Screen 
        name="Add_list" 
        component={Add_list}
        options={{headerShown:false}}
        />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
})