import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface SquareProps {
    value: string,
    onClick: () => any
}

export function Square(props: SquareProps) {
    return (
        <TouchableOpacity className="square" onPress={props.onClick}>
          <Text>{props.value}</Text>
        </TouchableOpacity>
    )
}
