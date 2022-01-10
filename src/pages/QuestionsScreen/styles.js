import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 20,
  },
  textTop: {
    fontSize: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  alternativeButton:{
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 6,
    backgroundColor: '#292251',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'black',

  },
  alternativeButton2:{
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 6,
    backgroundColor: '#0000FF',
    borderRadius: 12,
  },
  alternativeButton3:{
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 6,
    backgroundColor: '#ff0000',
    borderRadius: 12,
  },
  options: {
    marginVertical: 16,
    flex:1,
  },
  alternativeText:{
    fontSize: 20,
    fontWeight:'500',
    color: 'white'
  }
});

