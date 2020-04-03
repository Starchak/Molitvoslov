import React, {Component} from 'react';

import {Text, Image, TouchableWithoutFeedback, View} from 'react-native';
import {translate} from '../../config/translate';

import styles from './styles';
import {Size} from '../../config/typography';

type Props = {
  bg: any;
  bg_active: any;
  title: string;
};
type State = {
  pressed: boolean;
};

class PrayButton extends Component<Props, State> {
  state = {
    pressed: false,
  };

  render() {
    return (
      <TouchableWithoutFeedback
        onPressIn={() => this.setState({pressed: true})}
        onPressOut={() => this.setState({pressed: false})}>
        <View
          style={
            this.state.pressed ? [styles.pray_btn_active] : [styles.pray_btn]
          }>
          <Image
            source={this.state.pressed ? this.props.bg_active : this.props.bg}
            style={styles.pray_btn_img}
          />
          <Text style={[styles.pray_btn_text, Size(20)]}>
            {this.props.title ? this.props.title : ''}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export {PrayButton};
