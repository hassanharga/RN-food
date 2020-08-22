import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from '../screens/SearchScreen';
import ResultShow from '../screens/ResultShowScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Search'
      screenOptions={{
        title: 'Business Search',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          textAlign: 'center',
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='ResultShow' component={ResultShow} />
    </Stack.Navigator>
  );
};

export default MyStack;
