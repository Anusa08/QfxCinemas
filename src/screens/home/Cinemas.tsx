import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface IProps {}

/**
* @author Anusha Pandey 
* @function @Cinemas
**/


 const Cinemas :FC<IProps> = (props) => { 

const { container } = styles
 return(
  <View style={container}>
    <Text>Cinemas</Text>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
 }
})
export default Cinemas;