import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

export default function About(){
    return(
        <>  
       
        <section className="w3l-about-breadcrumb position-relative text-center">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
          <div className="container py-lg-5 py-3">
            <h2 className="title">About Us</h2>
            <ul className="breadcrumbs-custom-path mt-2">
              <li>
                <a href="#url">Home</a>
              </li>
              <li className="active">
                <span
                  className="fa fa-angle-double-right mx-2"
                  aria-hidden="true"
                />{" "}
                About{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* //about breadcrumb */}
      {/* /content-6*/}
      <section className="w3l-content-6">
        {/* /content-6-main*/}
        <div className="content-6-mian py-5">
          <div className="container py-lg-5">
            <div className="content-info-in row">
              <div className="col-lg-6">
                <img src="/assets/images/ab1.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5 about-right-faq align-self  pl-lg-4">
                <div className="title-content text-left mb-2">
                  <h6 className="sub-title">About Company</h6>
                  <h3 className="hny-title">
                    We are qualified &amp; of experience in this field
                  </h3>
                </div>
                <p className="mt-3">
                  Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                  ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.fugiat consequatur voluptatem
                  nihil ad.
                </p>
                <a href="about.html" className="btn btn-style btn-primary mt-4">
                  Read More
                </a>
              </div>
              <div className="col-lg-6 mt-5 about-right-faq align-self order2">
                <div className="title-content text-left mb-2">
                  <h6 className="sub-title">Who We Are</h6>
                  <h3 className="hny-title">Quality and perfomance</h3>
                </div>
                <p className="mt-3">
                  Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                  ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.fugiat consequatur voluptatem
                  nihil ad.
                </p>
                <a href="about.html" className="btn btn-style btn-primary mt-4">
                  Read More
                </a>
              </div>
              <div className="col-lg-6 mt-5 pl-lg-4">
                <img src="/assets/images/ab2.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //content-6*/}
      {/* /w3l-content-4 */}
      <section className="w3l-content-4">
        {/* /content-6-section */}
        <div className="content-4-main py-5">
          <div className="container py-lg-4">
            <div className="content-info-in row">
              <div className="content-right col-lg-6">
                <img src="/assets/images/ab4.jpg" className="img-fluid" alt="" />
              </div>
              <div className="content-left col-lg-6 pl-lg-5">
                <h6 className="sub-title">Reable Features</h6>
                <h3 className="hny-title">
                  All our technicians are equipped with the latest portable
                  technology
                </h3>
                <p className="mt-3">
                  Lorem illum facere aperiam sequi optio consectetur adipisicing
                  elitFuga, suscipit totam animi consequatur saepe blanditiis.Lorem
                  ipsum dolor sit amet Phasellus lacinia id erat eu ullamcorper.
                  Nunc id ipsum fringilla, gravida felis vitae.{" "}
                </p>
                <div className="content-4-bottom">
                  <div className="content4-right-grids mb-md-0 mb-4">
                    <div className="content4-right-info">
                      <h6>
                        <a href="#">Our Stories</a>
                      </h6>
                      <p>Lorem ipsum dolor sit amet,facere aperiam.</p>
                    </div>
                  </div>
                  <div className="content4-right-grids mb-md-0 mb-4">
                    <div className="content4-right-info">
                      <h6>
                        <a href="#">Our Mission</a>
                      </h6>
                      <p>Lorem ipsum dolor sit amet,facere aperiam.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //content-6-section */}
      {/*//content-5*/}
      <div className="w3l-content-5 py-5">
        <div className="container py-lg-4">
          <div className="row content-5-grids">
            <div className="col-lg-4 col-md-6 content-5-one">
              <div className="content5-gd-ingf">
                <div className="icon-holder mb-3">
                  <span className="fa fa-users service-icon" aria-hidden="true" />
                </div>
                <h4>Brake fluid exchange</h4>
                <p>
                  Lorem illum facere aperiam sequi optio consectetur adipisicing
                  elitFuga, suscipit totam animi consequatur saepe blanditiis
                </p>
                <a href="services.html" className="btn btn-style btn-primary mt-4">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 content-5-one">
              <div className="content5-gd-ingf">
                <div className="icon-holder mb-3">
                  <span className="fa fa-heart-o service-icon" aria-hidden="true" />
                </div>
                <h4>Wheel alignment</h4>
                <p>
                  Lorem illum facere aperiam sequi optio consectetur adipisicing
                  elitFuga, suscipit totam animi consequatur saepe blanditiis
                </p>
                <a href="services.html" className="btn btn-style btn-primary mt-4">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 content-5-one">
              <div className="content5-gd-ingf">
                <div className="icon-holder mb-3">
                  <span
                    className="fa fa-handshake-o service-icon"
                    aria-hidden="true"
                  />
                </div>
                <h4>Maintenance packages</h4>
                <p>
                  Lorem illum facere aperiam sequi optio consectetur adipisicing
                  elitFuga, suscipit totam animi consequatur saepe blanditiis
                </p>
                <a href="services.html" className="btn btn-style btn-primary mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*//content-5*/}
      {/* team */}
      <section className="w3l-team-main py-5" id="team">
        <div className="container py-lg-4">
          <div className="title-content text-center mb-lg-5 mb-4">
            <h6 className="sub-title">Our Technicians</h6>
            <h3 className="hny-title">Meet Our Leadership</h3>
          </div>
          <div className="row inner-sec-w3layouts-w3pvt-lauinfo">
            <div className="col-md-3 col-6">
              <div className="team-grids text-center">
                <img src="/assets/images/team1.jpg" className="img-fluid" alt="" />
                <div className="team-info">
                  <div className="caption">
                    <h4>Dan Jones</h4>
                    <h6>Technician</h6>
                  </div>
                </div>
              </div>
              <div className="social-icons-section text-center">
                <a className="fac" href="#url">
                  <i className="fa fa-facebook" />
                </a>
                <a className="twitter" href="#url">
                  <i className="fa fa-twitter" />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="team-grids text-center">
                <img src="/assets/images/team2.jpg" className="img-fluid" alt="" />
                <div className="team-info">
                  <div className="caption">
                    <h4>Zara Conner</h4>
                    <h6>Technician</h6>
                  </div>
                </div>
              </div>
              <div className="social-icons-section text-center">
                <a className="fac" href="#url">
                  <i className="fa fa-facebook" />
                </a>
                <a className="twitter" href="#url">
                  <i className="fa fa-twitter" />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-6 mt-md-0 mt-4">
              <div className="team-grids text-center">
                <img src="/assets/images/team3.jpg" className="img-fluid" alt="" />
                <div className="team-info">
                  <div className="caption">
                    <h4>John Chater</h4>
                    <h6>Technician</h6>
                  </div>
                </div>
              </div>
              <div className="social-icons-section text-center">
                <a className="fac" href="#url">
                  <i className="fa fa-facebook" />
                </a>
                <a className="twitter" href="#url">
                  <i className="fa fa-twitter" />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-6 mt-md-0 mt-4">
              <div className="team-grids text-center">
                <img src="/assets/images/team4.jpg" className="img-fluid" alt="" />
                <div className="team-info">
                  <div className="caption">
                    <h4>June Smith</h4>
                    <h6>Technician</h6>
                  </div>
                </div>
              </div>
              <div className="social-icons-section text-center">
                <a className="fac" href="#url">
                  <i className="fa fa-facebook" />
                </a>
                <a className="twitter" href="#url">
                  <i className="fa fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      </>
    )
}