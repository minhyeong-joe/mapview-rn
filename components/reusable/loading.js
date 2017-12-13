import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const Loading = (props) => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={props.size || 'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { Loading };
