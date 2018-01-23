import * as React from 'react';
import {Button} from 'react-native';

interface SquareProps {
    value: string,
    onClick: () => any
}

export function Square(props: SquareProps) {
    return (
        <Button title="props.value" className="square" onPress={props.onClick} />
    )
}
