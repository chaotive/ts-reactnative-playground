import * as React from "react";
import {Square} from "./Square";

interface BoardProps {
    squares: string[]
}

export class Board extends React.Component<any, BoardProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            squares: []
        }
    }

    renderSquare(i: number) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={this.click(i)}
            />
        );
    }

    render() {
        const status = 'Next player: X';

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

    click = (i: number) => {
        console.log("defining ", i);
        return () => {
            console.log("pressed ", i)
        }
    }

}