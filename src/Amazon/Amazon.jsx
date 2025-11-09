import React, { useState } from "react";
import Product from "./Product";
import {data} from "./data.js"
import NotFound from "./NotFound.jsx";
const Amazon = () => {
    const [inpVal,setInpVal] = useState()
    const [productList,setProductList] = useState(data)
   
    const handleSraech = ()=>{
       let afterSraech = data.filter((elm) =>
         elm.title.toLowerCase().includes(inpVal.toLowerCase())
       );
        console.log(afterSraech)
       setProductList(afterSraech)
    }
    const handlekey = (e)=>{
        if(e.keyCode==13){
          let afterSraech = data.filter((elm) =>
            elm.title.toLowerCase().includes(inpVal.toLowerCase())
          );
          setProductList(afterSraech);
        }
    }
  return (
    <div className="container">
      <div className="my-2 d-flex align-items-center">
        <input type="text" onChange={(e) => setInpVal(e.target.value)} onKeyDown={handlekey} />
        <button className="btn btn-success mx-3" onClick={handleSraech}>
          Search
        </button>
      </div>
      <div className="row">
        {productList.length == 0 ? (
          <NotFound />
        ) : (
          productList.map((elm,ind) => <Product key={ind} elm={elm} />)
        )}
      </div>
    </div>
  );
};

export default Amazon;
