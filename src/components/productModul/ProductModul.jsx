import React from "react";
import "./ProductModul.scss";

const ProductModul = ({ data, close }) => {
  return (
    <>
      <div onClick={() => close(null)} className="modul__owerlay"></div>
      <div className="product__detail">
        <h1 onClick={() => close(null)} className="close-btn">
          X
        </h1>
        <div className="module__left">
          <img src={data.url} width={300} alt="" />
        </div>
        <div className="module__right">
          <h1>{data.name}</h1>
          <div className="product__price">
            {data.oldPrice > data.newPrice ? <del>${data.oldPrice}</del> : ""}
            <h3>${data.newPrice}</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            vitae error! Ipsam doloremque est nam animi magnam doloribus
            similique impedit dignissimos hic enim, voluptatum tenetur,
            temporibus repudiandae ut, in necessitatibus?
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductModul;
