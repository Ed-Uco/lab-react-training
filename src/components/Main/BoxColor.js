const BoxColor = (props) => {
  return (
    <div
      classname="box2"
      style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}
    >
      rgb({props.r},{props.g},{props.b}) 
    </div>
  );
};

export default BoxColor;
