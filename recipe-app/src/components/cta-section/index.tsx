import "./cta.css";

function CTA() {
  return (
    <div className="cta-section">
      <div className="text-wrapper-cta">
        <div className="text">
          <div className="div">SUBSCRIBE</div>
          <div className="header">
            JOIN THE FUN
            <br />
            SUBSCRIBE NOW!
          </div>
          <p className="paragraph">
            Subscribe to our newsletter for a weekly serving of recipes, cooking
            tips, and exclusive insights straight to your inbox.
          </p>
        </div>
        <div className="input-wrapper">
          <input className="input" placeholder="Email Address" type="email" />
          <button className="button">
            <div className="text-2">SUBSCRIBE</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
