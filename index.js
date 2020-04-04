import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Environment,
  asset,
  VrButton
} from 'react-360';

export default class Learning_VR extends React.Component {
  state = {
    isEnterBtn: false,
  }

  componentDidMount(){
    this.updateImage("mountain-360.jpg")
  }

  updateImage(imageNmae){
    Environment.setBackgroundImage(asset(imageNmae));
  }

  handleEnter = () => {
    this.setState({
      isEnterBtn: true
    })
  }

  handleExit = () => {
    this.setState({
      isEnterBtn: false
    })
  }

  handleClicked = () => {
    this.updateImage("hall-360.jpg")
  }

  getInstruction(){
    let instructionStyle = styles.textWrapper
    if(this.state.isEnterBtn){
      instructionStyle = [styles.textWrapper, styles.textWrapperHover]
    }
    return (
      <VrButton onExit={this.handleExit} onEnter={this.handleEnter} style={instructionStyle}>
        <Text style={styles.textInstruction}>
          Instruction
        </Text>
      </VrButton>
    )
  }

  handleRiverClicked = () => {
    this.updateImage("river-360.jpg")
  }

  getRiverBtn(){
    return (
      <VrButton onClick={this.handleRiverClicked} style={styles.riverWrapper}>
        <Text style={styles.textInstruction}>
          River
        </Text>
      </VrButton>
    )
  }

  render() {
    return (
      <View style={styles.playground}>
        {this.getInstruction()}
        {this.getRiverBtn()}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  playground: {
    flex: 1,
    backgroundColor: "red"
  },
  textWrapper: {
    backgroundColor: "#ddd",
    borderRadius: 5,
    padding: 30,
    transform: [
      { translate: [1800, -800, 0] }
    ]
  },
  textWrapperHover:{
    borderWidth: 2
  },
  textInstruction: {
    fontSize: 30,
    color: "black",
  },
  riverWrapper: {
    backgroundColor: "#ddd",
    borderRadius: 5,
    padding: 30,
    transform: [
      { translate: [3000, -800, 0] }
    ]
  }
});

AppRegistry.registerComponent('Learning_VR', () => Learning_VR);
