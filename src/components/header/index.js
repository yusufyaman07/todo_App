//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './style';
// create a component
const Header = ({title}) => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.title}>{title} </Text>
    </View>
  );
};

export default Header;
