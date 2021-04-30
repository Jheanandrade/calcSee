import {StyleSheet} from 'react-native'

import colors from '../../../styles/colors'
import fonts from '../../../styles/fonts'

const styles = StyleSheet.create({

  contanier: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  contain: {
    flex: 0.4,
    justifyContent: 'center',
    alignContent: 'center',
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },

  texts: {
    flex: 0.6,
  },

  title: {
    fontWeight: '400',
    fontSize: 28,
    paddingVertical: 10,
    color: colors.title,
    textAlign: 'center',
    fontFamily: fonts.title
  },

  description: {
    fontWeight: '300',
    color: colors.subTitle,
    textAlign: 'center',
    paddingHorizontal: 64,
    fontFamily: fonts.subTitle
  },
  
})

export default styles;