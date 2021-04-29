import React, {useState, useRef} from 'react'
import {
View,
FlatList,
ViewToken,
StyleSheet,
Animated
} from 'react-native'

import OnboardingItem from './OnboardingItem'
import NextButton from './NextButton'
import slides from '../../../slides'


interface IPropsViewbleItemsChanged {
  viewableItems : ViewToken[]
}

export const onBoarding = () => {

  const [currentIndex,setCurrentIndex] = useState(0)
  
  const  scrollx = useRef( new Animated.Value(0)).current

  const slidesRef = useRef(null)

  const viewbleItemsChanged  = useRef(({viewableItems}: IPropsViewbleItemsChanged) => {
    
    if(viewableItems[0]) {
      setCurrentIndex(viewableItems[0]?.index || 0);
    }
    
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current

  const toScroll = () => {
    if( currentIndex < slides.length - 1 ) {
      slidesRef.current.scrollToIndex({ 
        index: currentIndex + 1})
    } else { 
      console.log('last item')
    }
  }

  return (

    <View style = {styles.contanier}>
      
      <View>
          <FlatList
                data = {slides}
                renderItem = {({item}) => <OnboardingItem item = {item}/> }
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                bounces = {false}
                keyExtractor = {(item) => item.id}
                onScroll = {Animated.event([{nativeEvent: {contentOffset:{x: scrollx}}}],
                
                  {useNativeDriver: false}

                )}
                scrollEventThrottle = {32}
                onViewableItemsChanged = {viewbleItemsChanged}
                viewabilityConfig = {viewConfig}
                ref = {slidesRef}
          />
      </View>

      <View>
          <NextButton scrollTo = {toScroll} percentage = {(currentIndex + 1) * (100 / slides.length)}/>
      </View>
      
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


