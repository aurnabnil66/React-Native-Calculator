import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import SignIn from './src/app/Calculator/Screens/SignInScreen';
import CalcHome from './src/app/Calculator/Screens/CalcHomeScreen';
import UserDetails from './src/app/Calculator/Screens/UserDetails';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="CalcHome" component={CalcHome} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
