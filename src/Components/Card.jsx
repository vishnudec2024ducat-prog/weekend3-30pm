import React from 'react'

const Card = ({elm:{imgAdd,title,des}}) => {
  // const {imgAdd,title} = props
  return (
    <div className="myCard">
      <img src={imgAdd} alt="" />
      <h1>{title}</h1>
      <p>{des}</p>
    </div>
  );
}

export default Card