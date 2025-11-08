import React from 'react'

const Footer = ({elm:{footNum,footText}}) => {
  return (
    <div className="col-md-4 text-white ">
      <h6 className='fs-1'>{footNum}</h6>
      <h6 className='fs-5'>{footText}</h6>
    </div>
  );
}

export default Footer