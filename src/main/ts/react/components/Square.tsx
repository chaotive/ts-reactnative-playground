import * as React from 'react';

interface SquareProps {
    value?: string,
    onClick?: () => any
}

export class Square extends React.Component<SquareProps> {

    render() {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
                </button>
        );
    }

    click = () => {
        this.setState({value: 'X'})
    }
}
