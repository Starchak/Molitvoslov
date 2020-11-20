import img_1_active from '../../assets/img/pray_list_active_bg_1.png';
import img_1 from '../../assets/img/pray_bg_1.png';
import img_2_active from '../../assets/img/pray_list_active_bg_2.png';
import img_2 from '../../assets/img/pray_bg_2.png';
import img_3_active from '../../assets/img/pray_list_active_bg_3.png';
import img_3 from '../../assets/img/pray_bg_3.png';
import img_4_active from '../../assets/img/pray_list_active_bg_4.png';
import img_4 from '../../assets/img/pray_bg_4.png';

const prays = [
  {
    title: 'pray_1_title',
    sub_title: 'pray_1_sub_title',
    text: 'pray_1_text',
    img: img_1,
    img_active: img_1_active,
    id: '1',
    url: {
      ru: 'https://molitvoslov.app/audio/ru_audio_1.mp3',
      en: 'https://molitvoslov.app/audio/en_audio_1.mp3',
      ua: 'https://molitvoslov.app/audio/ua_audio_1.mp3',
      hy: 'https://molitvoslov.app/audio/hy_audio_1.mp3',
      ro: 'https://molitvoslov.app/audio/ro_audio_1.mp3',
    },
    durations: {
      ru: 32,
      ua: 34,
      en: 29,
      ro: 30,
      hy: 41,
    },
    track: {
      id: '1',
      title: 'pray_1_title',
      artist: '',
      url: '',
      artwork: 'https://picsum.photos/200',
    },
  },
  {
    title: 'pray_2_title',
    sub_title: 'pray_2_sub_title',
    text: 'pray_2_text',
    img: img_2,
    img_active: img_2_active,
    id: '2',
    url: {
      ru: 'https://molitvoslov.app/audio/ru_audio_2.mp3',
      en: 'https://molitvoslov.app/audio/en_audio_2.mp3',
      ua: 'https://molitvoslov.app/audio/ua_audio_2.mp3',
      hy: 'https://molitvoslov.app/audio/hy_audio_2.mp3',
      ro: 'https://molitvoslov.app/audio/ro_audio_2.mp3',
    },
    durations: {
      ru: 41,
      ua: 40,
      en: 41,
      ro: 41,
      hy: 47,
    },
    track: {
      id: '2',
      title: 'pray_2_title',
      artist: '',
      url: '',
      artwork: 'https://picsum.photos/200',
    },
  },
  {
    title: 'pray_3_title',
    sub_title: 'pray_3_sub_title',
    text: 'pray_3_text',
    img: img_3,
    img_active: img_3_active,
    id: '3',
    url: {
      ru: 'https://molitvoslov.app/audio/ru_audio_3.mp3',
      en: 'https://molitvoslov.app/audio/en_audio_3.mp3',
      ua: 'https://molitvoslov.app/audio/ua_audio_3.mp3',
      hy: 'https://molitvoslov.app/audio/hy_audio_3.mp3',
      ro: 'https://molitvoslov.app/audio/ro_audio_3.mp3',
    },
    durations: {
      ru: 108,
      ua: 117,
      en: 93,
      ro: 108,
      hy: 132,
    },
    track: {
      id: '3',
      title: 'pray_3_title',
      artist: '',
      url: '',
      artwork: 'https://picsum.photos/200',
    },
  },
  {
    title: 'pray_4_title',
    sub_title: 'pray_4_sub_title',
    text: 'pray_4_text',
    img: img_4,
    img_active: img_4_active,
    id: '4',
    url: {
      ru: 'https://molitvoslov.app/audio/ru_audio_4.mp3',
      en: 'https://molitvoslov.app/audio/en_audio_4.mp3',
      ua: 'https://molitvoslov.app/audio/ua_audio_4.mp3',
      hy: 'https://molitvoslov.app/audio/hy_audio_4.mp3',
      ro: 'https://molitvoslov.app/audio/ro_audio_4.mp3',
    },
    durations: {
      ru: 57,
      ua: 61,
      en: 53,
      ro: 64,
      hy: 64,
    },
    track: {
      id: '4',
      title: 'pray_4_title',
      artist: '',
      url: '',
      artwork: 'https://picsum.photos/200',
    },
  },
];

export default prays;
