import { useCallback } from 'react';
import france from '../assets/france.jpg'
import china from '../assets/china.jpg'
import { saveAs } from 'file-saver'

const imagesArray = [{
  imageUrl: france,
  exportUrl: 'france'
}, {
  imageUrl: china,
  exportUrl: 'china'
}
];

const Gallery = () => {
    const downloadImage = useCallback((image) => {
      saveAs('image_url', `${image}.jpg`)
    }, []);

  return (
    <div className="gallery-container content">
      {imagesArray.map(({ imageUrl, exportUrl }) => (
        <div className="gallery-image" key={imageUrl} style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover'}}>
          <div className="gallery-image-buttons">
            <div className="image-open-btn button"><i className="fas fa-info-circle"></i></div>
            <div className="image-download-btn button" onClick={() => downloadImage(exportUrl)}><i className="fas fa-arrow-circle-down"></i></div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Gallery;