import * as ttt from './TicTacToe'

describe('TicTacToe', () => {

    it('should work for base case', () => {
        expect(ttt.calculateWinner(
            [])).toBe(
            undefined);
    });

    it('should work for fake X winner case', () => {
        expect(ttt.calculateWinner(
            [
                'X','X','X',
                'X','X','X',
                'X','X','X'
            ])).toBe(
            'X');

        expect(ttt.calculateWinner(
            [
                'q','q','q'
            ])).toBe(
            'q');
    });

    it('should work for real no winner case', () => {
        expect(ttt.calculateWinner(
            [
                'X','X','O',
                'O','O','X',
                'X','O','X'
            ])).toBe(
            undefined);
    });

    it('should work for real winner case', () => {
        expect(ttt.calculateWinner(
            [
                'O','X',undefined,
                undefined,'O','X',
                'X',undefined,'O'
            ])).toBe(
            'O');
    });
});
