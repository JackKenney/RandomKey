import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import KeyDisplay, { LEFT_SIZE, RIGHT_SIZE } from './KeyDisplay';


class Main extends Component {

  state = {
    leftDigit: 2,
    rightDigit: 1,
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyDisplay leftDigit={this.state.leftDigit} rightDigit={this.state.rightDigit} />
        <Button 
          title="Randomize"
          color="#999"
          onPress={this.randomizeDisplay}
        />
      </View>
    );
  }

  randomizeDisplay = () => {
    let left = Math.floor(Math.random() * LEFT_SIZE)
    let right = Math.floor(Math.random() * RIGHT_SIZE)
    
    this.setState({
      leftDigit: left,
      rightDigit: right
    })
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 100,
  }
});

export default Main