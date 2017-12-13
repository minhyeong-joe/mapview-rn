import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Body = (props) => {
  return (
    <View style={styles.body}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#ddd',
  }
});

export { Body };
