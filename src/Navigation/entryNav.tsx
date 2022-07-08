import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNav from './drawer';

interface IProps {}

/**
* @author Anusha Pandey 
* @function @EntryNav
**/

const Stack = createStackNavigator();

 const EntryNav :FC<IProps> = (props) => { 


 return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="landing" component={DrawerNav}/>
    </Stack.Navigator>

 
   
  
  )
}



export default EntryNav;