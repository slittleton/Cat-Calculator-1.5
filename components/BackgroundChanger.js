import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        Text, 
        View, 
        ImageBackground, 
        Modal, 
        Picker,
        TouchableOpacity,
        AsyncStorage
      } from 'react-native';

import Calc from './Calc';
import styles from "./styles";
import {Provider, Consumer } from '../Context';

const background1 = require('../img/blue-b.jpg');
const background2 = require('../img/red-b.jpg');
const background3 = require('../img/green-b.jpg');
const background4 = require('../img/black-b.jpg');
const background5 = require('../img/white-b.jpg');
const background6 = require('../img/rainbow-b.jpg');

const cat1 = require('../img/cat1.png');
const cat2 = require('../img/scienceCat-SR.png');
const cat3 = require('../img/lgbtCat-SR.png');
const cat4 = require('../img/runnerCat-SR.png');



class BackgroundChanger extends Component{
  state={
    backgroundImage: require('../img/blue-b.jpg'),
    cat: require('../img/cat1.png'),
    modal: false,
    buttonColor: 'nothing'
  }


  componentDidMount = async ()=>{
    const value = await AsyncStorage.getItem('@UserBackground:key');
    const catValue = await AsyncStorage.getItem('@UserCat:key');
 
    // Background================
    if (value == 1){ this.setState({backgroundImage: background1})
    }else if (value == 2){ this.setState({backgroundImage: background2})
    }else if (value == 3){ this.setState({backgroundImage: background3})
    }else if (value == 4){ this.setState({backgroundImage: background4})
    }else if (value == 5){ this.setState({backgroundImage: background5})
    }else if (value == 6){ this.setState({backgroundImage: background6})
    }else{ this.setState({backgroundImage: background1})
    }

    //Cat ======================
    if (catValue== 7){ this.setState({cat: cat1})
    } else if (catValue==8){ this.setState({cat: cat2})
    } else if (catValue==9){ this.setState({ cat: cat3 })
    } else if (catValue==10){ this.setState({ cat: cat4 })
    } else { this.setState({ cat: cat1 })
    }
    // Button Colors located in Context.js

  };

  handleModal = () =>{
    this.setState({
      modal: !this.state.modal ? true : false
    })
  };

  saveBackground = async (itemValue) => {
    
    let val1 = JSON.stringify(itemValue);
    await AsyncStorage.setItem('@UserBackground:key', val1);

    let value = JSON.parse(await AsyncStorage.getItem('@UserBackground:key'));
    this.setState({
      backgroundImage: value,
    })

  }

  saveCat = async (itemValue) => {

    let catVal = JSON.stringify(itemValue);
    await AsyncStorage.setItem('@UserCat:key', catVal);

    let value = JSON.parse(await AsyncStorage.getItem('@UserCat:key'));
    this.setState({
      cat: value,
    })
    
  }

  render(){
    return(

      <Consumer>
        {(value)=>{
        
          return(
            <View>
              <ImageBackground 
                style={styles.image} 
                imageStyle={{resizeMode: 'stretch'}} 
                source={this.state.backgroundImage}
              >
              <ImageBackground 
                    style={styles.image} 
                    imageStyle={{resizeMode: 'stretch'}} 
                    source={this.state.cat}
                  >

                    <Calc/>

                  <View style={{width:'20%'}}>
                    <TouchableOpacity onPress={this.handleModal} style={styles.buttonStyle}>
                      <Text style={styles.textStyle}>Settings</Text>
                    </TouchableOpacity>
                    <Modal 
                      visible={this.state.modal}
                      animationType={'slide'}
                      onRequestClose={()=>{}}
                    >

                      <Text style={styles.menu}>Choose Background</Text>
                      <View style={{marginTop:20}}>
                      <Text style={styles.submenu}>Background Color</Text>
                      <Picker
                        style={{width:'100%'}}
                        selectedValue={this.state.backgroundImage}
                        onValueChange={(itemValue) => this.saveBackground(itemValue)}
                      >
                        <Picker.Item label="Blue" value={background1}/>
                        <Picker.Item label="Red" value={background2}/>
                        <Picker.Item label="Green" value={background3}/>
                        <Picker.Item label="Black" value={background4}/>
                        <Picker.Item label="White" value={background5}/>
                        <Picker.Item label="Rainbow" value={background6}/>
                      </Picker>
                      </View>

                      <View style={{marginTop:20}}>
                      <Text style={styles.submenu}>Cat</Text>
                      <Picker
                        style={{width:'100%'}}
                        selectedValue={this.state.cat}
                        onValueChange={(itemValue) => this.saveCat(itemValue)}
                      >
                        <Picker.Item label="Cat" value={cat1}/>
                        <Picker.Item label="For SCIENCE!" value={cat2}/>
                        <Picker.Item label="Pussy Purride" value={cat3}/>
                        <Picker.Item label="Marathon Cat" value={cat4}/>
                      </Picker>
                      </View>

                      <View style={{marginTop:20}}>
                      <Text style={styles.submenu}>Button Color</Text>
                      <Picker
                        style={{width:'100%'}}
                        selectedValue={value.buttons.backgroundColor}
                        onValueChange={(color) =>value.saveButtonColor(color)}
                      >
                        <Picker.Item label="Red" value={'rgba(125,0,4,0.7)'}/>
                        <Picker.Item label="Blue" value={'rgba(0,0,155,0.7)'}/>
                        <Picker.Item label="Green" value={'rgba(0,125,0,0.7)'}/>
                        <Picker.Item label="Teal" value={'rgba(65,128,128,0.8)'}/>
                        <Picker.Item label="Cyan" value={'rgba(0,180,180,0.8)'}/>
                        <Picker.Item label="Orange" value={'rgba(206,67,0,0.7)'}/>
                        <Picker.Item label="Violet" value={'rgba(88,0,176,0.7)'}/>
                        <Picker.Item label="Magenta" value={'rgba(140, 30, 111,0.7)'}/>
                        <Picker.Item label="Black" value={'rgba(0,0,0,0.7)'}/>
                      </Picker>
                      </View>


                      <TouchableOpacity onPress={this.handleModal} style={styles.buttonStyleInside}>
                        <Text style={styles.textStyle}>Close</Text>
                      </TouchableOpacity>
                    </Modal>
                  </View>
              
                </ImageBackground>
              </ImageBackground>
            </View>
          )
        }}
      </Consumer>


    )
  }

}
export default BackgroundChanger;



