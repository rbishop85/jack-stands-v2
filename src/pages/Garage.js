import React from 'react';
import { View, Text } from 'react-native';

// Testing stack navigation within tab
import Vehicle from './Vehicle';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';
const Stack = createNativeStackNavigator();

// Speed Dial Test
import SpeedDialAdd from 'src/components/SpeedDialAdd';

function GarageHome({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', height: 20 }}>
        <Text>Garage</Text>
      </View>
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button mode="contained" onPress={() => navigation.navigate('Vehicle')} style={{ marginVertical:10}}>
          Vehicle
        </Button>
      </View>
      <SpeedDialAdd />
    </View>
  );
}

export default function Garage() {

    return (
      <Stack.Navigator 
        initialRouteName="Garage"
        // screenOptions={{
        // header: (props) => <NavBar {...props} />,
        // }}
      >
        <Stack.Screen name="Garage" component={GarageHome}/>
        <Stack.Screen name="Vehicle" component={Vehicle} />
      </Stack.Navigator>









        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //   <Text>Garage</Text>
        // </View>
      );

}