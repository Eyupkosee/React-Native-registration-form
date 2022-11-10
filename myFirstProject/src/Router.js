import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './pages/Welcome'
import MemberSign from './pages/MemberSign'
import MemberSuccess from './pages/MemberSucces';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='Welcome' component={Welcome} options={{
          headerShown:false,
        }} />
        <Stack.Screen name='MemberSign' component={MemberSign} />
        <Stack.Screen name='MemberSuccess' component={MemberSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}