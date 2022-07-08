import React, { FC, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { create } from 'react-test-renderer';
import { createStackNavigator } from '@react-navigation/stack';
import EntryNav from './entryNav';
import Splashscreen from '../screens/splashscreen/splash';


interface IProps {}

/**
* @author Anusha Pandey
* @function @StackNav
**/

const Stack = createStackNavigator(); 
 const StackNav :FC<IProps> = (props) => { 
const [showSplashScreen,setShowSplashScreen]=useState(true);
useEffect(()=>{
  setTimeout(()=>{
    setShowSplashScreen(false);
  },4000)
},[])

 return(
  
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      {showSplashScreen ? (
          <Stack.Screen name="Home" component={Splashscreen} />
        ) : null}
        <Stack.Screen name='Homes' component={EntryNav}/>
      </Stack.Navigator>
    </NavigationContainer>
 
  )
}




export default StackNav;