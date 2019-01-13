import React, {Component} from 'react';
import {Platform, AsyncStorage} from 'react-native';

const Context = React.createContext();

export class Provider extends Component{
  state={
    buttons: {
      width: 75,
      height: 45,
      borderRadius:  20,
      marginHorizontal:3,
      borderWidth:2,
      borderColor:'white',
      marginBottom: 5,
      backgroundColor: 'rgba(140, 30, 111,0.7)',
    },
    storedButtonColor:  null,
  }

  componentDidMount = async ()=>{
    const buttonColorValue = await AsyncStorage.getItem('@UserButtonColor:key');

    const buttonContents = {
      width: 75,
      height: 45,
      borderRadius:  20,
      marginHorizontal:3,
      borderWidth:2,
      borderColor:'white',
      marginBottom: 5,
    }


    this.setState({
      storedButtonColor: JSON.parse(buttonColorValue),
    })
    // Button Colors =============================================================
    if (this.state.storedButtonColor== 'rgba(125,0,4,0.7)'){ //RED
      this.setState({
        buttons: {
          ...buttonContents,
          backgroundColor: 'rgba(125,0,4,0.7)',
        }
      })
    } else if (this.state.storedButtonColor == 'rgba(0,0,155,0.7)'){ //BLUE
      this.setState({ buttons: {
          ...buttonContents,
          backgroundColor: 'rgba(0,0,155,0.7)',
        }
      })
    } else if (this.state.storedButtonColor == 'rgba(0,125,0,0.7)'){ //Green
      this.setState({
        buttons: {
          ...buttonContents,
          backgroundColor: 'rgba(0,125,0,0.7)',
        }
      })
    } else if (this.state.storedButtonColor == 'rgba(65,128,128,0.8)'){ //Teal
      this.setState({
        buttons: {
          ...buttonContents,
          backgroundColor: 'rgba(65,128,128,0.8)',
        }
      })
    } else if (this.state.storedButtonColor == 'rgba(0,180,180,0.8)'){ //Cyan
      this.setState({
        buttons: {
          ...buttonContents,
          backgroundColor: 'rgba(0,180,180,0.8)',
        }
      })
    } else if (this.state.storedButtonColor == 'rgba(206,67,0,0.7)'){ //Orange
      this.setState({
        buttons: {
          ...buttonContents,
          backgroundColor: 'rgba(206,67,0,0.7)',
        }
      })
    } else if (this.state.storedButtonColor == 'rgba(88,0,176,0.7)'){ //Violet
      this.setState({
        buttons: {
          ...buttonContents,
          backgroundColor: 'rgba(88,0,176,0.7)',
        }
      })
    } else if (this.state.storedButtonColor == 'rgba(140, 30, 111,0.7)'){ //Magenta
      this.setState({
        buttons: {
          ...buttonContents,
          backgroundColor: 'rgba(140, 30, 111,0.7)',
        }
      })
    } else if (this.state.storedButtonColor == 'rgba(0,0,0,0.7)'){ //Black
      this.setState({
        buttons: {
          ...buttonContents,
          backgroundColor: 'rgba(0,0,0,0.7)',
        }
      })
    } else {
      this.setState({ //Default to Black
        ...buttonContents,
        backgroundColor: 'rgba(0,0,0,0.7)', 
      })
    }

  };

  saveButtonColor = async (color) => {
    
    let colorVal = JSON.stringify(color);
    await AsyncStorage.setItem('@UserButtonColor:key', colorVal);

    this.setState({
      buttons: {
        width: 75,
        height: 45,
        borderRadius:  20,
        marginHorizontal:3,
        borderWidth:2,
        borderColor:'white',
        marginBottom: 5,
        backgroundColor: color,
      },
      myVar: color,
    })
    
  };

  render(){
    return(
      <Context.Provider value={{
        buttons: this.state.buttons,
        myVar: this.state.myVar,
        saveButtonColor: this.saveButtonColor,
      }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}
export const Consumer = Context.Consumer;

