import React from 'react'
import {
View,
Text,
FlatList,
StyleSheet
} from 'react-native'


import slides from '../../../slides'
import OnboardingItem from './OnboardingItem'

export const onBoarding = () => {
  return (

    <View style = {styles.contanier}>
      
      <FlatList
      data = {slides}
      renderItem = {({item}) => <OnboardingItem item = {item}/> }
      horizontal
      showsHorizontalScrollIndicator
      pagingEnabled
      bounces = {false}
      keyExtractor = {(item) => item.id}/>
    </View>

  )
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})