import { useSelector } from "react-redux"


export default function Index(){

  const isOpen=useSelector((state)=>state.modal.isOpen)


  const customCss={}
    if(isOpen){
      customCss.zIndex="-100 !important"
    }

    return(
        <>

  <section className="w3l-main-slider position-relative" id="home">
    <div className="companies20-content">
    <div
  id="carouselExampleCaptions"
  className="carousel slide"
  data-ride="carousel"
>
  <ol className="carousel-indicators">
    <li
      data-target="#carouselExampleCaptions"
      data-slide-to={0}
      className="active"
    />
    <li data-target="#carouselExampleCaptions" data-slide-to={1} />
    <li data-target="#carouselExampleCaptions" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/assets/images/banner21.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        
        
      </div>
    </div>
    <div className="carousel-item">
      <img src="/assets/images/banner3.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item">
      <img src="/assets/images/banner4.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
       
      </div>
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleCaptions"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleCaptions"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

    </div>
  </section>
  {/* //banner-slider*/}
  {/* //bottom-grids */}
  <div className="w3l-bottom-grids">
    <div className="container-fluid px-0">
      <div className="bottomhny-grids-sec">
        <div className="bottomhny-1">
          <div className="bottomhny-gd-ingf">
            <h4>Satisfaction Guaranteed or Your Dent Back.</h4>
          </div>
        </div>
        <div className="bottomhny-1 bottomhny-2">
          <div className="bottomhny-gd-ingf">
            <h4>Caring For Your Car The Way You Would.</h4>
          </div>
        </div>
        <div className="bottomhny-1 bottomhny-1-img">
          <div className="bottomhny-gd-ingf"></div>
        </div>
      </div>
    </div>
  </div>
  {/* //bottom-grids */}
  {/* /content-3*/}
  <section className="w3l-content-3">
    {/* /content-3-main*/}
    <div className="content-3-mian py-5">
      <div className="container py-lg-5">
        <div className="content-info-in row">
          <div className="col-lg-6">
            <img src="/assets/images/ab1.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 mt-lg-0 mt-5 about-right-faq align-self  pl-lg-5">
            <div className="title-content text-left mb-2">
              <h6 className="sub-title">Who We Are</h6>
              <h3 className="hny-title">
                {" "}
                We have 25 years of experience in this field.
              </h3>
            </div>
            <p className="mt-3">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
              amet consectetur adipisicing elit.fugiat consequatur voluptatem
              nihil ad.Lorem illum facere aperiam consectetur adipisicing.
            </p>
            <a
              href="about.html"
              className="btn btn-style btn-primary mt-md-5 mt-4"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //content-3*/}
  {/* /features-4 */}
  <section className="features-4">
    <div className="features4-block py-5">
      <div className="container py-lg-4">
        <div className="title-content text-center mb-lg-5 mt-4">
          <h6 className="sub-title">Why Choose Us</h6>
          <h3 className="hny-title">Great car service</h3>
          <p className="fea-para">
            Lorem illum facere aperiam consectetur adipisicing elit
          </p>
        </div>
        <div className="row features4-grids text-left mt-lg-4">
          <div className="col-lg-3 col-md-6 features4-grid mt-4">
            <div className="features4-grid-inn">
              <div className="img-featured">
                <div className="ch-item ch-img-1">
                  <div className="ch-info-wrap">
                    <div className="ch-info">
                      <div className="ch-info-front ch-img-1" />
                      <div className="ch-info-back">
                        <h4>Carserving</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="features4-rightinfo">
                <h5>
                  <a href="#URL">Tire and wheel</a>
                </h5>
                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 features4-grid mt-4">
            <div className="features4-grid-inn">
              <div className="img-featured">
                <div className="ch-item ch-img-2">
                  <div className="ch-info-wrap">
                    <div className="ch-info">
                      <div className="ch-info-front ch-img-2" />
                      <div className="ch-info-back">
                        <h4>Carserving</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="features4-rightinfo">
                <h5>
                  <a href="#URL">Electrical system</a>
                </h5>
                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 features4-grid mt-4">
            <div className="features4-grid-inn">
              <div className="img-featured">
                <div className="ch-item ch-img-3">
                  <div className="ch-info-wrap">
                    <div className="ch-info">
                      <div className="ch-info-front ch-img-3" />
                      <div className="ch-info-back">
                        <h4>Carserving</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="features4-rightinfo">
                <h5>
                  <a href="#URL">System service</a>
                </h5>
                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 features4-grid mt-4">
            <div className="features4-grid-inn">
              <div className="img-featured">
                <div className="ch-item ch-img-4">
                  <div className="ch-info-wrap">
                    <div className="ch-info">
                      <div className="ch-info-front ch-img-4" />
                      <div className="ch-info-back">
                        <h4>Carserving</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="features4-rightinfo">
                <h5>
                  <a href="#URL">Engine diagnostics</a>
                </h5>
                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*//features-4 */}
  {/* /specification-6*/}
  <section className="w3l-specification-6">
    <div className="specification-6-mian py-5">
      <div className="container py-lg-5">
        <div className="row story-6-grids">
          <div className="col-lg-10 story-gd pl-lg-4  text-center mx-auto">
            <div className="title-content px-lg-5">
              <h6 className="sub-title">Our Organization</h6>
              <h3 className="hny-title two">
                Car serving matched with great workmanship.
              </h3>
              <p className="mt-3 mb-lg-5 px-lg-5 counter-para">
                Lorem illum facere aperiam sequi optio consectetur adipisicing
                elitFuga, suscipit totam animi consequatur saepe
                blanditiis.Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="skill_info mt-5 pt-lg-4">
              <div className="stats_left">
                <div className="counter_grid">
                  <div className="icon_info">
                    <p className="counter">65</p>
                    <h4>Total projects</h4>
                  </div>
                </div>
              </div>
              <div className="stats_left">
                <div className="counter_grid">
                  <div className="icon_info">
                    <p className="counter">165</p>
                    <h4>Transparency</h4>
                  </div>
                </div>
              </div>
              <div className="stats_left">
                <div className="counter_grid">
                  <div className="icon_info">
                    <p className="counter">463</p>
                    <h4>Done projects</h4>
                  </div>
                </div>
              </div>
              <div className="stats_left">
                <div className="counter_grid">
                  <div className="icon_info">
                    <p className="counter">5063</p>
                    <h4>Get awards</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //specification-6*/}
  <section className="w3l-pricing">
    <div className="py-5" id="pricing">
      <div className="container py-lg-5">
        <div className="title-content text-center mb-5">
          <h6 className="sub-title">Best Packages</h6>
          <h3 className="hny-title">Our Pricing Plans</h3>
          <p className="fea-para">
            Lorem illum facere aperiam consectetur adipisicing elit
          </p>
        </div>
        <div className="row t-in">
          <div className="col-lg-4 col-md-6 price-main-info">
            <div className="price-inner card box-shadow">
              <div className="card-body">
                <h4 className="text-uppercase text-center mb-3">
                  Silver Package
                </h4>
                <h5 className="card-title pricing-card-title">
                  <span className="align-top">$</span>35
                </h5>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    {" "}
                    <span className="fa fa-check" /> Conventional Oil Change
                  </li>
                  <li>
                    {" "}
                    <span className="fa fa-check" /> Fuel System Cleaning
                  </li>
                  <li>
                    {" "}
                    <span className="fa fa-check" /> Coolant Exchange
                  </li>
                  <li>
                    {" "}
                    <span className="fa fa-check" /> Transmission Fluid Service
                  </li>
                  <li>
                    {" "}
                    <span className="fa fa-check" /> Visual Brake Inspection
                  </li>
                  <li>
                    {" "}
                    <span className="fa fa-check" /> Tire Rotation
                  </li>
                </ul>
                <div className="read-more mt-4 pt-lg-2">
                  <a
                    href="contact.html"
                    className="btn btn-style btn-outline-primary"
                  >
                    {" "}
                    Go Basic
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 price-main-info mt-md-0 mt-4">
            <div className="price-inner card box-shadow active">
              <div className="card-body">
                <label className="price-label">Recommended</label>
                <h4 className="text-uppercase text-center mb-3">
                  Platinum Package
                </h4>
                <h5 className="card-title pricing-card-title">
                  <span className="align-top">$</span>69
                </h5>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    {" "}
                    <span className="fa fa-check" /> Conventional Oil Change
                  </li>
                  <li>
                    {" "}
                    <span className="fa fa-check" /> Fuel System Cleaning
                  </li>
                  <li>
                    {" "}
                    <span className="fa fa-check" /> Coolant Exchange
                  </li>
                  <li>
                    {" "}
                    <span className="fa fa-check" /> Transmission Fluid Service
                  </li>
                  <li>
                    {" "}
                    <span className="fa fa-check" /> Visual Brake Inspection
                  </li>
                  <li>
                    {" "}
                    <span className="fa fa-check" /> Tire Rotation
                  </li>
                </ul>
                <div className="read-more mt-4 pt-lg-2">
                  <a href="contact.html" className="read-more"></a>
                  <a href="contact.html" className="btn btn-style btn-primary">
                    {" "}
                    Go Standard
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 price-main-info mt-lg-0 mt-4">
            <div className="price-inner card box-shadow">
              <div className="card-body">
                <h4 className="text-uppercase text-center mb-3">
                  Gold Package
                </h4>
                <h5 className="card-title pricing-card-title">
                  <span className="align-top">$</span>39
                </h5>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    {" "}
                    <span className="fa fa-check" /> Conventional Oil Change
                  </li>
                  <li>
                    {" "}
                    <span className="fa fa-check" /> Fuel System Cleaning
                  </li>
                  <li>
                    {" "}
                    <span className="fa fa-check" /> Coolant Exchange
                  </li>
                  <li>
                    {" "}
                    <span className="fa fa-check" /> Transmission Fluid Service
                  </li>
                  <li>
                    {" "}
                    <span className="fa fa-check" /> Visual Brake Inspection
                  </li>
                  <li>
                    {" "}
                    <span className="fa fa-check" /> Tire Rotation
                  </li>
                </ul>
                <div className="read-more mt-4 pt-lg-2">
                  <a
                    href="contact.html"
                    className="btn btn-style btn-outline-primary"
                  >
                    {" "}
                    Go Premium
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* middle */}
  <div className="middle py-5">
    <div className="container py-xl-5 py-lg-3">
      <div className="welcome-left text-left py-3">
        <div className="title-content">
          <h6 className="sub-title">Call Us</h6>
          <h3 className="hny-title two mb-2">
            Imagine Your Car Feeling New Again
          </h3>
          <p>
            Questions? Give us a call today at{" "}
            <a href="tel:+(21) 255 999 8899">+(21) 255 999 8899</a>
          </p>
        </div>
        <a href="services.html" className="btn btn-white mt-md-5 mt-4 mr-sm-2">
          Our Services
        </a>
        <a
          href="contact.html"
          className="btn btn-white-active btn-primary mt-md-5 mt-4"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
  {/* //middle */}
  {/*/testimonials*/}
  <section className="w3l-testimonials">
    <div className="testimonials py-5">
      <div className="container text-center py-lg-3">
        <div className="title-content text-center mb-lg-5 mb-4">
          <h6 className="sub-title">Client Testimonials</h6>
          <h3 className="hny-title">100% approved by customers</h3>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="owl-testimonial owl-carousel owl-theme">
              <div className="item">
                <div className="slider-info mt-lg-4 mt-3">
                  <div className="img-circle">
                    <img
                      src="/assets/images/team1.jpg"
                      className="img-fluid rounded"
                      alt="client image"
                    />
                  </div>
                  <div className="message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    sit id accusantium officia quod quasi necessitatibus
                    perspiciatis Harum error provident quibusdam tenetur.
                  </div>
                  <div className="name">- Jenkins</div>
                </div>
              </div>
              <div className="item">
                <div className="slider-info mt-lg-4 mt-3">
                  <div className="img-circle">
                    <img
                      src="/assets/images/team2.jpg"
                      className="img-fluid rounded"
                      alt="client image"
                    />
                  </div>
                  <div className="message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    sit id accusantium officia quod quasi necessitatibus
                    perspiciatis Harum error provident quibusdam tenetur.
                  </div>
                  <div className="name">- John Balmer</div>
                </div>
              </div>
              <div className="item">
                <div className="slider-info mt-lg-4 mt-3">
                  <div className="img-circle">
                    <img
                      src="/assets/images/team3.jpg"
                      className="img-fluid rounded"
                      alt="client image"
                    />
                  </div>
                  <div className="message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    sit id accusantium officia quod quasi necessitatibus
                    perspiciatis Harum error provident quibusdam tenetur.
                  </div>
                  <div className="name">- Kiss Kington</div>
                </div>
              </div>
              <div className="item">
                <div className="slider-info mt-lg-4 mt-3">
                  <div className="img-circle">
                    <img
                      src="/assets/images/team4.jpg"
                      className="img-fluid rounded"
                      alt="client image"
                    />
                  </div>
                  <div className="message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    sit id accusantium officia quod quasi necessitatibus
                    perspiciatis Harum error provident quibusdam tenetur.
                  </div>
                  <div className="name">- Elizabeth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*//testimonials*/}


</>

    )
}