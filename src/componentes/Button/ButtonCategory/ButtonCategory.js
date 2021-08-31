import React from 'react';
import { View, Pressable, Text, Dimensions} from 'react-native';
import style from './style';
const {height, width} = Dimensions.get('window');

export const CategoryBox= ({ navigation ,category }) => (
  <View style={style.boxButton}>
   <Pressable
  style={({ pressed }) => [
    {
      backgroundColor: pressed
        ? 'white'
        : '#FFD55A',
    },
    style.button,
  ]}
  onPress={() =>
    navigation.navigate('QuestionsScreen', { name: category })}
  >
      <Text style={style.buttonText}>{category}</Text>
    </Pressable>
  </View>
);
