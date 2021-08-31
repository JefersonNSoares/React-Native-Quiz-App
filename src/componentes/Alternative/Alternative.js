import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';


const Alternative = ( props ) => {
  return (
    <View style={styles.options}>
      <TouchableOpacity 
      style={styles.alternativeButton}
      >
        <Text style={styles.alternativeText}> {props.option1} </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.alternativeButton}
      >
        <Text style={styles.alternativeText}> {props.option2} </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.alternativeButton}
      >
        <Text style={styles.alternativeText}> {props.option3} </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.alternativeButton}
      >
        <Text style={styles.alternativeText}> {props.option4} </Text>
      </TouchableOpacity>
  </View>
  );
}

export default Alternative;
