import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const FootnoteButton = ({ navigation, onpressNext, onPressComeBack }) => {
  return (
    <View style={styles.bottom}>
      <TouchableOpacity 
      style={styles.buttonVoltar}
      onPress={onPressComeBack}>
        <Text style={styles.buttonText}> Voltar </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.buttonProximo}
      onPress={onpressNext}
      >
        <Text style={styles.buttonText}> Proximo </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.buttonFinalizar}
      onPress={() => navigation.navigate('Welcome')}
      >
        <Text style={styles.buttonText}> Finalizar </Text>
      </TouchableOpacity>
  </View>
  );
}

export default FootnoteButton;
