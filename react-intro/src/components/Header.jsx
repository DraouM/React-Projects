function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/src/assets/react.svg" alt="react logo" />
        <span className="logo-text">ReactDev</span>
      </div>
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

export default Header;
