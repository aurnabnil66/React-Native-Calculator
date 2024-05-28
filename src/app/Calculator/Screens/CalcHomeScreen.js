import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';
import calcHomeStyle from '../Styles/calcHomeStyle';
import {useRoute} from '@react-navigation/native';
import signInStyle from '../Styles/signInStyle';

function CalcHome({navigation}) {
  const route = useRoute(); // hook to access route object
  const {userName} = route.params || {};
  // If route.params is undefined or null, the {} object ensures that userName is assigned an empty object as its default value
  const [display, setDisplay] = useState(0);
  const [operand, setOperand] = useState(null);
  const [operator, setOperator] = useState(null);

  const [calculations, setCalculations] = useState([]);

  const [inputError, setInputError] = useState('');

  const PressNum = value => {
    setDisplay(display === '0' ? value : display + value);
    // if 0 is pressed it shows 0, else 0 is appended to the display
    if(display.length > 10){
      setInputError('Maximum input reached');
      setDisplay(display);
    }
  };

  useEffect(()=>{
    if(display.length > 0){
      setInputError('')
    }
  },[display])
  
  const PressOperator = operation => {
    setOperand(parseFloat(display)); // current display value converted to a integer number
    setOperator(operation); // sets the operator to the pressed operation
    setDisplay('0'); // resets the display to 0 to prepare for the next number input
  };

  //  neeeed to update
  const calculate = () => {
    const num = parseFloat(display);
    let result;
    switch (operator) {
      case '+':
        result = operand + num;
        setDisplay(result.toString());
        break;
      case '-':
        result = operand - num;
        setDisplay(result.toString());
        break;
      case '*':
        result = operand * num;
        setDisplay(result.toString());
        break;
      case '/':
        result = operand / num;
        setDisplay(result.toString());
        break;
      default:
        result = num;
    }
    const calculationArray = `${operand} ${operator} ${num} = ${result}`;
    setCalculations(prevCalculations => [
      ...prevCalculations,
      calculationArray,
    ]);
    // spread elements of prevCalculations and append calculationArray at the end of the array
  };

  const ClearDisplay = () => {
    setDisplay('0');
    setOperand(null);
    setOperator(null);
  };

  return (
    <View style={calcHomeStyle.container}>
      <View>
        <TouchableOpacity
          style={calcHomeStyle.userButtonsStyle}
          onPress={() => {
            navigation.push('UserDetails', { showCalculations: calculations, userName:userName });
          }}>
          <Text style={calcHomeStyle.userButtonText}>{userName}</Text>
        </TouchableOpacity>
      </View>

      <View style={calcHomeStyle.clacDisplay}>
        <Text style={calcHomeStyle.calcDisplayText}>{display}</Text>
      </View>
      {inputError.length > 0 && <Text style={signInStyle.errorText}>{inputError}</Text> }

      <View style={calcHomeStyle.buttonPosition}>
        <TouchableOpacity
          style={calcHomeStyle.clacButtonsStyle}
          onPress={() => PressNum('7')}>
          <Text style={calcHomeStyle.calcButtonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calcHomeStyle.clacButtonsStyle}
          onPress={() => PressNum('8')}>
          <Text style={calcHomeStyle.calcButtonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calcHomeStyle.clacButtonsStyle}
          onPress={() => PressNum('9')}>
          <Text style={calcHomeStyle.calcButtonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calcHomeStyle.clacButtonsStyle}
          onPress={() => PressOperator('/')}>
          <Text style={calcHomeStyle.calcButtonText}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={calcHomeStyle.buttonPosition}>
        <TouchableOpacity
          style={calcHomeStyle.clacButtonsStyle}
          onPress={() => PressNum('4')}>
          <Text style={calcHomeStyle.calcButtonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calcHomeStyle.clacButtonsStyle}
          onPress={() => PressNum('5')}>
          <Text style={calcHomeStyle.calcButtonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calcHomeStyle.clacButtonsStyle}
          onPress={() => PressNum('6')}>
          <Text style={calcHomeStyle.calcButtonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calcHomeStyle.clacButtonsStyle}
          onPress={() => PressOperator('*')}>
          <Text style={calcHomeStyle.calcButtonText}>x</Text>
        </TouchableOpacity>
      </View>


      <View style={calcHomeStyle.buttonPosition}>
        <TouchableOpacity
          style={calcHomeStyle.clacButtonsStyle}
          onPress={() => PressNum('1')}>
          <Text style={calcHomeStyle.calcButtonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calcHomeStyle.clacButtonsStyle}
          onPress={() => PressNum('2')}>
          <Text style={calcHomeStyle.calcButtonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calcHomeStyle.clacButtonsStyle}
          onPress={() => PressNum('3')}>
          <Text style={calcHomeStyle.calcButtonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calcHomeStyle.clacButtonsStyle}
          onPress={() => PressOperator('-')}>
          <Text style={calcHomeStyle.calcButtonText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={calcHomeStyle.buttonPosition}>
        <TouchableOpacity
          style={calcHomeStyle.zeroButtonStyle}
          onPress={() => PressNum('0')}>
          <Text style={calcHomeStyle.zeroButtonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calcHomeStyle.clacButtonsStyle}
          onPress={() => PressOperator('+')}>
          <Text style={calcHomeStyle.calcButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calcHomeStyle.clacButtonsStyle}
          onPress={() => calculate('=')}>
          <Text style={calcHomeStyle.calcButtonText}>=</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={calcHomeStyle.cButtonStyle}
          onPress={() => ClearDisplay()}>
          <Text style={calcHomeStyle.cButtonText}>C</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.push('SignIn');
          }}
          style={calcHomeStyle.goBackButton}>
          <Text style={calcHomeStyle.goBackButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CalcHome;