import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = props => {
  const images = props.images.map(({description, id, urls}) => {
    return <ImageCard key={id} image={{desc: description, src:urls.regular}} />
  })

  return (
    <div className="image-list"> {images} </div>
  )
}

export default ImageList;