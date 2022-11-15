import x from "../component/img/x.png";
const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <div className="closeopen">
          <h1> Connect wallet</h1>
          <span className="close-icon" onClick={props.handleClose}>
            <img src={x} alt="x" />
          </span>
        </div>
        <hr />
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
