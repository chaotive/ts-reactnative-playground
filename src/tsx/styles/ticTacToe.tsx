import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  game: {
    flex: 1,
  },
  gameTitle: {
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },
  gameTitleText: {
    fontSize: 34
  },
  gameBoard: {
    flex: 2,
  },
  gameInfo: {
    flex: 1
  },
  gameInfoStatus: {
    alignItems: 'center',
    backgroundColor:'yellow'
  },
  board: {
    flex: 1,
    flexDirection: 'column'
  },
  boardRow: {
    flex: 1,
    flexDirection: 'row'
  },
  squareContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
    //justifyContent: 'center'
  },
  squareText: {
    fontSize: 50
  }
});

export default styles;
