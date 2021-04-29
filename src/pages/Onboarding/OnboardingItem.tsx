import React from 'react'
import {
View,
Text,
Image,
useWindowDimensions
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

    <View style = {[styles.contanier, {width}]}>

      <Image 
      source = {item.image} 
      style = {[styles.image, {width, resizeMode: 'contain'}]}
      />

    <View style = {{flex: 0.3}}>
      <Text style = {styles.title}> 
            {item.title} 
            </Text>

            <Text style = {styles.description}> 
            {item.description} 
            </Text>
    </View>

    </View>

  )
}

export default OnboardingItem;