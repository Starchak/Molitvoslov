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
    track: {
      id: '2222',
      url:
        'https://drive.google.com/uc?export=download&id=1VM9_umeyzJn0v1pRzR1BSm9y3IhZ3c0E',
      title: 'Soul Searching (Demo)',
      artist: 'David Chavez',
      artwork: 'https://picsum.photos/200',
      duration: 60,
    },
  },
  {
    title: 'pray_2_title',
    sub_title: 'pray_2_sub_title',
    text: 'pray_2_text',
    img: img_2,
    img_active: img_2_active,
    id: '2',
    track: {
      id: '2',
      url: require('../../assets/audio/test.mp3'),
      title: 'pray_2_title',
      artwork: img_2_active,
      artist: '',
      duration: 60,
    },
  },
  {
    title: 'pray_3_title',
    sub_title: 'pray_3_sub_title',
    text: 'pray_3_text',
    img: img_3,
    img_active: img_3_active,
    id: '3',
    track: {
      id: '3',
      url: require('../../assets/audio/test.mp3'),
      title: 'pray_3_title',
      artwork: img_3_active,
      artist: '',
      duration: 60,
    },
  },
  {
    title: 'pray_4_title',
    sub_title: 'pray_4_sub_title',
    text: 'pray_4_text',
    img: img_4,
    img_active: img_4_active,
    id: '4',
    track: null,
  },
];

export default prays;
