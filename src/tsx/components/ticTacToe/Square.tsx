import * as React from 'react';
import DynamicButton from "../generic/DynamicButton";
import styles from "../../styles/ticTacToe";

interface SquareProps {
    value: string,
    onPress: () => any
}

export default function Square(props: SquareProps) {
    return (
        <DynamicButton
          containerStyle={styles.squareContainer}
          textStyle={styles.squareText}
          onPress={props.onPress}
          value={props.value}
        />
    )
}
