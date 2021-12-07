import { Fragment } from 'react';
import france from '../assets/france.jpg'

const imagesArray = [france, france, france, france, france, france];

const Gallery = () => {
  return (
    <div className="gallery-container content">
      {imagesArray.map(el => (
        <div className="gallery-image" key={el} style={{ backgroundImage: `url(${el})`, backgroundSize: 'cover'}}>
          <div className="gallery-image-buttons">
            <div className="image-open-btn button"><i className="fas fa-info-circle"></i></div>
            <div className="image-download-btn button"><i className="fas fa-arrow-circle-down"></i></div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Gallery;