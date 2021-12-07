import { withRouter } from "react-router-dom";

const Header =(props) => {
  const {  history } = props;

  return (
    <div className="header-container">
      <div className="ref-tags">
        <div className="tag homepage" onClick={() => history.push("/")}><i className="fas fa-home"></i></div>
        {/* <div className="tag gallery" onClick={() => history.push("/gallery")}><i className="fas fa-images"></i></div> */}
      </div>
      <div className="title">My new website</div>
    </div>
  );
};


export default withRouter(Header);
