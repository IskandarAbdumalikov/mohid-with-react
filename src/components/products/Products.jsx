import React, { useState } from "react";
import { DATA } from "../../constants/ProductData";
import "./products.scss";
import ProductModul from "../productModul/ProductModul";
import stars from "../../assets/stars.svg"
const Products = () => {
  const [product, setProduct] = useState(null);
  const products = DATA?.map((el) => (
    <div key={el.id} className="product__card">
      <img className="card__img" src={el.url} alt="" />
      <div className="product__card__info">
        <h1>{el.name}</h1>
        <div className="product__price">
          {el.oldPrice>el.newPrice?<del>${el.oldPrice}</del>:""}
          <h3>${el.newPrice}</h3>
        </div>
        <img className="product__card__stars" src={stars} alt="" />
        <button onClick={() => setProduct(el)} className="see__details-btn">
          See more details
        </button>
      </div>
    </div>
  ));
  return (
    <>
      <section className="products__section  container">
        <h3 className="products__theme">Find your favourite smart watch.</h3>
        <h2 className="products__title">Our Latest Products</h2>
        <div className="product__wrapper">{products}</div>
        {product ? <ProductModul data={product} close={setProduct} /> : <></>}
        <button className="view-more__btn">View more</button>
      </section>
    </>
  );
};

export default Products;
