import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Header = (prop) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{prop.title}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    header: {
    height: 60,
    paddding: 15,
    backgroundColor: 'darkslateblue'
  }, 
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center'
  }   
});
export default Header;
