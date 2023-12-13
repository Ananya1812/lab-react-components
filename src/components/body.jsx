import React from 'react';

const Body = ({ images }) => {
  return (
    <div>
      {images.map(image => {
        return (
          <div key={image.id} className="column">
            <img src={image.img} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default Body;
