import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import QuestionsScreen from './pages/QuestionsScreen'
import QuestionsCategories from './pages/QuestionsCategories'
import Welcome from './pages/Welcome'

export default function Routes() {
  return (
      <Stack.Navigator 
      screenOptions={{ headerStyle:{ backgroundColor:"#6DD47E"}}}>
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: 'Bem-Vindo!' }}/>
        <Stack.Screen name="QuestionsCategories" component={QuestionsCategories} options={{ title: 'Categorias' }}/>
        <Stack.Screen name="QuestionsScreen" component={QuestionsScreen} options={{ title: 'Perguntas' }}/>
      </Stack.Navigator>
  );
}