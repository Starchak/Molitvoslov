import React, {Component} from 'react';

import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';

import styles from './styles';
import {navigate} from '../../config/nav';
import {translate} from '../../config/translate';

type data = {
  title: string;
  text: string;
  img: any;
  img_active: any;
  id: number;
};
type Props = {
  data: data;
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
        onPress={() => navigate({name: 'Pray', params: this.props})}
        onPressIn={() => this.setState({pressed: true})}
        onPressOut={() => this.setState({pressed: false})}>
        <View
          style={
            this.state.pressed ? [styles.pray_btn_active] : [styles.pray_btn]
          }>
          <Image
            source={
              this.state.pressed
                ? this.props.data.img_active
                : this.props.data.img
            }
            style={styles.pray_btn_img}
          />
          <Text style={styles.pray_btn_text}>
            {translate(this.props.data.title)}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export {PrayButton};
