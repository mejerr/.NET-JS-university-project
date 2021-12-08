import { useCallback, useState } from 'react';
import france from '../assets/france.jpg'
import china from '../assets/china.jpg'
import { saveAs } from 'file-saver'

const imagesArray = [{
  imageUrl: france,
  exportUrl: 'france.jpg'
}, {
  imageUrl: china,
  exportUrl: 'china.jpg'
}];


const Gallery = () => {
  const [images, setImages] = useState(
    imagesArray.map(({ imageUrl, exportUrl }) => ({
      imageUrl,
      exportUrl
    }))
  );

  const downloadImage = useCallback((image) => {
    saveAs('image_url', `${image}`)
  }, []);

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];

      setImages([...images, {
        imageUrl: URL.createObjectURL(img),
        exportUrl: img.name
      }]);
    }
  };

  return (
    <div className="gallery-container content">
      {images.map((image) => (
        <div className="gallery-image" key={image.imageUrl} style={{ backgroundImage: `url(${image.imageUrl})`, backgroundSize: 'cover'}}>
          <div className="gallery-image-buttons">
            <div className="image-open-btn button"><i className="fas fa-info-circle"></i></div>
            <div className="image-download-btn button" onClick={() => downloadImage(image.exportUrl)}><i className="fas fa-arrow-circle-down"></i></div>
          </div>
        </div>
      ))}
      <div className="upload-btn">
        <div className="upload-icon">
          <i className="fas fa-upload"></i>
          <input type="file" className="upload-button" onChange={onImageChange}/>
        </div>
      </div>
    </div>
  )
};

export default Gallery;