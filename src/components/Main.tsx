import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import KeyDisplay, { LEFT_SIZE, RIGHT_SIZE } from './KeyDisplay';


class Main extends Component {

  state = {
    leftDigit: 2,
    rightDigit: 1,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.displayContainer}>
          <KeyDisplay leftDigit={this.state.leftDigit} rightDigit={this.state.rightDigit} textStyle={styles.displayStyle}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button 
          title="Randomize"
          titleStyle={{
            color: "#fff",
            fontSize: 50,
          }}
          onPress={this.randomizeDisplay}
        />
      </View>
    </View>
    );
  }

  randomizeDisplay = () => {
    let left = Math.floor(Math.random() * LEFT_SIZE)
    let right = Math.floor(Math.random() * RIGHT_SIZE)

    if (left == 1 && right == 2) { // B sharp -> C
      left = 2
      right = 1
    } else if (left == 2 && right == 0) { // C flat -> B
      left = 1
      right = 1
    } else if (left == 4 && right == 2) { // E sharp -> F
      left = 5
      right = 1
    } else if (left == 5 && right == 0) { // F flat -> E
      left = 4
      right = 1
    }

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
    flexDirection: 'column',
    justifyContent: 'center',
  },
  displayContainer: {
    alignItems: "flex-end",
    flex: 1,
    justifyContent: 'center',
    marginTop: 150,
  },
  buttonContainer: {
    alignItems: "flex-start",
    flex: 1,
    marginTop: 75,
  },
  displayStyle: {
    color: '#fff',
    fontSize: 200,
  }
});

export default Main