import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextStyle, 
  View 
} from 'react-native';

export const LEFT_SIZE = 7
export const RIGHT_SIZE = 3

export interface Props {
    leftDigit: number,
    rightDigit: number,
    textStyle: TextStyle,
}

class KeyDisplay extends Component<Props> {
    state = {
        leftDigits: ["A", "B", "C", "D", "E", "F", "G"],
        rightDigits: ["\u266D", "\u266E", "\u266F"],
    };

    render() {

        return (
          <View style={styles.container}>
              <View style={styles.leftDigit}>
                  <Text style={this.props.textStyle}>{this.state.leftDigits[this.props.leftDigit]}</Text>
              </View>
              <View style={styles.rightDigit}>
                <Text style={this.props.textStyle}>{this.state.rightDigits[this.props.rightDigit]}</Text>
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
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
});

export default KeyDisplay