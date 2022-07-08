import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { create } from 'react-test-renderer';
import { createStackNavigator } from '@react-navigation/stack';
import EntryNav from './entryNav';


interface IProps {}

/**
* @author Anusha Pandey
* @function @StackNav
**/

const Stack = createStackNavigator(); 
 const StackNav :FC<IProps> = (props) => { 


 return(
  
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={EntryNav}/>
      </Stack.Navigator>
    </NavigationContainer>
 
  )
}




export default StackNav;