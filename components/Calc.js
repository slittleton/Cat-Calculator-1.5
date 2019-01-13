import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        Text, 
        View, 
        TouchableOpacity} from 'react-native';
import styles from "./styles";
import {Provider, Consumer } from '../Context';

class Calc extends Component {
  state ={
    mem: ' ',
    msg: '0',
    num: '',
    operator: '',
    arr: [],

    buttons: {
      width: 75,
      height: 45,
      borderRadius:  20,
      marginHorizontal:3,
      borderWidth:2,
      borderColor:'white',
      marginBottom: 5,
      backgroundColor: 'rgba(140, 30, 111,0.7)',
    }
  };


// CLEAR ALL FUNCTION =================================================
  clearAll =()=>{
    this.setState({
      mem: ' ',
      msg: '0',
      num: '',
      operator: '',
      arr: [],
    })
  };

// DELETE DIGIT FUNCTION =============================================
backOne =()=>{
  let num = this.state.num;
  const para = /\(\-.*\)/;

  if (num.length === 0) {
    console.log('there is nothing to delete')
    this.setState({
      msg: '',
    })
  } else if(num === '(-)' || num === '()'){
    num = '';
  } else {
    if (num === 0 || num === '(0)' || num === '0') {
      num = 0;
    } else if(JSON.stringify(num).match(para)) {
      num = num
      .split('')
      .filter(x => x !== '(' && x !== ')')
      .join('');

      num = `(${num.slice(0,-1)})`;
    } else {
      num = num.slice(0,-1);
    }

    if(num === '(-)' || num === '()' || num === '-'){
      num = '';
    }
  };

this.setState({
  num: num,
  msg: num,
})
};

// PERCENT FUNCTION =================================================
  percent =()=>{
    let num = this.state.num;
    const negative = /^\-.*/;

    if (num === "." && num.length === 1) {
      num = "0.";
    }
    if (num === '') {
      console.log('cannot use percent without number')
    }else{
      num = JSON.stringify(eval(num) / 100);
      if(JSON.stringify(num).match(negative)){
        num = `(${num})`;
      } 
    }

    this.setState({
      num: num,
      msg: num,
    })
  };

// GET OPERATOR FUNCTION =================================================
  getOperator =(operator)=>{
    let num = this.state.num;
    let arr = this.state.arr;
    

    if (num === "." && num.length === 1) {
      num = "0.";
    }
    if (num !== "") {
      arr.push(num);
      arr.push(operator);
      num = "";
    }else if(num === ''){
      arr[arr.length - 1] = operator;
    }
  
    this.setState({
      operator:operator,
      num:num,
      arr:arr,
      mem:arr,
      msg: operator,
    })
  };

// GET NUMBER FUNCTION =============================================
  getNum =(x)=>{
    let num = this.state.num;
    const para = /\(.*\)/;

    if (JSON.stringify(num).match(para)) {
      num = num
        .split("")
        .filter(x => x !== "(" && x !== ")")
        .join("");
      x = Number(x);
      num += x;
      num = "(" + num + ")";
    } else {
      x = Number(x);
      num += x;
    }


   this.setState({
     msg: num,
     num:num
   });
  };
// CHANGE SIGN FUNCTION ============================================
posNeg =()=>{
  let num = this.state.num;
  const negativePara = /\(\-.*\)/;
  const negative = /^\-.*/;

  if (num === "." && num.length === 1) {
    num = "0.";
  }

  if (num === '') {
    console.log('no number to convert')
  }else{
    if (num === 0 || num === "(0)" || num === "0") {
      num = 0;
    } else {
      if (JSON.stringify(num).match(negative)) {
        num = JSON.stringify(num)
          .split("")
          .filter(x => x !== "-")
          .join("");
      } else if (JSON.stringify(num).match(negativePara)) {
        num = num
          .split("")
          .filter(x => x !== "(" && x !== ")" && x !== "-")
          .join("");
      } else {
        num = "(" + Number(num) * -1 + ")";
      }
    }
    this.setState({
      num:num,
      msg: num
    })
  }
};


// Point FUNCTION =================================================
  getPoint =()=>{
    let num = this.state.num;
    num += ".";

    if (num.includes("..")) {
      console.log("pointcheck");
      num = num.replace("..", ".");
    }
  
    let numOfPoints = 0;
    let checkNum = num.split("");
  
    for (let i = 0; i < checkNum.length; i++) {
      if (checkNum[i] === ".") {
        numOfPoints += 1;
      }
  
      if (numOfPoints > 1) {
        num = num.substr(0, num.length - 1);
      }
    }
  
    this.setState({
      num:num,
      msg: num
    })
  };

