import {  useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { loginUser , registerUser } from '../actions/users';

const Auth = ({ history }) => {
  const [activeTab, setActiveTab] = useState("Login");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onClickSmallButton = useCallback(() => {
    if (activeTab === "Login") setActiveTab("Register");
    if (activeTab === "Register") setActiveTab("Login");

  }, [activeTab]);

  const onChangeUsername = (e) => {
    if (e.target) {
      setUsername(e.target.value);
    }
  };

  const onChangePassword = (e) => {
    if (e.target) {
      setPassword(e.target.value);
    }
  };

  const onClick = useCallback(() => {
    if (activeTab === "Login") {
      dispatch(loginUser({ username, password, onSuccess: () => history.push("/") }));
      return;
    }

    dispatch(registerUser({ username, password, onSuccess:  onClickSmallButton }));
  }, [activeTab, dispatch, onClickSmallButton, username, password, history]);

  return (
      <div className="authentication-wrapper">
        <div className="authentication-content">
          <div className="title">{activeTab === "Login" ? "Login" : "Register"}</div>
          <input type="text" className="authentication-input" placeholder="username" onChange={onChangeUsername}/>
          <input type="text" className="authentication-input" placeholder="password" onChange={onChangePassword}/>
          <button type="submit" className="authentication-btn"onClick={onClick}>{activeTab === "Login" ? "Login" : "Register"}</button>
          <button type="submit" className=" authentication-btn small"onClick={onClickSmallButton}>{activeTab === "Login" ? "Click to register" : "Click to login"}</button>
        </div>
      </div>
  )
};

export default withRouter(Auth);