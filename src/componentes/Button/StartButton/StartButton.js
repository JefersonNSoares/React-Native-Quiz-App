import React from 'react';
import { View, Pressable, Text} from 'react-native';
import styles from './styles';

export const StartButton = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Pressable 
    style={({ pressed }) => [
      {
        backgroundColor: pressed
          ? 'white'
          : '#FFD55A',
      },
      styles.buttonStart,
    ]}
    onPress={() =>
      navigation.navigate('QuestionsCategories')}
    >
      <Text style={styles.textButtonStart}
      >Vamos começar!
      </Text>
    </Pressable>
  </View>
  )
}
