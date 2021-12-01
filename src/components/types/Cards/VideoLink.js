import {useContext} from 'react';

import {CardControllerContext} from './CardController'


export default function VideoLink({
  children,
  videoSrc,
  idx,
  className
}) {
  let {dispatch} = useContext(CardControllerContext);
  return (
    <span
      className={className}
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
      {children}
    </span>
  );
}
