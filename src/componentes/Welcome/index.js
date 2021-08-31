import React from 'react';
import { Text, Pressable, View, Animated, Dimensions, Image } from 'react-native';
import { StartButton } from '../Button/StartButton/StartButton';
import style from './style';

const {height, width} = Dimensions.get('window');

export default function Welcome({ navigation }){

  return <View style={style.container}>
            <Image
            style={style.image}
            source={require('../../../assets/logoP.png')}
            />
            <Animated.View style={{
              backgroundColor:'#6DD47E',
              height: 500 + height,
              width: width * 2,
              borderRadius: 1000,
              position: 'absolute',
              alignSelf: 'center',
              top: 0.45 * height,
            }}>
              <Text style={style.textTitle}>Pergunta à Amigos</Text>
              </Animated.View>
            <Animated.View style={{
              backgroundColor: '#6DD47E',
              height: height * 0.35,
              width: width,
              position: "absolute",
              bottom: 0,
              alignSelf: "center",
              padding: 20,
            }}>
            <Text style={style.textSubTitle}>Junte os amigos e se preparem para as perguntas!</Text>
            <View style={style.box4}>
              <Pressable 
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? 'white'
                    : '#FFD55A',
                },
                style.buttonStart,
              ]}
              onPress={() =>
                navigation.navigate('QuestionsCategories')}
              >
                <Text style={style.textButtonStart}
                >Vamos começar!
                </Text>
              </Pressable>
            </View>
            </Animated.View>
        </View>
}

