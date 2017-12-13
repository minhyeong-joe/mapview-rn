import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class GoogleMap extends Component {
  render() {
    return (
      <iframe src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_0DFl4EyJTBvFTzaWPPIGFGtX53_FPOQ&callback=initMap"></iframe>
      <Text>GoogleMap</Text>
    );
  }
};

export { GoogleMap };
