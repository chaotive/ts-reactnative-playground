import * as React from 'react';

interface SquareProps {
    value?: string
}

export class Square extends React.Component<SquareProps, SquareProps> {
    constructor(props: SquareProps) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <button className="square" onClick={this.click}>
                {this.state.value}
                </button>
        );
    }

    click = () => {
        this.setState({value: 'X'})
    }
}
