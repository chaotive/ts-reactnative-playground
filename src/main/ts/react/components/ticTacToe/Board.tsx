import * as React from "react";
import {View} from 'react-native';
import {Square} from "./functional/Square";

export type Squares = string[]

interface BoardProps {
    squares: Squares,
    onClick: (i: number) => any
}

export class Board extends React.Component<BoardProps> {
    renderSquare(i: number) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={this.props.onClick.bind(this,i)}
            />
        );
    }

    render() {
        return (
            <View>
                <View className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </View>
                <View className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </View>
                <View className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </View>
            </View>
        );
    }
}
