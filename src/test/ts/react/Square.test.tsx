import * as React from 'react';
//import * as renderer from 'react-test-renderer';
import {Game} from "../../../main/ts/react/components/Game";
import {shallow} from 'enzyme';

describe('TicTacToe Game', () => {
    // using enzyme
    it('should change state when clicking on the board', () => {
        const game = shallow(<Game />);
        const sq0 = game.find('button').at(0);
        const sq1 = game.find('button').at(1);

        expect(game.state().xIsNext).toEqual(true);
        sq0.simulate('click');
        // expect(game.state().xIsNext).toEqual(false);
        // console.log(game.state());
        // console.log(sq0.simulate('click'))
        // console.log(game.state());

        // sq0.simulate('click');
        // expect(sq1.props().disabled).toEqual(true);
        //
        // sq0.simulate('click');
        // expect(sq1.props().disabled).toEqual(false);
    });
});
//
// test('Game changes state when clicked', () => {
//     let f = (i: number) => console.log("f of " + i);
//     let squares = [
//         'X','O','X',
//         '0','0','X',
//         'X','X','0'
//     ];
//
//
//     const component = renderer.create(
//         <Game />,
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//
//     let b = component.getInstance()
//
//     console.log(tree.children);
//
//     component.getInstance().find()
//
//
//     // manually trigger the callback
//     // tree.props.onMouseEnter();
//     // // re-rendering
//     // tree = component.toJSON();
//     // expect(tree).toMatchSnapshot();
//
//     // manually trigger the callback
//     // tree.props.onMouseLeave();
//     // // re-rendering
//     // tree = component.toJSON();
//     // expect(tree).toMatchSnapshot();
// });
//
//

