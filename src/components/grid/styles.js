import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  cell: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'gray'
  },
  cell__dead: {
    backgroundColor: '#ffefd5',
  },
  cell__alive: {
    backgroundColor: '#483d8b',
  }
});
export default styles;
