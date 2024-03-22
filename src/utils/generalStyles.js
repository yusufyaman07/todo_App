import {StyleSheet} from 'react-native';
import {colors} from './constants';

const generalStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  todosWrapper: {
    marginHorizontal: 20,
    marginVertical: 30,
    flex: 1,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  bgWhite: {
    backgroundColor: colors.bgWhite,
  },
  scrollView: {
    flexGrow: 1,
  },
});
export default generalStyles;
