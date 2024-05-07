import "./about.css";

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-wrapper">
        <div className="image-wrapper">
          <div className="flex">
            <div className="text-wrapper-about">
              <div>
                <span className="tag">about us</span>
                <h2>Our Culinary Chronicle</h2>
                <p>
                  {" "}
                  Our journey is crafted with dedication, creativity, and an
                  unrelenting commitment to delivering delightful culinary
                  experiences. Join us in savoring the essence of every dish and
                  the stories that unfold.
                </p>
              </div>

              <button className="btn-explore">Read more</button>
            </div>
            <img src="images/About-1.png" alt="" />
          </div>
          <img src="images/About-2.png" alt="" />
        </div>
        <img src="images/About us Image.png" alt="" />
      </div>
    </div>
  );
}

export default AboutUs;
