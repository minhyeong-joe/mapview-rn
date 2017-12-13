import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

const XIcon = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.action}>
        <Image
          source={require('./img/xIcon.png')}
          style={styles.img}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  button: {
    width: 20,
    alignSelf: 'flex-end',
  },
  img: {
    height: 20,
    width: 20,
  }
});

export { XIcon };
