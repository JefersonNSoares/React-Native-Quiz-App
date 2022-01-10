import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  textTitle:{
    color: '#293250',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 25
  },
  textSubTitle:{
    color: '#293250',
    textAlign: 'center',
    fontSize: 22,
    marginTop: 25,
    marginHorizontal: 10,
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
    marginTop: 25,
    marginHorizontal: 15,
  },
  image: {
    width: width*1,
    height: width*1,
  }

});

