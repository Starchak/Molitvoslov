import React, {Component} from 'react';

import {Text, View} from 'react-native';

import styles from './styles';

type Props = {};
type State = {};

class ContactContent extends Component<Props, State> {
  render() {
    return (
      <View style={styles.contact_content}>
        <Text>Hello world</Text>
      </View>
    );
  }
}

export {ContactContent};
