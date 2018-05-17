import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './styles';

const Title = ({ title }) =>
  (<View style={styles.wrapperTitle}>
    <Text style={styles.title}>
      {title}
    </Text>
  </View>);

export default Title;