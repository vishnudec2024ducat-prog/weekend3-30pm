import React from "react";
// https://fakestoreapi.com/products
const Product = ({ elm: { title, price, description, image, category } }) => {
  return (
    <>
      <div className="col-md-4 border">
        <div className="row g-0 border rounded overflow-hidden align-items-center flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col-8 p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary-emphasis">
              {title}
            </strong>
            <h5 className="mb-0">{category}</h5>
            <div className="mb-1 text-body-secondary">${price}</div>
            <p className="card-text mb-auto overflow-hidden" style={{height:"10vh"}}>
             {description}
            </p>
            
          </div>
          <div className="col-4  d-lg-block">
            <img
              src={image}
              alt=""
              className="bd-placeholder-img "
              style={{ height: "200px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
