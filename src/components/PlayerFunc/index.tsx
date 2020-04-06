import TrackPlayer, {Capability, Track, useProgress,} from 'react-native-track-player';
import {Image, TouchableHighlight, View} from 'react-native';
import styles from '../Player/styles';
import pause from '../../assets/img/pause.png';
import React from 'react';
import {ProgressBar} from '../ProgressBar';

function Progress() {
  let progress = useProgress();
  return <ProgressBar progress={progress}/>;
}

type Props = {
  track: Track;
};

export default function Player(props: Props) {
  console.log('update');
  TrackPlayer.destroy();
  TrackPlayer.setupPlayer().then(() => {
    // The player is ready to be used
  });
  TrackPlayer.updateOptions({
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.Stop,
      Capability.SeekTo,
    ],
    icon: require('../../assets/img/pray.png'),
  });
  TrackPlayer.add(props.track).then(function () {
    TrackPlayer.play();
  });
  return (
    <View style={styles.player}>
      <TouchableHighlight
        style={styles.play}
        onPress={() => TrackPlayer.pause()}>
        <Image style={styles.play_img} source={pause}/>
      </TouchableHighlight>
      <Progress/>
    </View>
  );
}
