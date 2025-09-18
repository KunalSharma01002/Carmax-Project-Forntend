export default function Footer(){
    return(
        <>  
        <footer className="w3l-footer-66">
        <section className="footer-inner-main">
          <div className="footer-hny-grids py-5">
            <div className="container py-lg-4">
              <div className="text-txt">
                <div className="row newsletter-grids-footer">
                  <div className="col-lg-6 newsletter-text pr-lg-5">
                    <h3 className="hny-title two">Newsletter</h3>
                    <h4>
                      Sign up for our monthly newsletter to get the latest news,
                      volunteer opportunities,
                    </h4>
                  </div>
                  <div className="col-lg-6 newsletter-right">
                    <form action="#" method="post" className="footer-newsletter">
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter your email.."
                      />
                      <button type="submit" className="btn">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
                <div className="right-side">
                  <div className="row sub-columns">
                    <div className="col-lg-4 col-md-6 sub-one-left pr-lg-4">
                      <h2>
                        <a className="navbar-brand" href="index.html">
                          <span>C</span>arserving
                        </a>
                      </h2>
                      {/* if logo is image enable this   
                                            <a class="navbar-brand" href="#index.html">
                                                <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                                            </a> */}
                      <p className="pr-lg-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur hic odio voluptatem tenetur consequatur.Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                      <div className="columns-2">
                        <ul className="social">
                          <li>
                            <a href="#facebook">
                              <span className="fa fa-facebook" aria-hidden="true" />
                            </a>
                          </li>
                          <li>
                            <a href="#linkedin">
                              <span className="fa fa-linkedin" aria-hidden="true" />
                            </a>
                          </li>
                          <li>
                            <a href="#twitter">
                              <span className="fa fa-twitter" aria-hidden="true" />
                            </a>
                          </li>
                          <li>
                            <a href="#google">
                              <span
                                className="fa fa-google-plus"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#github">
                              <span className="fa fa-github" aria-hidden="true" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 sub-one-left">
                      <h6>Our Services</h6>
                      <div className="mid-footer-gd sub-two-right">
                        <ul>
                          <li>
                            <a href="about.html">
                              <span className="fa fa-angle-double-right mr-2" />{" "}
                              About
                            </a>
                          </li>
                          <li>
                            <a href="services.html">
                              <span className="fa fa-angle-double-right mr-2" />{" "}
                              Services
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fa fa-angle-double-right mr-2" /> Car
                              Wash
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fa fa-angle-double-right mr-2" />
                              Electrical system
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="#">
                              <span className="fa fa-angle-double-right mr-2" />
                              Tire and wheel
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fa fa-angle-double-right mr-2" />
                              Help Orphan
                            </a>
                          </li>
                          <li>
                            <a href="#support">
                              <span className="fa fa-angle-double-right mr-2" />
                              Career
                            </a>
                          </li>
                          <li>
                            <a href="contact.html">
                              <span className="fa fa-angle-double-right mr-2" />
                              Contact US
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 sub-one-left">
                      <h6>Contact Info</h6>
                      <div className="sub-contact-info">
                        <p>
                          Address: 8436 Jasmine Parkway, Mountain View, CA 84043,
                          United States.
                        </p>
                        <p className="my-3">
                          Phone:{" "}
                          <strong>
                            <a href="tel:+24160033999">+24 1600-33-999</a>
                          </strong>
                        </p>
                        <p>
                          E-mail:
                          <strong>
                            {" "}
                            <a href="mailto:info@example.com">info@example.com</a>
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="below-section">
            <div className="container">
              <div className="copyright-footer">
                <div className="columns text-lg-left">
                  <p>
                    © 2020 Carserving. All rights reserved | Designed by{" "}
                    <a href="https://w3layouts.com">W3layouts</a>
                  </p>
                </div>
                <ul className="columns text-lg-right">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="#">Terms Of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* copyright */}
          {/* move top */}
          <button onclick="topFunction()" id="movetop" title="Go to top">
            <span className="fa fa-long-arrow-up" aria-hidden="true" />
          </button>
        </section>
      </footer></>
    )
}