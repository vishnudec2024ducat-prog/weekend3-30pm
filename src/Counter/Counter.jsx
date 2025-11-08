import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount] = useState(0)

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto text-center border">
          <h1>
            Coun<span className="text-warning">ter</span>{" "}
            <span className="text-info">App</span>
          </h1>
          <h1>Count: {count}</h1>
          <div>
            {/* <button className='btn btn-success' onClick={()=>handleInc("ahsgdjhgd")}>inc</button> */}
            <button className="btn btn-success" 
            onClick={()=>count<10?setCount(++count):setCount(count)}>
              inc
            </button>
            <button className="btn btn-success" 
            onClick={()=>count>0?setCount(--count):setCount(count)}>
              Dec
            </button>
            <button className="btn btn-success" onClick={()=>setCount(0)}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter