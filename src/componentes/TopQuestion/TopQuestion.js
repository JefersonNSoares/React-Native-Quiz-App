import React from 'react';
import {View, Text } from 'react-native';
import styles from './styles';

export const TopQuestion = ( props ) => {
  return(
    <View style={styles.top}>
      <Text style={styles.question}> { props.question } </Text>
    </View>
  );
}
