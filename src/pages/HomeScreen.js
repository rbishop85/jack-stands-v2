import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { View, Text } from 'react-native';

// Speed Dial Test
import { SpeedDial } from "@rneui/themed";
import SpeedDialAdd from 'src/components/SpeedDialAdd';


// export default function HomeScreen({ navigation }) {
  export default function HomeScreen() {

    const [open, setOpen] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to jackStands</Text>
      <SpeedDialAdd />
      
      {/* <Button mode="contained" onPress={() => navigation.navigate('Garage')} style={{ marginVertical:10}}>
        Garage
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Parts Shelf')} style={{ marginVertical:10}}>
        Parts Shelf
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Ideas / Inspiration')} style={{ marginVertical:10}}>
        Ideas/Inspiration
      </Button> */}
    </View>
  );
}