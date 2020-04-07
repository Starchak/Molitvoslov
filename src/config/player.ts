import TrackPlayer, {Event} from 'react-native-track-player';

module.exports = async function () {
  console.log('INIT');
  TrackPlayer.addEventListener(
    Event.RemotePlay,
    async () => await TrackPlayer.play(),
  );

  TrackPlayer.addEventListener(
    Event.RemotePause,
    async () => await TrackPlayer.pause(),
  );

  TrackPlayer.addEventListener(
    Event.RemoteStop,
    async () => await TrackPlayer.destroy(),
  );
};
