import React from 'react'
import Footer from './Footer'

const Third = ({ foot, cardColor }) => {
  return (
    <div className={`bg-${cardColor} py-3 `}>
      <div className="container">
        <div className="row">
          {foot.map((elm, ind) => (
            <Footer key={ind} elm={elm} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Third