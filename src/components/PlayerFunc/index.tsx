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
  });

  TrackPlayer.destroy();

  const Progress = () => {
    let progress = useProgress();
    return <ProgressBar SeekTo={SeekTo} progress={progress} />;
  };

  async function SeekTo(pos: number) {
    TrackPlayer.getPosition().then((position) => {
      console.log(position);
      TrackPlayer.seekTo(10).then((p) => {
        console.log(p);
      });
    });
  }

  async function PlayPause() {
    TrackPlayer.destroy();
    TrackPlayer.setupPlayer().then(() => {
      TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.Stop,
          Capability.SeekTo,
        ],
        compactCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.Stop,
          Capability.SeekTo,
        ],
        notificationCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.Stop,
          Capability.SeekTo,
        ],
        icon: require('../../assets/img/pray.png'),
      });
    });

    TrackPlayer.add(props.track).then(() => {
      TrackPlayer.play();
    });
  }

  return (
    <View style={styles.player}>
      <TouchableHighlight style={styles.play} onPress={() => PlayPause()}>
        <Image style={styles.play_img} source={pause} />
      </TouchableHighlight>
      <Progress SeekTo={SeekTo} />
    </View>
  );
}
