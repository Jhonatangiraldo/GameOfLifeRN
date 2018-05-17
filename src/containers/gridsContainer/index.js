import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import Grids from '../grids';

export default GridsContainer = ({ grids }) =>
  (<View>
    {
      // Vertical Scroll
    }
    <ScrollView>
      <View>
        {
          // Horizontal Scroll
        }
        <ScrollView horizontal={true}>
          <View>
            {
              // Group of grids
            }
            <Grids grids={grids} />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  </View>);
