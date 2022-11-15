const Menu = (props) => {
  return (
    <div className="menu-box">
      <div className="menu"></div>
      {props.content}
    </div>
  );
};

export default Menu;
