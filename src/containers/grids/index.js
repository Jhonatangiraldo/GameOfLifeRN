import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import Grid from '../../components/grid';

class GridsContainer extends Component {

  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <ScrollView horizontal={true}>
              <View>
                {
                  this.props.grids.map((row) => {
                    return (
                      <View key={'a'} style={{ flexDirection: 'row' }}>
                        {
                          row.map((column) => {
                            return (
                              <View key={'b'} >
                                <Grid key={'c'} life={column} />
                              </View>
                            )
                          })
                        }
                      </View>
                    )
                  })
                }
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default GridsContainer;
