import React from 'react';
import { StatusBar} from 'react-native';
import Routes from './src/Routes';
import { NavigationContainer, NavigationNativeContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#6DD47E"/>
      <Routes />
    </NavigationContainer>
  )
}
