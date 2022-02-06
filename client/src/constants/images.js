import china from '../assets/china.jpg';
import snow from '../assets/snow.png';
import boy from '../assets/boy.png';
import neon from '../assets/neon.png';
import flowers from '../assets/flowers.png';
import eyes from '../assets/eyes.png';

export const imagesArray = [{
  id: 0,
  imageUrl: snow,
  exportUrl: 'snow.png'
}, {
  id: 1,
  imageUrl: china,
  exportUrl: 'china.jpg'
},
{
  id: 2,
  imageUrl: boy,
  exportUrl: 'boy.png'
},
{
  id: 3,
  imageUrl: neon,
  exportUrl: 'neon.png'
},
{
  id: 4,
  imageUrl: flowers,
  exportUrl: 'flowers.png'
},
{
  id: 5,
  imageUrl: eyes,
  exportUrl: 'eyes.png'
}];

export const INIT_IMAGES = 'INIT_IMAGES';
export const SET_IMAGES = 'SET_IMAGES';
export const ADD_IMAGE = 'ADD_IMAGE';