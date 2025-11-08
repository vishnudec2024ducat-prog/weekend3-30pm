import React from 'react'

const Second = ({ duration, post, text, cardColor }) => {
  return (
    <div>
      <h5 className={`text-${cardColor}`}>{duration} ago</h5>
      <h1>Post {post}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Second