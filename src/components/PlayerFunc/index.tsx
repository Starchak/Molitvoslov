import TrackPlayer, {Capability, Track} from 'react-native-track-player';
import {Image, TouchableOpacity, View, AsyncStorage} from 'react-native';
import styles from '../Player/styles';
import play_img from '../../assets/img/play_active.png';
import download_img from '../../assets/img/play.png';
import pause_img from '../../assets/img/pause.png';
import {currentLang} from '../../config/translate';
import React, {useEffect, useState} from 'react';
import {ProgressBar} from '../ProgressBar';
import RNFetchBlob from 'rn-fetch-blob';

type Props = {
  track: Track;
  url: object;
};

let playInterval: any;

export default function Player(props: Props) {
  const [isDownload, setIsDownload] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [progress, setProgress] = useState({position: 0, duration: 0});

  useEffect(() => {
    console.log('mount');
  });

  const Progress = () => {
    let progress: any;

    TrackPlayer.getPosition().then((position) => {
      console.log(position);
      console.log(props);
      progress = {position: position, duration: props.track.duration};
      setProgress(progress);
      if (position >= progress.duration - 0.8) {
        Pause(true);
      }
    });
  };

  async function SeekTo(pos: number) {
    TrackPlayer.getPosition().then((position) => {
      console.log(position);
      TrackPlayer.seekTo(pos).then((p) => {
        console.log(p);
      });
    });
  }
  async function isExist() {
    AsyncStorage.getItem(props.track.id + '_' + currentLang).then((val) => {
      // console.log(val);
      // console.log(props.url[currentLang]);
      if (val) {
        RNFetchBlob.fs.exists(val).then((exist) => {
          // console.log(`file ${exist ? '' : 'not'} exists`);
          exist ? setTrackUrl(val) : console.log('Error');
          PlayPause(val);
        });
      }
    });
  }
  async function Download(){
    RNFetchBlob.config({
      fileCache: true,
    })
      .fetch('GET', props.url[currentLang], {})
      .then((res) => {
        let path = res.path();
        // console.log('The file saved to ', path);
        AsyncStorage.setItem(props.track.id + '_' + currentLang, path);
        setTrackUrl(path);
      });
  }
  async function PlayPause() {
    if (isDownload) {
      // Vlad write code for download here
      setIsDownload(false);
    }

    if (isPlay) {
      Pause(false);
    } else {
      console.log('Play');
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

      TrackPlayer.add(props.track).then(() => {});

      TrackPlayer.play();

      playInterval = setInterval(Progress, 1000);

      setIsPlay(true);
    }
  }

  const Pause = (isStop: boolean) => {
    if (isStop) {
      TrackPlayer.stop();
    } else {
      TrackPlayer.pause();
    }
    setIsPlay(false);
    clearInterval(playInterval);
  };

  return (
    <View style={styles.player}>
      <TouchableOpacity style={styles.play} onPress={() => PlayPause()}>
        {isDownload ? (
          <Image style={styles.play_img} source={download_img} />
        ) : isPlay ? (
          <Image style={styles.play_img} source={pause_img} />
        ) : (
          <Image style={styles.play_img} source={play_img} />
        )}
      </TouchableOpacity>
      <ProgressBar SeekTo={SeekTo} progress={progress} />
    </View>
  );
}
