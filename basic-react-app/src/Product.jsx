import "./Product.css";

function Product({ title, desc, oldprice ,newprice }) {
  let descList = desc.map((des) => <li>{des}</li>);
  let priceStyle = { backgroundColor: "rgb(201, 201, 47)"};
  let oldpricestyle={textDecoration:"line-through" }
  return (
    <div className="Product">
      <h2>{title}</h2>
      <p>{descList}</p>
      <hr />
      <div style={priceStyle}>
        <h4><span style={oldpricestyle}>{oldprice} </span> <br /> 50% off-  <span> {newprice}</span> 
        </h4>
      </div>
    </div>
  );
}

export default Product;
