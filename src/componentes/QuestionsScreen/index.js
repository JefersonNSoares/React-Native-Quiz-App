import React, { useEffect, useState } from 'react';
import { View, Text, Alert, Pressable, TouchableOpacity } from 'react-native';
import Alternatives from '../Alternative/Alternative';
import FootnoteButton from '../Button/FootnoteButton/FootnoteButton';
import { TopQuestion } from '../TopQuestion/TopQuestion';
import styles from './styles';

export default function QuestionScreen({ navigation, route }){
  const [next, setNext] = useState(0)
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);

  const data =  route.params.base
  const numCategory = route.params.id
  const totalQuestions = Object.keys(data[numCategory]).length
  
  const question = data[numCategory].questions[next].question
  const alternativeCorrect = data[numCategory].questions[next].correct_answer
  const alternativesIncorrect = data[numCategory].questions[next].incorrect_answers

  const onPressNext = () => {
    if (next === totalQuestions) {
      Alert.alert("Não temos mais questões para você");
    } else {
      setNext(prevCount => prevCount + 1);
    }
  }
  const onPressComeBack = () => { 
    if (next === 0) {
      navigation.goBack();
    } else {
      setNext(prevCount => prevCount - 1);
    }
  }

  return (
  <View style={styles.container}>
    <View style={styles.textTop}>
      <Text>Numero da questão: {next}</Text>
      <Text>Quantidade de questões: {totalQuestions}</Text>
    </View>
        <TopQuestion question={question}/>
        <TouchableOpacity style={styles.alternativeButton}>
            <Text style={styles.alternativeText}> {alternativeCorrect} </Text>
        </TouchableOpacity>
        <FootnoteButton 
        navigation={navigation}
        onpressNext={onPressNext}
        onPressComeBack={onPressComeBack}
        />
  </View>
  );
};