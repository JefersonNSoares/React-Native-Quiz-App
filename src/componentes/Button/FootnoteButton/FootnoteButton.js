import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

const FootnoteButton = ({ navigation, onpressNext, onPressComeBack }) => {
  return (
    <View style={styles.bottom}>
      <TouchableOpacity 
      style={styles.buttonVoltar}
      onPress={onPressComeBack}>
        <Icon name="fastbackward" size={50} color="#FFD55A" />
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.buttonProximo}
      onPress={onpressNext}
      >
        <Icon name="fastforward" size={50} color="#6DD47E" />
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.buttonFinalizar}
      onPress={() => navigation.navigate('Welcome')}
      >
        <Icon name="closecircle" size={50} color="#FF6347" />
      </TouchableOpacity>
  </View>
  );
}

export default FootnoteButton;
