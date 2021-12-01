import {useContext} from 'react';

import {CardControllerContext} from './CardController'


export default function ContentLink({
  children,
  content,
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
            children: content()
          });
        }
      }
    >
      {children}
    </span>
  );
}
