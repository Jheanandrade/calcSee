import React from 'react';

import 
{useFonts,
Inter_300Light,
Inter_500Medium} from '@expo-google-fonts/inter'

import AppLoading from 'expo-app-loading';

import Routes from './src/routes';



const App = () => {

  const [fontsLoading] =  useFonts({
    Inter_300Light,
    Inter_500Medium
  })
  
  if (!fontsLoading) {
    return <AppLoading/>
  }

  return (
  <Routes/>
  )
}

export default App;



