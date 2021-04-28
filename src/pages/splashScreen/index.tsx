import React from 'react'

import{
  SafeAreaView,
  View,
  Image
} from 'react-native'

import LottieView from 'lottie-react-native'

import logocompany from '../../../src/assets/logocompany.png'
import logoapp from '../../../src/assets/logoapp.png'

import styles from './styles'

export const splash = () => {

  return (
    <SafeAreaView style = {styles.contanier}>

      <View style = {styles.contain}> 

          

          <View style = {styles.lottieView}>
          <LottieView
          style = {styles.lottie} 
          resizeMode = 'contain'
          autoSize
          source= {require('../../assets/193-material-loading.json')}
          autoPlay
          loop/>
          </View>

         
          
      </View>
  
    </SafeAreaView>
  )
}

