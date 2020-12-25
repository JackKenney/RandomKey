import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const LEFT_SIZE = 7
export const RIGHT_SIZE = 3

export interface Props {
    leftDigit: number,
    rightDigit: number,
}

class KeyDisplay extends Component<Props> {
    state = {
        leftDigits: ["A", "B", "C", "D", "E", "F", "G"],
        rightDigits: ["\u266D", "\u266E", "\u266F"],
    };

    render() {
        return (
          <View style={styles.container}>
              <View style={[styles.digitContainer, styles.leftDigit]}>
                  <Text style={styles.text}>{this.state.leftDigits[this.props.leftDigit]} </Text>
              </View>
              <View style={[styles.digitContainer, styles.rightDigit]}>
                <Text style={styles.text}>{this.state.rightDigits[this.props.rightDigit]}</Text>
              </View>
          </View>
        );
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
  leftDigit: {
    alignItems: "flex-end",
  },
  rightDigit: {
    alignItems: "flex-start",
  },
  digitContainer: {
    color: '#fff',
    flex:0.5,
  },
  text: {
    color: '#fff',
    fontSize: 100,
  }
});

export default KeyDisplay