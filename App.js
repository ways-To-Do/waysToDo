import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// component
import Index from './src/screens/Index';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Lists_todo from './src/screens/Lists_todo';
import Add_category from './src/screens/Add_category';
import MyTab from './src/components/tabs';
// import Add_list from './src/screens/Add_list';
// import Detail_list from './src/screens/Detail_list.jsx'
import Tabs from './src/components/Tabs'
//bottom tab navigator
const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer
      
      >
         <Stack.Navigator  initialRouteName='Lists_todo'>
           <Stack.Screen
          name="LandingPage"
          component={Index}
          options={{headerShown:false}}/>

          <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown:false}}/>

          <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown:false}}/>

          <Stack.Screen 
          name="Lists_todo" 
          component={MyTab}
          options={{headerShown:false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
