import React from 'react'
import First from './First'
import Second from './Second'
import Third from './Third'

const Card = ({elm:{imgAdd,duration,post,text,foot,cardColor}}) => {
  return (
    <div className="col-md-4 text-center shadow shadow-dark border">
      <First imgAdd={imgAdd} />
      <Second
        duration={duration}
        post={post}
        text={text}
        cardColor={cardColor}
      />
      <Third foot={foot} cardColor={cardColor} />
    </div>
  );
}

export default Card