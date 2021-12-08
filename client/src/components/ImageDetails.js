import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { addComment, deleteComment } from "../actions/comments";
import { imagesArray } from "../constants/images";
import { downloadImage } from "../utils/helper";

const ImageDetails = ({ match: { params: { id } }}) => {
  const [commentText, setCommentText] = useState('');
  const comments = useSelector(state => state.comments.comments);
  const dispatch = useDispatch();
  console.log(comments, 123)

  const inputChangeHandler = (event) => {
    setCommentText(event.target.value);
  }

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

  return (
    <div className="image-details-container content">
      <div className="title">Image title</div>
        <img className="image-file" src={imagesArray[id].imageUrl} alt="test"/>
        <div className="download-btn" onClick={() => downloadImage(imagesArray[id].exportUrl)}><i className="fas fa-arrow-circle-down"></i></div>
        <div className="add-comment-title">Add Comment</div>
        <div className="add-comment-container">
          <input className="add-comment-input" onChange={inputChangeHandler} />
          <div className="add-comment-btn" onClick={(event) => onAddComment(event)}><i className="fas fa-plus-circle"></i></div>
        </div>
        <div className="comments-container">
          {comments[id]?.map(({ text, textId }) => (
              <div key={textId} className="comment-wrapper">
                <div className="comment">{text}</div>
                <div className="delete-btn" onClick={() => onDeleteComment(textId)}><i className="fas fa-trash-alt"></i></div>
              </div>
          ))}
        </div>
    </div>
  )
};

export default withRouter(ImageDetails);