import {StyleSheet} from 'react-native'

import colors from '../../styles/colors'

const styles = StyleSheet.create({
  contanier: {
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center'
  },
  contain: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieView: {
    height: '60%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    height: 50,
    width: 50
  }
})

export default styles;