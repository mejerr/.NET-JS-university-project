import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../actions/users";

const Header =({ history }) => {
  const dispatch = useDispatch();
  const { username, isAuthenticated } = useSelector(state => state.users);

  const logoutUser = useCallback(() => {
    try {
      localStorage.setItem('token', null);
      dispatch(logout());
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  return (
    <div className="header-container">
      {isAuthenticated ?
      <div className="ref-tags">
        <div className="tag homepage" onClick={() => history.push("/")}><i className="fas fa-home"></i></div>
        <div className="tag gallery" onClick={() => history.push("/gallery")}><i className="fas fa-images"></i></div>
        <div className="tag logout" onClick={logoutUser}><i className="fas fa-sign-out-alt"></i></div>
      </div> :
      null}
      <div className="title">Gallery Website</div>
      {isAuthenticated ? <div className="username">User: {username}</div> : null}
    </div>
  );
};


export default withRouter(Header);
