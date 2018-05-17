import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Title from '../../components/title';
import GridsContainer from '../grids';
import styles from './styles';
import { fillArray, setInitialLife } from '../../utils';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grids: [],
      size: 10,
    };
  }

  componentDidMount() {
    const { size } = this.state;
    const grids = fillArray(size);
    this.setState({ grids });
    const newGrids = setInitialLife(grids);
    this.setState({ grids: newGrids });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.title}>
          <Title title={'Game of Life'} />
        </View>
        <View style={styles.grids}>
          <GridsContainer grids={this.state.grids} />
        </View>
      </View>
    );
  }
}

export default Main;
