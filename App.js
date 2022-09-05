import { StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,StackActions } from '@react-navigation/native';

// component
import Index from './src/screens/Index';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Tabs from './src/components/Tabs'
import Detail_list from './src/screens/Detail_list';
//bottom tab navigator
const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator  initialRouteName='Tabs'>
        {/* <Stack.Navigator> */}
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
          name="Tabs"
          component={Tabs}
          options={{headerShown:false}}/>

          <Stack.Screen
          name="Detail List"
          component={Detail_list}
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
