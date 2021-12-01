import {useContext} from 'react';

import "./Card.css"

import {CardControllerContext} from './CardController'


export default function VideoCard({
  imageSrc,
  imageCaption,
  videoSrc,
  idx,
  className
}) {
  let {dispatch} = useContext(CardControllerContext);

  return (
    <div
      className={"card-container " + className}
      onClick={
        () => {
          dispatch({
            type: "click",
            idx: idx,
            videoSrc: videoSrc
          });
        }
      }
    >
      <img
        src={imageSrc}
        alt={imageCaption}
        className={"card-image " + className}
      />
      <p>
        {imageCaption}
      </p>
    </div>
  );
}
