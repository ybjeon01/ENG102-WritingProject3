import "./Card.css"


export default function Card({
  imageSrc,
  imageCaption,
  className
}) {

  return (
    <div
      className={"card-container " + className}
    >
      <img
        src={imageSrc}
        alt={imageCaption}
        className={"card-image " + className}
      />
      {imageCaption}
    </div>
  );
}

