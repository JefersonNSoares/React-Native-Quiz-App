import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  textTitle:{
    color: '#293250',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    padding: 40,
  },
  textSubTitle:{
    color: '#293250',
    textAlign: 'center',
    fontSize: 22,
  },
  container: {
    flex: 1,
  },
  box1: {
    flex: 1, 
  },
  box2: {
    flex: 2, 
  },
  box3: {
    flex: 3, 
    backgroundColor: '#6DD47E',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  box4: {
    marginVertical: 40,
    borderRadius: 8,
    padding: 6
  },
  textButtonStart: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#293250',
  },
  buttonStart: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 5,
    borderWidth: StyleSheet.hairlineWidth,
  },
  image: {
    width: width*1,
    height: width*1,
  }

});

