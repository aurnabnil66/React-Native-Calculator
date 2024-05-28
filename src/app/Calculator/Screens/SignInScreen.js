import React, { useEffect, useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import signInStyle from '../Styles/signInStyle';
import CalculatorImg from '../../../Images/CalculatorImg';
import User from '../../../Images/User';

function SignIn({navigation}) {
  const[name, setName] = useState('');
  const[inputError, setInputError] = useState('');
  useEffect(()=>{
    if(name.length > 0){
      setInputError('')
    }
  },[name])
  
  const userValidation = () => {
    const inputPattern = /^[a-zA-Z\s]{1,6}$/   // regex pattern
    const trimmedName = name.trim();
    
    if (!trimmedName) {
      setInputError('User Name is required');
      return false; // Validation failed
    } else if (trimmedName.length > 8) {
      setInputError('Cannot input more than 8 characters');
      return false; // Validation failed
    } else if (!inputPattern.test(trimmedName)) {
      setInputError('Input should be alphabets only');
      return false; // Validation failed
    }
    setInputError('');
    return true; // Validation passed
  };
  
  const handleSignIn = () => {
    if (userValidation()) {
      navigation.push('CalcHome', { userName: name });
      setName('')
    }
  };

  return(
    <View style={signInStyle.container}>
    <CalculatorImg style={signInStyle.calculatorImg}/>
    <View>
      <Text style={signInStyle.appNameText}>Calculator</Text>
    </View>

    <View>
      <View style={signInStyle.userNameField}>
        {/* need to update */}
        <User style={signInStyle.usernameFieldInside} />
        <TextInput
          color="#000"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Type your name here"
          placeholderTextColor="#4C4C4C"
          onChangeText={(text) => setName(text)}
          defaultValue={name}
          maxLength={17}
        />
      </View>
      {inputError.length > 0 && <Text style={signInStyle.errorText}>{inputError}</Text> }
    </View>

    <View>
      <TouchableOpacity onPress={handleSignIn} style={signInStyle.signInButton}>
        <Text style={signInStyle.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

export default SignIn;
