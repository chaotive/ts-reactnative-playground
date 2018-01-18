import * as React from "react";
import {Square} from "./functional/Square";
import {TicTacToe} from "../../game/TicTacToe";

interface BoardProps {
    squares: string[],
    xIsNext: boolean
}

export class Board extends React.Component<any, BoardProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            squares: [],
            xIsNext: true
        }
    }

    renderSquare(i: number) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={this.handleClick.bind(this,i)}
            />
        );
    }

    render() {
        const winner = TicTacToe.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

    handleClick(i: number) {
        const squares = this.state.squares.slice();
        if (TicTacToe.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }

}