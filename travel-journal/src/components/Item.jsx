export default function Item() {
  return (
    <article className="item-container">
      <div className="img-place">
        <img
          src="../src/assets/jessica-irani.jpg"
          alt="beautiful place"
        />
      </div>
     
      <div className="item-details">
        <div className="item-header">
          <img
            className="icon"
            src="../src/assets/earth.png"
            alt="react logo"
          />
          <span>United States</span>
          <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">Check this link</a>
        </div>
        <h2 className="title">Seattle, Seattle</h2>
        <p className="date">February 22, 2022, Mars 26, 2022</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          obcaecati minus facere expedita hic. Vero voluptatem voluptate quaerat
          quasi, odio perferendis alias similique, corrupti ullam explicabo
          doloribus! Ut, sed odit.
        </p>
      </div>
    </article>
  );
}
