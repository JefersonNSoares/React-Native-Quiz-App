import React, { useEffect, useState } from 'react';
import {Alert, Pressable, Text, View, FlatList, SectionList, ActivityIndicator, SafeAreaView, Button} from 'react-native';
import style from './style';
import jsonData from '../Api/JsonApi';


export default function QuestionsCategories({ navigation }){
  const data = jsonData();
  const CategoryBox= ({ id, category, base }) => (
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
      navigation.navigate('QuestionsScreen', { id: id, name: category, base: base })}
    >
        <Text style={style.buttonText}>{category}</Text>
      </Pressable>
    </View>
  );


  return <View style={style.container}>
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item})=>
      <CategoryBox 
      id={item.id}
      category={item.category}
      base={data}     
      />
    }
    />
  </View>
}
