import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  bottom: {
   flexDirection: 'row',
   width: width*0.9,
  },
  buttonVoltar:{
    flex: 1,
    borderRadius: 16,
    alignItems: 'center',
    margin: 9,
  },
  buttonProximo:{
    flex: 1,
    borderRadius: 16,
    alignItems: 'center',
    margin: 9,
  },
  buttonFinalizar:{
    flex: 1,
    borderRadius: 16,
    alignItems: 'center',
    margin: 9,
  },
  buttonText:{
    fontSize: 16,
    color: 'white',
    padding: 16,
  },
});

