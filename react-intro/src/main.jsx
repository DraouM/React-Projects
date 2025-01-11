import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<ReactFacts />);

function Header() {
  return (
    <header className="header">
      <img src="/src/assets/react.svg" alt="react logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Pricing</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h1>Fun facts about React</h1>
      <ol>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>
          Is maintained by Meta and a community of individual developers and
          companies
        </li>
        <li>React is a JavaScript library for building user interfaces.</li>
        <li>React is declarative, efficient, and flexible.</li>
        <li>
          React can be used to build single-page applications, mobile
          applications, and more.
        </li>
      </ol>
    </main>
  );
}

function Footer() {
  return <footer>Copyright 2024, React Facts</footer>;
}

function ReactFacts() {
  return (
    <div className="card">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
