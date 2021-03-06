import React from 'react';
import {Pressable, Text, View, FlatList, ScrollView} from 'react-native';
import style from './style';
import jsonData from '../../componentes/Api/JsonApi';


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
        <Text 
        allowFontScaling={false}
        style={style.buttonText}>{category}</Text>
      </Pressable>
    </View>
  );

  return ( 
    <FlatList
      style={style.container}
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
  )
}
