//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import styles from './style';

// create a component
const Input = ({
  placeholder = 'Type Something',
  keyboardType = 'default',
  multiline = false,
  hasIcon = false,
  iconName = 'pluscircle',
  onIconPress = () => {},
  value = '',
  onChangeText,
}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="default"
        value={value}
        onChangeText={onChangeText}
        onIconPress={onIconPress}
      />
      {hasIcon && (
        <TouchableOpacity>
          <Icon style={styles.icon} name={iconName} onPress={onIconPress} />
        </TouchableOpacity>
      )}
    </View>
  );
};

//make this component available to the app
export default Input;
