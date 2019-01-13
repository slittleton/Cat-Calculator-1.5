import React, {Component} from 'react';
import {StyleSheet} from 'react-native';


export default StyleSheet.create({
  //////////////CALC COMPONENT STYLES/////////////////
  containerCalc:{
    flex:1,
  },
// MAIN POSITIONING ==========================================
  topEmpty:{
    flex: 9,
  },
  topDisplay:{
    flex:13.3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  aboveButtonSpace: {
    flex:28,
  },
  buttonSpace: {
    flex:31,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  belowButtonSpace: {
    flex:10,
  },

  // DISPLAY =============================================
  displayArea:{
    flexDirection: 'column',
    width: '80%',
    marginRight: '5%',
  },
  dispstyle:{
    fontSize: 35,
    color:'white',
    textAlign: 'right',
    fontFamily:'Roboto'
  },
  memstyle:{
    fontSize: 25,
    color:'white',
    textAlign: 'right',
    fontFamily:'Roboto'
  },

  // BUTTONS
  buttonArea:{
    width: '80%',
  },
  buttonPlacement: {
    flexDirection:'row',
    justifyContent:'center',

  },

  buttontext:{
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    
  },


  ////////////// BACKGROUND CHANGE COMPONENT STYLES ////////////////

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  buttonStyle:{
    width: '100%',
    height: 40,
    borderRadius:  20,
    marginHorizontal:3,
    borderWidth:2,
    borderColor:'white',
    backgroundColor:'rgba(0,0,0,0.5)', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  buttonStyleInside:{
    width: '100%',
    height: 40,
    borderRadius:  20,
    marginHorizontal:3,
    borderWidth:2,
    borderColor:'white',
    backgroundColor:'rgba(0,0,0,0.5)', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  textStyle:{
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    justifyContent: 'center',
  },
  textStyleInside:{
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    justifyContent: 'center',
  },
  menu:{
    color: 'white',
    backgroundColor: '#2e5652',
    fontSize: 30,
  },
  submenu:{
    color: 'white',
    backgroundColor: '#2e5652',
    fontSize: 20,
  },

})