import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { addComment, deleteComment } from "../actions/comments";
import { initComments } from "../actions/comments";
import { downloadImage } from "../utils/helper";

const ImageDetails = ({ history, match: { params: { id } }}) => {
  const comments = useSelector(state => state.comments.comments);
  const [commentText, setCommentText] = useState('');
  const images = useSelector(state => state.images.images);
  const imageTitle= images && images[id].exportUrl.substr(0, images[id].exportUrl.indexOf('.'));
  const dispatch = useDispatch();
  console.log(comments, 888);

  const inputChangeHandler = (event) => {
    setCommentText(event.target.value);
  };

  const onAddComment = useCallback(() => {
    if (!commentText.length) {
      return;
    };

    dispatch(addComment(id, commentText));
    document.querySelector('.add-comment-input').value='';
    setCommentText('');
  }, [dispatch, commentText, id]);

  const onDeleteComment = useCallback((textId) => {
    dispatch(deleteComment(id, textId));
  }, [dispatch, id]);


  useEffect(() => {
    if (!images[id]) {
      history.push(`/`);
    }

    dispatch(initComments(id));
  }, [dispatch, images, id, history]);

  return (
    <div className="image-details-container content">
      <div className="title">{imageTitle}</div>
        <div className="image-file" style={{ backgroundImage: `url(${images[id]?.imageUrl})`}}/>
        <div className="download-btn" onClick={() => downloadImage(images[id].exportUrl)}><i className="fas fa-arrow-circle-down"></i></div>
        <div className="add-comment-title">Add Comment</div>
        <div className="add-comment-container">
          <input className="add-comment-input" onChange={inputChangeHandler} />
          <div className="add-comment-btn" onClick={(event) => onAddComment(event)}><i className="fas fa-plus-circle"></i></div>
        </div>
        <div className="comments-container">
          {comments[id]?.map(({ text, id }) => (
              <div key={id} className="comment-wrapper">
                <div className="comment">{text}</div>
                <div className="delete-btn" onClick={() => onDeleteComment(id)}><i className="fas fa-trash-alt"></i></div>
              </div>
          ))}
        </div>
    </div>
  )
};

export default withRouter(ImageDetails);