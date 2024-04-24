import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <a href="#">
          <img src="/images/Logo Footer.png" alt="" />
        </a>
        <ul className="link-wrapper">
          <li>
            <a href="#">Home</a>
          </li>
          <div className="line"></div>
          <li>
            <a href="#">recipe</a>
          </li>
          <div className="line"></div>
          <li>
            <a href="#">cooking tips</a>
          </li>
          <div className="line"></div>
          <li>
            <a href="#">about us</a>
          </li>
        </ul>
        <ul className="icon-wrapper">
          <li>
            <a href="#" className="link-footer">
              {" "}
              <img src="images/icon/tik-tok.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#" className="link-footer">
              <img src="images/icon/facebook.png" alt="" />
            </a>
          </li>

          <li>
            <a href="#" className="link-footer">
              {" "}
              <img src="images/icon/insta.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#" className="link-footer">
              {" "}
              <img src="images/icon/youtube.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <p>Copyright: © 2024 Cooks Delight.</p>
    </div>
  );
}

export default Footer;
