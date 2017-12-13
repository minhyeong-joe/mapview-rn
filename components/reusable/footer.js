import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';

// when content height < viewport height, footer is not all the way down. need to fix!
// footer positiong: now, footer is at the bottom of all contents, instead of at the bottom of entire window or viewport.

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>Linking.openURL('https://sanheng03.github.io')}>
        <Image style={styles.abouticon} source={require('./img/about.png')} />
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>© Copyright 2017</Text>
        <Text style={styles.text}>Minhyeong Billy Joe</Text>
      </View>
      <TouchableOpacity onPress={()=>Linking.openURL('https://github.com/sanheng03')}>
        <Image style={styles.githubicon} source={require('./img/github.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Linking.openURL('https://expo.io/@sanheng03')}>
        <Image style={styles.expoicon} source={require('./img/expo.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
    elevation: 2,
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
    color: '#aaa',
    alignSelf: 'center'
  },
  githubicon: {
    height: 60,
    width: 60,
  },
  expoicon: {
    height: 30,
    width: 35,
  },
  abouticon: {
    height: 35,
    width: 100,
    flex: 1,
  },
});

export { Footer }
