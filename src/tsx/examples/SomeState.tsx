//- clase React simple con dependencias mínimas (solo a Typescript)
//  y CON estado explícito
//- la funcion handleUpdate es llamada desde afuera por "cualquier cosa"
//- react eventualmente realiza el render cuando estima conveniente, en base a
//  la llamada de handleUpdate con setState
//- esto explícitamente delega el control del estado "fuera", no sabe de él
// y mantiene el componente mínimo
//- el estado inicial del componente es explícito y autocontenido,
// desde la función "StateInit"

import * as React from "react";
import {View, Text} from 'react-native';

interface SomeState {
  someName: string
  someNumber: number
}

function StateInit(): SomeState {
  return {
    someName: "",
    someNumber: 0
  }
}

class SomeComponent extends React.Component<any, SomeState> {
  constructor(props: any) {
    super(props);
    this.state = StateInit();
  }

  render() {
    return (
      <View>
        <Text>{this.state.someName}</Text>
        <Text>{this.state.someNumber}</Text>
      </View>
    )
  }

  update(newState: SomeState) {
    this.setState(newState);
  }
}