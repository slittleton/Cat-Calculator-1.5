/*


 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Provider, Consumer } from './Context';

import BackgroundChanger from './components/BackgroundChanger';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

      <Provider>
        <BackgroundChanger/>
      </Provider>
      

    );
  }
}
