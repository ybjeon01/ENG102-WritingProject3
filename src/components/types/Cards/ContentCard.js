import {useContext} from 'react';

import "./Card.css"

import {CardControllerContext} from './CardController'


export default function ContentCard({
  imageSrc,
  imageCaption,
  children,
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
            children: children
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
