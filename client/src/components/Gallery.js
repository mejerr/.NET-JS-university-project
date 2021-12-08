import { useCallback, useState } from 'react';
import { withRouter } from 'react-router';
import { imagesArray } from '../constants/images';
import { downloadImage } from '../utils/helper';

const Gallery = ({ history }) => {
  const [images, setImages] = useState(
    imagesArray.map(({ id, imageUrl, exportUrl }) => ({
      id,
      imageUrl,
      exportUrl
    }))
  );

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];

      setImages([...images, {
        id: images[images.length -1].id + 1,
        imageUrl: URL.createObjectURL(img),
        exportUrl: img.name,
      }]);
    }
  };

  const openImageDetails = useCallback((imageId) => {
    history.push(`/gallery/images/${imageId}`);
  }, [history]);


  return (
    <div className="gallery-container content">
      {images.map((image) => (
        <div className="gallery-image" key={image.id} style={{ backgroundImage: `url(${image.imageUrl})`, backgroundSize: 'cover'}}>
          <div className="gallery-image-buttons">
            <div className="image-open-btn button" onClick={() => openImageDetails(image.id)}><i className="fas fa-info-circle"></i></div>
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

export default withRouter(Gallery);