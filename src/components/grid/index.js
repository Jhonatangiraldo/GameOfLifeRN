import React, { Component } from 'react';
import {
  View
} from 'react-native';
import styles from './styles';

export default Grid = (props) =>
  (
    <View>
      <View style={[styles.cell, props.life ? styles.cell__alive : styles.cell__dead]}>
      </View>
    </View>
  );