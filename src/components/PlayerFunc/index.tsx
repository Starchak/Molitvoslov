import TrackPlayer, {
  Capability,
  Track,
  useProgress,
} from 'react-native-track-player';
import {Image, TouchableHighlight, View} from 'react-native';
import styles from '../Player/styles';
import pause from '../../assets/img/pause.png';
import React, {useEffect} from 'react';
import {ProgressBar} from '../ProgressBar';

type Props = {
  track: Track;
  test: any;
};

export default function Player(props: Props) {
  useEffect(() => {
    console.log('mount');

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
    TrackPlayer.add(props.track).then(() => {
      TrackPlayer.play();
    });
  });

  const Progress = () => {
    let progress = useProgress();
    return <ProgressBar SeekTo={SeekTo} progress={progress} />;
  };

  const SeekTo = (pos: number) => {
    console.log(pos);
    TrackPlayer.seekTo(pos);
  };

  return (
    <View style={styles.player}>
      <TouchableHighlight
        style={styles.play}
        onPress={() => TrackPlayer.seekTo(10)}>
        <Image style={styles.play_img} source={pause} />
      </TouchableHighlight>
      <Progress SeekTo={SeekTo} />
    </View>
  );
}
