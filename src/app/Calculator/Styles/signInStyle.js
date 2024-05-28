import React from 'react';
import {StyleSheet} from 'react-native';

const signInStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 35,
    justifyContent: 'center'
  },
  calculatorImg: {
    alignSelf: 'center'
  },
  appNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111111',
    letterSpacing: 2,
    marginLeft: 115,
  },
  userNameField: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#4C4C4C',
    backgroundColor: '#FAFAFA',
    width: 218,
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
  usernameFieldInside: {
    left: 5, 
    marginRight: 10, 
    marginLeft: 10
  },
  signInButton: {
    width: 218,
    height: 59,
    backgroundColor: '#4C4C4C',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    marginTop: 60
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  errorText:{
    fontSize: 15,
    fontWeight: '400',
    color: '#EE1C24',
    justifyContent: 'center',
    alignSelf: 'center'
  },
});

export default signInStyle;
