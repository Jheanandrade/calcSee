import React from 'react'
import {
View,
Text,
Image,
useWindowDimensions, 
SafeAreaView
} from 'react-native'

import styles from './styles'

type Item = {
    id: string;
    title: string;
    description: string;
    image: any;
}

interface IProps {
  item : Item
}
 
const OnboardingItem: React.FC<IProps> = ({item} : IProps) => {

  const {width} = useWindowDimensions()

  return (

    <SafeAreaView>

    <View style = {[styles.contanier, {width}]}>

      <View style = {styles.contain}> 
      <Image 
      source = {item.image} 
      resizeMode = 'contain'
      style = {[styles.image, {width}]}
      />
    </View>

    <View style = {styles.texts}>
      <Text style = {styles.title}> 
            {item.title} 
            </Text>

            <Text style = {styles.description}> 
            {item.description} 
            </Text>
    </View>

    </View>

    </SafeAreaView>

  )
}

export default OnboardingItem;