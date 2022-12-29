import React from "react";

const Header = () => {
  return (
    <div>
      <header id="home" class="header-area">
        <div id="parallax" class="header-content d-flex align-items-center">
          <div class="header-shape shape-one layer" data-depth="0.10">
            <img src="assets/images/banner/shape/shape-1.png" alt="Shape" />
          </div>
          <div class="header-shape shape-tow layer" data-depth="0.30">
            <img src="assets/images/banner/shape/shape-2.png" alt="Shape" />
          </div>
          <div class="header-shape shape-three layer" data-depth="0.40">
            <img src="assets/images/banner/shape/shape-3.png" alt="Shape" />
          </div>
          <div class="header-shape shape-fore layer" data-depth="0.60">
            <img src="assets/images/banner/shape/shape-2.png" alt="Shape" />
          </div>
          <div class="header-shape shape-five layer" data-depth="0.20">
            <img src="assets/images/banner/shape/shape-1.png" alt="Shape" />
          </div>
          <div class="header-shape shape-six layer" data-depth="0.15">
            <img src="assets/images/banner/shape/shape-4.png" alt="Shape" />
          </div>
          <div class="header-shape shape-seven layer" data-depth="0.50">
            <img src="assets/images/banner/shape/shape-5.png" alt="Shape" />
          </div>
          <div class="header-shape shape-eight layer" data-depth="0.40">
            <img src="assets/images/banner/shape/shape-3.png" alt="Shape" />
          </div>
          <div class="header-shape shape-nine layer" data-depth="0.20">
            <img src="assets/images/banner/shape/shape-6.png" alt="Shape" />
          </div>
          <div class="header-shape shape-ten layer" data-depth="0.30">
            <img src="assets/images/banner/shape/shape-3.png" alt="Shape" />
          </div>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-5 col-lg-6">
                <div class="header-content-right">
                  <h4 class="sub-title">Hello, I’m</h4>
                  <h1 class="title">Mark Parker</h1>
                  <p>A Freelance UI Designer & Web Developer</p>
                  <a class="main-btn" href="#work">
                    View my Work
                  </a>
                </div>
              </div>
              <div class="col-lg-6 offset-xl-1">
                <div class="header-image d-none d-lg-block">
                  <img src="assets/images/banner/hero.png" alt="hero" />
                </div>
              </div>
            </div>
          </div>
          <div class="header-social">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="header-social-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="lni-twitter-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="lni-behance-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="lni-linkedin-original"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
