import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import Grid from '../../components/grid';
import styles from './styles';

export default Grids = ({ grids }) =>
  (<View>
    {
      grids.map((row) => {
        return (<View key={'a'} style={styles.wrapperGrids}>
          {
            row.map((column) => {
              return (<View key={'b'} >
                <Grid key={'c'} life={column} />
              </View>)
            })
          }
        </View>)
      })
    }
  </View>);