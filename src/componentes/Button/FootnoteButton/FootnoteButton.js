import React from 'react';
import {Text, View, TouchableOpacity, Button} from 'react-native';
import styles from './styles';




const FootnoteButton = ({ navigation, onpressNext, onPressComeBack }) => {
  return (
    <View style={styles.bottom}>
      <TouchableOpacity 
      style={styles.button}
      onPress={onPressComeBack}>
        <Text style={styles.buttonText}> Voltar </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.button}
      onPress={onpressNext}
      >
        <Text style={styles.buttonText}> Proxima </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.navigate('Welcome')}
      >
        <Text style={styles.buttonText}> Finalizar </Text>
      </TouchableOpacity>
  </View>
  );
}

export default FootnoteButton;
