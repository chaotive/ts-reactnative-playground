import * as React from 'react';

interface SquareProps {
    value: string,
    onClick: () => any
}

/*export class Square extends React.Component<SquareProps> {

    render() {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
                </button>
        );
    }
}*/

export function Square(props: SquareProps) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
