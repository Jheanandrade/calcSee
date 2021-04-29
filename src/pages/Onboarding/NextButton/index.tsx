import React, { useRef, useEffect} from 'react'
import {
View,
TouchableOpacity,
Animated,
} from 'react-native'

import Svg, { G , Circle } from 'react-native-svg'
import { AntDesign} from '@expo/vector-icons'


import styles from './styles'


const NextButton = ({percentage, scrollTo}: any) => {

  const SIZE = 118;
  const STROKEWIDTH = 4;
  const CENTER = SIZE / 2;
  const RADIUS = SIZE /2 - STROKEWIDTH /2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  const progressAnimation = useRef( new Animated.Value(0)).current

  const progressRef = useRef<any>(null)
  

  const animation = (toValue : any) => {
    return Animated.timing(progressAnimation, {
        toValue,
        duration: 1,
        useNativeDriver: true,
      }).start()
  }


  useEffect(() => {
    animation(percentage)
  }, [percentage])


  useEffect(() => {
    progressAnimation.addListener(
      
      (value) => {

         const strokeDashoffset = CIRCUMFERENCE - (CIRCUMFERENCE * value.value) / 100

        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset
          })
        }
    },
    [percentage]
    );

    return () => {
    progressAnimation.removeAllListeners()
  }

  }, [])

  

  return (

    <View style = {styles.contanier}>
      
      <Svg width = {SIZE} height = {SIZE}>

          <G rotation = "-90" origin = {CENTER}>

            <Circle
            stroke = "#e6e7e8"
            cx = {CENTER}
            cy = {CENTER} 
            r = {RADIUS} 
            strokeWidth = {STROKEWIDTH} />

            <Circle
            ref = {progressRef}
            stroke = "#f4338f"
            cx = {CENTER}
            cy = {CENTER} 
            r = {RADIUS} 
            strokeWidth = {STROKEWIDTH}
            strokeDasharray = {CIRCUMFERENCE}/>  
          </G>
      </Svg> 

      <TouchableOpacity style = {styles.button} activeOpacity = {0.6} onPress = {scrollTo}>
        <AntDesign
        name = "arrowright"
        size = {32}
        color = '#fff' />
      </TouchableOpacity>
    </View>

  )
}

export default NextButton;