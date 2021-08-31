import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#6DD47E'
  },
  boxButton: {
    paddingTop:15,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#293250',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
  },
});

