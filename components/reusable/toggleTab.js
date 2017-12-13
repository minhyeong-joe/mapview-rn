import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

class ToggleTab extends Component {
  constructor(props){
    super(props);
    this.state={
      title : this.props.title,
      content : this.props.content,
      showContent : false
    }
  }
  onTitleClick() {
    this.setState({
      showContent : !this.state.showContent
    });
  }
  renderContent() {
    if (this.state.showContent){
      return (
        <View style={styles.content}>
          <Text style={styles.contentText}>{this.state.content}</Text>
        </View>
      );
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
        <TouchableOpacity style={styles.title} onPress={this.onTitleClick.bind(this)}>
          <Text style={styles.titleText}>{this.state.title}</Text>
        </TouchableOpacity>
        {this.renderContent()}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  title: {
    padding: 10,
    backgroundColor: 'lightblue',
    flexDirection: 'row',
  },
  titleText:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  contentText: {
    marginTop: 5,
  },
});

export { ToggleTab }
