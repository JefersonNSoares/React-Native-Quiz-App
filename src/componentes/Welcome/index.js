import React from 'react';
import { Text, SafeAreaView, StatusBar, View, Animated, Dimensions, Button } from 'react-native';
import style from './style';
import ButtonStart from '../Button/ButtonStart/ButtonStart';

const {height, width} = Dimensions.get('window');

export default function Welcome(){
  return <View style={style.container}>
        <StatusBar backgroundColor="#6DD47E"/>
            <Animated.View style={{
              backgroundColor:'#6DD47E',
              height: 500 + height,
              width: width * 2,
              borderRadius: 1000,
              position: 'absolute',
              alignSelf: 'center',
              top: 0.45 * height,
            }}>
              <Text style={style.textTitle}>Pergunta a Amigos</Text>
              </Animated.View>
            <Animated.View style={{
              backgroundColor: '#6DD47E',
              height: height * 0.45,
              width: width,
              position: "absolute",
              bottom: 0,
              alignSelf: "center",
              padding: 20,
            }}>
            <Text style={style.textSubTitle}>Junte os amigos e se preparem para as perguntas!</Text>
            <View style={style.box4}>
              <ButtonStart/>
            </View>
            </Animated.View>
        </View>
}

