import {StyleSheet} from 'react-native'

import colors from '../../styles/colors'

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center'
  },
  description: {
    fontWeight: '300',
    color: '#493d8a',
    textAlign: 'center',
    paddingHorizontal: 64
  },
  
})

export default styles;