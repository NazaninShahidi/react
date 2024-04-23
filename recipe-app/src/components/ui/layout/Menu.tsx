import "./menu.css";

function Menu() {
  return (
    <div>
      <nav className="nav">
        <a href="#">
          <img src="/images/Logo Nav Bar.png" alt="" />
        </a>
        <ul className="menu-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">recipe</a>
          </li>
          <li>
            <a href="#">cooking tips</a>
          </li>
          <li>
            <a href="#">about us</a>
          </li>
        </ul>

        <div className="search-wrapper">
          <button type="button" className="search-btn">
            <img src="/images/icon/search.png" alt="" />
          </button>
          <button type="button" className="subscribe-btn">
            subscribe
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
