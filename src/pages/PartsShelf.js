import React from 'react';
import { View, Text } from 'react-native';

// Speed Dial Test
import SpeedDialAdd from 'src/components/SpeedDialAdd';

export default function PartsShelf() {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Parts Shelf</Text>
          <SpeedDialAdd />
        </View>
      );

}