  // EQUAL FUNCTION ===========================================
  equals =()=>{
    let num = this.state.num;
    let arr = this.state.arr;

    if (num==='.'){num = '0.0';}

    if (num !==""){
      arr.push(num);
      num = arr.join('')
    }else if(num === ''){
      if (arr[arr.length-1]=== '+'||
          arr[arr.length-1]=== '-'||
          arr[arr.length-1]=== '*'||
          arr[arr.length-1]=== '/'){
        arr.pop();
        }
      num = arr.join('');
    }

    num = Number(eval(num).toFixed(5)).toString();
    
    if(typeof(num) === "number"){
      num = JSON.stringify(num)
    }
 
  this.setState({
    num: num,
    msg: num,
    mem: num,
    operator: "",
    arr: [],
  })
 
  };



  render() {
    return (
      <Consumer>
        {(value)=>{
          const { buttons } = value;
          return(
            <View style={styles.containerCalc}>
            <View style={styles.topEmpty}/>
    
            <View style={styles.topDisplay}>
              <View style={styles.displayArea}>
                <Text style={styles.memstyle}>{this.state.mem}</Text>
                <Text style={styles.dispstyle}>{this.state.msg}</Text>
              </View>
            </View>
    
            <View style={styles.aboveButtonSpace}/>
              
            <View style={styles.buttonSpace}>
              <View style={styles.buttonArea}>
                <View style={styles.buttonPlacement}>
                  <TouchableOpacity onPress={this.clearAll} style={buttons}><Text style={styles.buttontext} >CA</Text></TouchableOpacity>
                  <TouchableOpacity onPress={this.backOne} style={buttons}><Text style={styles.buttontext}>del</Text></TouchableOpacity>
                  <TouchableOpacity onPress={this.percent} style={buttons}><Text style={styles.buttontext}>%</Text></TouchableOpacity>
                  <TouchableOpacity onPress={this.getOperator.bind(this,'/')} style={buttons}><Text style={styles.buttontext}>/</Text></TouchableOpacity>
                </View>
                <View style={styles.buttonPlacement}>
                  <TouchableOpacity onPress={this.getNum.bind(this,'7')} style={buttons}><Text style={styles.buttontext}>7</Text></TouchableOpacity>
                  <TouchableOpacity onPress={this.getNum.bind(this,'8')} style={buttons}><Text style={styles.buttontext}>8</Text></TouchableOpacity>
                  <TouchableOpacity onPress={this.getNum.bind(this,'9')} style={buttons}><Text style={styles.buttontext}>9</Text></TouchableOpacity>
                  <TouchableOpacity onPress={this.getOperator.bind(this,'*')} style={buttons}><Text style={styles.buttontext}>X</Text></TouchableOpacity>
                </View>
                <View style={styles.buttonPlacement}>
                  <TouchableOpacity onPress={this.getNum.bind(this,'4')} style={buttons}><Text style={styles.buttontext}>4</Text></TouchableOpacity>
                  <TouchableOpacity onPress={this.getNum.bind(this,'5')} style={buttons}><Text style={styles.buttontext}>5</Text></TouchableOpacity>
                  <TouchableOpacity onPress={this.getNum.bind(this,'6')} style={buttons}><Text style={styles.buttontext}>6</Text></TouchableOpacity>
                  <TouchableOpacity onPress={this.getOperator.bind(this,'-')} style={buttons}><Text style={styles.buttontext}>-</Text></TouchableOpacity>
                </View>
                <View style={styles.buttonPlacement}>
                  <TouchableOpacity onPress={this.getNum.bind(this,'1')} style={buttons}><Text style={styles.buttontext}>1</Text></TouchableOpacity>
                  <TouchableOpacity onPress={this.getNum.bind(this,'2')} style={buttons}><Text style={styles.buttontext}>2</Text></TouchableOpacity>
                  <TouchableOpacity onPress={this.getNum.bind(this,'3')} style={buttons}><Text style={styles.buttontext}>3</Text></TouchableOpacity>
                  <TouchableOpacity onPress={this.getOperator.bind(this,'+')} style={buttons}><Text style={styles.buttontext}>+</Text></TouchableOpacity>
                </View>
                <View style={styles.buttonPlacement}>
                  <TouchableOpacity onPress={this.posNeg} style={buttons}><Text style={styles.buttontext}>+/-</Text></TouchableOpacity>
                  <TouchableOpacity onPress={this.getNum.bind(this,'0')} style={buttons}><Text style={styles.buttontext}>0</Text></TouchableOpacity>
                  <TouchableOpacity onPress={this.getPoint} style={buttons}><Text style={styles.buttontext}>.</Text></TouchableOpacity>
                  <TouchableOpacity onPress={this.equals} style={buttons}><Text style={styles.buttontext}>=</Text></TouchableOpacity>
                </View>
              </View>
            </View>
    
            <View style={styles.belowButtonSpace}/>
    
          </View>
          )
        }}

      </Consumer>


    )
  }
}

export default Calc;