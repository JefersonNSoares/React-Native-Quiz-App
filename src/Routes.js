import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import QuestionsScreen from './componentes/QuestionsScreen'
import QuestionsCategories from './componentes/QuestionsCategories'
import Welcome from './componentes/Welcome'

export default function Routes() {
  return (
      <Stack.Navigator 
      screenOptions={{ headerStyle:{ backgroundColor:"#6DD47E"}}}>
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: 'Bem-Vindo!' }}/>
        <Stack.Screen name="QuestionsCategories" component={QuestionsCategories} options={{ title: 'Categorias' }}/>
        <Stack.Screen name="QuestionsScreen" component={QuestionsScreen} options={{ title: 'Pergunta' }}/>
      </Stack.Navigator>
  );
}