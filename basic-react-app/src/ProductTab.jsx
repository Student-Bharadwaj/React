import Product from "./Product.jsx";
import "./Product.css";

function ProductTab() {
  return (
    <div className="ProductTab">
       <Product
        title="mouse"
        desc={["high quality", "gaming latency"]}
        oldprice={10000}
        newprice={5000}
      />
      <Product
        title="mouse"
        desc={["high quality", "gaming latency"]}
        oldprice={10000}
        newprice={5000}
      />
      <Product
        title="mouse"
        desc={["high quality", "gaming latency"]}
        oldprice={10000}
        newprice={5000}
      />

    </div>
     
  );
}
export default ProductTab;
