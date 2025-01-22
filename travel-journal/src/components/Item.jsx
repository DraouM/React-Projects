export default function Item(props) {
  console.log(props.image);
  return (
    <article className="item-container">
      <div className="img-place">
        <img
          // src= {props.imageUrl}
          src = "../src/assets/place_1.jpg"
          alt={props.title}
        />
      </div>
     
      <div className="item-details">
        <div className="item-header">
          <img
            className="icon"
            src="../src/assets/earth.png"
            alt="react logo"
          />
          <span>{props.location}</span>
          <a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">Check this link</a>
        </div>
        <h2 className="title">{props.title}</h2>
        <p className="date">{props.date} </p>
        <p className="description">
          {props.description}
        </p>
      </div>
    </article>
  );
}
