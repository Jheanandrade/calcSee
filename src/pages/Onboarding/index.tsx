import React, {useState, useRef} from 'react'
import {
View,
FlatList,
ViewToken,
StyleSheet,
Animated,
SafeAreaView
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

  const slidesRef = useRef<any>(null)

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

    <SafeAreaView style = {styles.contanier}>
      
      <View style = {styles.contain}>
          <FlatList
                data = {slides}
                renderItem = {({item}) => <OnboardingItem item = {item}/> }
                horizontal
                showsHorizontalScrollIndicator = {false}
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

      <View style = {styles.form}>
          <NextButton scrollTo = {toScroll} percentage = {(currentIndex + 1) * (100 / slides.length)}/>
      </View>
      
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contain: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 100,
    
  },
  form: {
    flex: 0.2,
    width: '100%',
    height: '100%'
  }
})


