import TrackPlayer from 'react-native-track-player';

module.exports = async function () {
  console.log('player init start');
  TrackPlayer.addEventListener(
    'remote-play',
    async () => await TrackPlayer.play(),
  );

  TrackPlayer.addEventListener(
    'remote-pause',
    async () => await TrackPlayer.pause(),
  );

  TrackPlayer.addEventListener(
    'remote-stop',
    async () => await TrackPlayer.destroy(),
  );
  console.log('player init finish');
};
