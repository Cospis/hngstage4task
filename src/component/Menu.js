import x from "../component/img/x.png";
const Menu = (props) => {
  return (
    <div className="menu-box">
      <div className="menu">
        <div className="close-icon" onClick={props.handleClose}>
          <img src={x} alt="x" />
        </div>
      </div>
      <hr />
      {props.content}
    </div>
  );
};

export default Menu;
