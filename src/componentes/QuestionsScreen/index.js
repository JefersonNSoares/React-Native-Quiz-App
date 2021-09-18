import React, { useEffect, useState } from 'react';
import {Text, Alert,TouchableOpacity, ScrollView } from 'react-native';
import FootnoteButton from '../Button/FootnoteButton/FootnoteButton';
import { TopQuestion } from '../TopQuestion/TopQuestion';
import { numRandom } from './numRandom';
import styles from './styles';
import { AdMobInterstitial } from 'expo-ads-admob';

export default function QuestionScreen({ navigation, route }){
  const [next, setNext] = useState(0)
  const [styleButtom, setStyleButtom] = useState(styles.alternativeButton);
  const [styleButtom1, setStyleButtom1] = useState(styles.alternativeButton);
  const [styleButtom2, setStyleButtom2] = useState(styles.alternativeButton);
  const [styleButtom3, setStyleButtom3] = useState(styles.alternativeButton);
  const [listNumRandom, setListNumRandom] = useState(numRandom())

  const data =  route.params.base
  const numCategory = route.params.id
  const totalQuestions = Object.keys(data[numCategory].questions).length
  const question = data[numCategory].questions[next].question
  const alternatives = data[numCategory].questions[next].incorrect_answers
  const alternaCorrect = data[numCategory].questions[next].correct_answer
  
  function Ad () {
    useEffect (() => {
      async function LoadAdmob() {
        await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
        AdMob();
      }
      LoadAdmob();
    }, [])
  }
    
  async function AdMob () {
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
    await AdMobInterstitial.showAdAsync();
  }

  const onPressNext = () => {
    if (next + 1 === totalQuestions) {
      Alert.alert("Ahhh, parece que você já respondeu todas as perguntas :(");
      setStyleButtom(styles.alternativeButton)
      setStyleButtom1(styles.alternativeButton)
      setStyleButtom2(styles.alternativeButton)
      setStyleButtom3(styles.alternativeButton)
      setListNumRandom(numRandom())
      
    } else {
      setNext(prevCount => prevCount + 1);
      setStyleButtom(styles.alternativeButton)
      setStyleButtom1(styles.alternativeButton)
      setStyleButtom2(styles.alternativeButton)
      setStyleButtom3(styles.alternativeButton)
      setListNumRandom(numRandom())
    }
  }
  const onPressComeBack = () => { 
    if (next === 0) {
      navigation.goBack();
      setStyleButtom(styles.alternativeButton)
      setStyleButtom1(styles.alternativeButton)
      setStyleButtom2(styles.alternativeButton)
      setStyleButtom3(styles.alternativeButton)
      setListNumRandom(numRandom())
    } else {
      setNext(prevCount => prevCount - 1);
      setStyleButtom(styles.alternativeButton)
      setStyleButtom1(styles.alternativeButton)
      setStyleButtom2(styles.alternativeButton)
      setStyleButtom3(styles.alternativeButton)
      setListNumRandom(numRandom())
    }
  }

  const onPressCheckAnswer = (id, alternativeMarked, alternativeCorrect ) => {
    if (id === 0){
      if (alternativeMarked === alternativeCorrect) {
        setStyleButtom(styles.alternativeButton2)
      } else {
        setStyleButtom(styles.alternativeButton3)
      }
    } else if (id === 1) {
      if (alternativeMarked === alternativeCorrect) {
        setStyleButtom1(styles.alternativeButton2)
      } else {
        setStyleButtom1(styles.alternativeButton3)
      }
    } else if (id === 2) {
      if (alternativeMarked === alternativeCorrect) {
        setStyleButtom2(styles.alternativeButton2)
      } else {
        setStyleButtom2(styles.alternativeButton3)
      }
    } else if (id === 3) {
      if (alternativeMarked === alternativeCorrect) {
        setStyleButtom3(styles.alternativeButton2)
      } else {
        setStyleButtom3(styles.alternativeButton3)
      }
    } else {
      return 
    }
  }

  const onPressFinalizar = () => {
    navigation.navigate('Welcome');
    AdMob();
  }
  
  return (
  <ScrollView style={styles.container}>
        <TopQuestion question={question}/>
        <TouchableOpacity 
        style={styleButtom}
        onPress={()=> onPressCheckAnswer(
          id=0,
          alternativeMarked = alternatives[listNumRandom[0]-1],
          alternativeCorrect = alternaCorrect
        )}        >
            <Text 
            allowFontScaling={false}
            style={styles.alternativeText}> {alternatives[listNumRandom[0]-1]} </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styleButtom1}
        onPress={()=> onPressCheckAnswer(
          id=1,
          alternativeMarked = alternatives[listNumRandom[1]-1],
          alternativeCorrect = alternaCorrect
        )}        >
            <Text 
            allowFontScaling={false}
            style={styles.alternativeText}> {alternatives[listNumRandom[1]-1]} </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styleButtom2}
        onPress={()=> onPressCheckAnswer(
          id=2,
          alternativeMarked = alternatives[listNumRandom[2]-1],
          alternativeCorrect = alternaCorrect
        )}        >
            <Text 
            allowFontScaling={false}
            style={styles.alternativeText}> {alternatives[listNumRandom[2]-1]} </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styleButtom3}
        onPress={()=> onPressCheckAnswer(
          id=3,
          alternativeMarked = alternatives[listNumRandom[3]-1],
          alternativeCorrect = alternaCorrect
        )}        >
            <Text 
            allowFontScaling={false}
            style={styles.alternativeText}> {alternatives[listNumRandom[3]-1]} </Text>
        </TouchableOpacity>

        <FootnoteButton 
        navigation={navigation}
        onpressNext={onPressNext}
        onPressComeBack={onPressComeBack}
        onPressFinalizar={onPressFinalizar}
        />
  </ScrollView>
  );
};