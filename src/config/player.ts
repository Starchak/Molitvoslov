import TrackPlayer, {Event} from 'react-native-track-player';

module.exports = async function playerService() {
  console.log('INIT');
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());

  TrackPlayer.addEventListener(Event.RemoteStop, () => TrackPlayer.destroy());
};
