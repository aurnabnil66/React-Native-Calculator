import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import userStyle from '../Styles/userStyle';

function UserDetails() {
  const route = useRoute();
  const {showCalculations} = route.params || {};
  const {userName} = route.params || {};
  //   useEffect(()=>{
  //     console.log(route.params);
  //   })
  return (
    <View style={userStyle.container}>
      <View>
        <View style={userStyle.calculationBox}>
          {/* need to update */}
          <View style={userStyle.calculationHeading}>
            <Text style={userStyle.calculationHeading}>Calculations of</Text>
            <Text style={userStyle.calculationHeadingUserName}>{userName}</Text>
          </View>
          {showCalculations?.length > 0 && (
            <ScrollView showsVerticalScrollIndicator={false}>
              {Array.isArray(showCalculations) &&
                showCalculations.map((calculation, index) => (
                  <Text style={userStyle.calculationBoxText} key={index}>
                    {calculation}
                  </Text>
                ))}
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  );
}

export default UserDetails;
