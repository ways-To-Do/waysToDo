import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import List_todo from '../screens/Lists_todo';
import Add_category from '../screens/Add_category';
import Add_list from '../screens/Add_list';
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function MyTab() {
  return (
    <Tab.Navigator
    screenOptions={({route})=>({
      headerShown:false,

      tabBarIcon:({focused})=>{
         
        let iconName;

        if(route.name == "List ToDo"){
          iconName = focused ? "bookmarks" : "bookmarks-outline"
      } else if(route.name == "Add Category"){
          iconName = focused ? "list-circle" : "list-circle-outline"
      } else if(route.name == "Add List"){
          iconName = focused ? "duplicate" : "duplicate-outline"
      }
      return <Ionicons name={iconName} size={20} color="red"/>
      },
      tabBarActiveTintColor: "red",
      tabBarInactiveTintColor: "grey"
    })
  }

    >
        <Tab.Screen 
        name="List ToDo" 
        component={List_todo}
        options={{headerShown:false}}
        />
        <Tab.Screen 
        name="Add Category" 
        component={Add_category}
        options={{headerShown:false}}
        />
        <Tab.Screen 
        name="Add List" 
        component={Add_list}
        options={{headerShown:false}}
        />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
})