import React from 'react';
import { Text, View } from 'react-native';

//import * as React from 'react';
//import * as ReactDOM from 'react-dom';
//import './index.css';

//import {Game} from "./main/ts/react/components/Game";
import {styles} from "./styles/ticTacToe";

// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// );

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Typescript just works! so so happy! :)</Text>
      </View>
    );
  }
}
