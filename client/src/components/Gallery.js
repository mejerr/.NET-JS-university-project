import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { addImage } from '../actions/images';
import { downloadImage } from '../utils/helper';

const Gallery = ({ history }) => {
  const dispatch = useDispatch();
  const images = useSelector(state => state.images.images);

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];

      dispatch(addImage([...images, {
        id: images.length ? images[images.length - 1].id + 1 : 0,
        imageUrl: URL.createObjectURL(img),
        exportUrl: img.name,
      }]));
    }
  };

  const openImageDetails = useCallback((imageId) => {
    history.push(`/gallery/images/${imageId}`);
  }, [history]);

  return (
    <div className="gallery-container content" style={{ height: !images.length && '210px'}}>
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