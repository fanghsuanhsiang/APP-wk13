import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import albums from '../json/albums.json';
import Panel from './Panel';

// Make a component
class PageOne extends Component {
  state = { albums: [] };

  componentWillMount() {
    this.setState({ albums });
    console.log(this.state);
  }

  goToPageTwo = (album) => {
    this.props.navigation.navigate('Details', { ...album });
  };


  render() {
    return (
      <ScrollView>
        <List>
          {this.state.albums.map((album) => (
            <Panel
              album={{...album}}
              nav={this.props.navigation}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default PageOne;
