export default function Item(props) {
  console.log(props.image);
  return (
    <article className="item-container">
      <div className="img-place">
        <img
          src= {props.image.src}
          alt={props.image.alt}
        />
      </div>
     
      <div className="item-details">
        <div className="item-header">
          <img
            className="icon"
            src="../src/assets/earth.png"
            alt="react logo"
          />
          <span>{props.country}</span>
          <a href={props.link} target="_blank" rel="noopener noreferrer">Check this link</a>
        </div>
        <h2 className="title">{props.location}</h2>
        <p className="date">{props.date}</p>
        <p className="description">
          {props.description}
        </p>
      </div>
    </article>
  );
}
