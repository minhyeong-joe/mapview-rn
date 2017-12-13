import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

const InputField = (props) => {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        autoCorret={false}
        placeholder={props.placeholder}
        secureTextEntry={props.secure}
        underlineColorAndroid='transparent'
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType={props.keyboardType}
        onSubmitEditing={props.onSubmitEditing}
      />
    </View>
  );
};

const styles=StyleSheet.create({
  field: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  label: {
    marginLeft: 10,
    flex: 1,
  },
  input: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 2,
  }
});

export { InputField };
