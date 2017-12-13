import React from 'react';
import { View } from 'react-native';

import GoogleMap from './components/googlemap';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <GoogleMap />
      </View>
    );
  }
};
