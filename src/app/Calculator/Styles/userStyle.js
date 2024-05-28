
import {StyleSheet} from 'react-native';

const userStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 35,
    justifyContent: 'center',
  },
  userNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111111',
    letterSpacing: 2,
    marginLeft: 115,
  },
  calculationBox: {
    height: 500,
    width: 300,
    alignItems: 'center',
    backgroundColor: '#17202a',
    borderRadius: 12,
    alignSelf: 'center',
    padding: 40,
  },
  calculationHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
    marginBottom: 10,
    flexDirection: 'row',
  },
  calculationHeadingUserName: {
    marginLeft: 5,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'yellow',
    letterSpacing: 2,
    marginBottom: 10,
  },
  calculationBoxText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 2,
  },
});

export default userStyle;
