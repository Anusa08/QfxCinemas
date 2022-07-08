import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import Entry from "./src/entry";

interface IProps {}

/**
 * @author Anusha pandey
 * @function @App
 **/

 const App: FC<IProps> = (props) => {
  
  return (
    <Entry/>
  );
};


export default App;