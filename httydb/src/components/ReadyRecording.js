import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Timer from './Timer';

class ReadyRecording extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentLayout: props.selectedLayout
      }
    }

    render() {
      return (
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <View style={{alignItems: "flex-start"}}>
            <Text style={styles.TextSpacing}>Current Layout: {this.state.currentLayout}</Text>
            <Text style={styles.TextSpacing}>Distance: {"0.00 KM"}</Text>
            <Text style={styles.TextSpacing}>Current Velocity: {this.props.currVelocity}</Text>
            <Text style={styles.TextSpacing}>Average Velocity: {"0.00 m/s"}</Text>
          </View>
  
          <View style={{alignItems: "flex-end"}}>
            <Timer isPaused={() => this.props.isPaused()} elapsedTime={0}></Timer>
            <TouchableOpacity>
              <Text style={styles.ButtonStyleTwo} onPress={() => this.props.setPause()}>
                Pause
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.ButtonStyleTwo}>Stop and Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  ButtonStyleTwo: {
    backgroundColor: "lightgrey",
    flexDirection: "row-reverse",
    width: 150,
    height: 75,
    margin: 15,
    textAlign: "center",
    textAlignVertical: "center", 
    fontSize: 24,
    color: "white",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 2
  },

  TextSpacing: {
    margin: 15,
    fontSize: 16
  }
});

export default ReadyRecording