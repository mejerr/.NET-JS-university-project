import { saveAs } from 'file-saver'


export const downloadImage = (image) => {
  saveAs('image_url', `${image}`)
};