import React from 'react';
import {StyleSheet} from 'react-native';

const calcHomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50,
    justifyContent: 'center',
  },
  goBackButton: {
    width: 218,
    height: 59,
    backgroundColor: '#4C4C4C',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 60,
  },
  goBackButtonText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  clacDisplay: {
    backgroundColor: '#d0d3d4',
    padding: 20,
    margin: 9,
    borderRadius: 12,
  },
  calcDisplayText: {
    fontSize: 28,
    color: '#4C4C4C',
  },
  buttonPosition: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 6
  },
  clacButtonsStyle: {
    width: 70,
    height: 70,
    backgroundColor: '#4C4C4C',
    borderRadius: 80,
  },
  calcButtonText: {
    fontSize: 30,
    fontWeight: '400',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 11.5
  },
  zeroButtonStyle: {
    width: 150,
    height: 70,
    backgroundColor: '#4C4C4C',
    borderRadius: 80,
  },
  zeroButtonText: {
    fontSize: 30,
    fontWeight: '400',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 11.5
  },
  cButtonStyle: {
    width: 310,
    height: 70,
    backgroundColor: '#4C4C4C',
    borderRadius: 80,
    marginTop: 6
  },
  cButtonText: {
    fontSize: 30,
    fontWeight: '400',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 11.5
  },
  userButtonsStyle: {
    width: 150,
    height: 50,
    backgroundColor: '#4C4C4C',
    borderRadius: 80,
    marginLeft: 150,
    marginBottom: 15
  },
  userButtonText: {
    fontSize: 25,
    fontWeight: '400',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 6.5
  },
});

export default calcHomeStyle;
