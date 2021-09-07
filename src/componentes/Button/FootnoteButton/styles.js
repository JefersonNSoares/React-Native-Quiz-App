import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bottom: {
   marginBottom: 12,
   paddingVertical: 16,
   justifyContent: 'space-between',
   flexDirection: 'row',
  },
  buttonVoltar:{
    backgroundColor:'#FFD55A',
    padding: 12,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonProximo:{
    backgroundColor:'#6DD47E',
    padding: 12,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonFinalizar:{
    backgroundColor:'#2255',
    padding: 12,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText:{
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});

