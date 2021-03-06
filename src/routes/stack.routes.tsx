import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { onBoarding } from '../pages/Onboarding'
import { splash } from '../pages/splashScreen'


import colors from '../styles/colors'


const stack = createStackNavigator()

const Appstacks:React.FC= () => (
  <stack.Navigator
    headerMode='none'
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}>
      <stack.Screen
      name="onboarding"
      component={onBoarding}/>
      
    <stack.Screen
      name="splash"
      component={splash}/>

  </stack.Navigator>
)

export default Appstacks;