import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface IProps {}

/**
* @author Anusha Pandey
* @function @Movie
**/


 const Movie :FC<IProps> = (props) => { 

const { container } = styles
 return(
  <View style={container}>
    <Text>Movie</Text>
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
export default Movie;