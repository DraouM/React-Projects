export default function Contact({img: image, name, phone} ) {
  return (
    <div className="contact-card">
      <div className="contact-image">
        <img src={image} alt={name} />
      </div>
      <div className="contact-info">
        <h3 className="contact-name">{name}</h3>
        <div className="contact-details">
          <img
            className="contact-icon"
            src="../src/assets/marker.png"
            alt="phone icon"
          />
          <p className="contact-phone">{phone}</p>
        </div>
      </div>
    </div>
  );
}
