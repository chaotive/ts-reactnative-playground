import * as React from 'react';
import {Game} from "../../../main/ts/react/components/Game";
import {shallow, mount} from 'enzyme';

describe('TicTacToe Game', () => {
    // using enzyme
    it('should change state from initial state when clicking on the board', () => {
        const game = mount(<Game />);
        const sqs = game.find('button');

        expect(game.state('xIsNext')).toEqual(true);
        expect(game.state('stepNumber')).toEqual(0);
        expect(game.state('history')).toEqual([[]]);
        sqs.at(0).simulate('click');
        expect(game.state('xIsNext')).toEqual(false);
        expect(game.state('stepNumber')).toEqual(1);
        expect(game.state('history')).toEqual([
            [], ["X"]
        ]);

        game.unmount()
    });

    it('should not change state when clicking on the same board square twice', () => {
        const game = mount(<Game />);
        const sqs = game.find('button');

        sqs.at(0).simulate('click');
        expect(game.state('xIsNext')).toEqual(false);
        expect(game.state('stepNumber')).toEqual(1);
        expect(game.state('history')).toEqual([
            [], ["X"]
        ]);
        sqs.at(0).simulate('click');
        expect(game.state('xIsNext')).toEqual(false);
        expect(game.state('stepNumber')).toEqual(1);
        expect(game.state('history')).toEqual([
            [], ["X"]
        ]);

        game.unmount()
    });

    it('should allow you to win the game', () => {
        const game = mount(<Game />);
        const sqs = game.find('button');

        expect(game.state('xIsNext')).toEqual(true);
        expect(game.state('stepNumber')).toEqual(0);
        expect(game.state('history')).toEqual([[]]);
        sqs.at(0).simulate('click');
        sqs.at(1).simulate('click');
        sqs.at(4).simulate('click');
        sqs.at(5).simulate('click');
        sqs.at(8).simulate('click');
        expect(game.state('xIsNext')).toEqual(false);
        expect(game.state('stepNumber')).toEqual(5);
        expect(game.state('history')).toEqual([
            [],
            ["X"],
            ["X", "O"],
            ["X", "O", undefined, undefined, "X"],
            ["X", "O", undefined, undefined, "X", "O"],
            ["X", "O", undefined, undefined, "X", "O", undefined, undefined, "X"],
        ]);

        sqs.at(2).simulate('click');
        expect(game.state('xIsNext')).toEqual(false);
        expect(game.state('stepNumber')).toEqual(5);
        expect(game.state('history')).toEqual([
            [],
            ["X"],
            ["X", "O"],
            ["X", "O", undefined, undefined, "X"],
            ["X", "O", undefined, undefined, "X", "O"],
            ["X", "O", undefined, undefined, "X", "O", undefined, undefined, "X"],
        ]);

        game.unmount()
    });
});
