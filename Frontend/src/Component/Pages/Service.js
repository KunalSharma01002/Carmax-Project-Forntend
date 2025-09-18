import { Link } from "lucide-react";
import { useState } from "react";

export default function Service() {
  const [show, setShow] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (service) => {
    setSelectedService(service);
    setShow(true);
  };

  // Service Data
  const services = [
    {
      name: "Basic Car Service",
      desc: "Basic maintenance to extend vehicle life and ensure daily comfort.",
      img: "/assets/images/ab1.jpg",
      included: [
        "Air Filter Cleaning",
        "Battery Water Top-Up",
        "Coolant Top Up (200 ml)",
        "Engine Oil Replacement",
        "Car Inspection",
        "Oil Filter Replacement",
        "Heater/Spark Plugs Checking",
        "Wiper Fluid Replacement",
        "Interior Vacuuming (Carpet & Seat)",
        "Dashboard & tyre Polish",
        "Car Wash",
      ],
    },
    {
      name: "Standard Car Service",
      desc: "Balanced care with detailed checks for smooth long-term driving.",
      img: "/assets/images/ab2.jpg",
      included: [
        "All Basic Service items",
        "Brake Fluid Top-Up",
        "Wheel Alignment & Balancing",
        "Suspension Check",
        "Detailed Car Wash",
      ],
    },
    {
      name: "Comprehensive Car Service",
      desc: "All-in-one car care covering safety, comfort, and peak performance.",
      img: "/assets/images/ab3.jpg",
      included: [
        "All Standard Service items",
        "AC Gas & Filter Check",
        "Full Engine Diagnostics",
        "Complete Electrical System Check",
        "Deep Interior Cleaning",
      ],
    },
  ];

  return (
    <>
      <section className="w3l-about-breadcrumb position-relative text-center">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
          <div className="container py-lg-5 py-3">
            <h2 className="title">Services</h2>
            <ul className="breadcrumbs-custom-path mt-2">
              <li>
                <a href="#url">Home</a>
              </li>
              <li className="active">
                <span
                  className="fa fa-angle-double-right mx-2"
                  aria-hidden="true"
                />{" "}
                Services{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="w3-services py-5">
        <div className="container py-lg-4">
          <div className="title-content text-left mb-lg-5 mb-4">
            <h1>
              <center>Our Services</center>
            </h1>
            <p>
              <center>We provide professional car care services to ensure safety,
              comfort, and performance.</center>
            </p>
          </div>

          <div className="row w3-services-grids">
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-6 causes-grid" key={index}>
                <div className="causes-grid-info">
                  <img
                    src={service.img}
                    className="img-fluid"
                    alt={service.name}
                  />
                  <h4 className="cause-title mt-3">{service.name}</h4>
                  <p className="card-text mb-0">{service.desc}</p>
                  <button
                    className=" btn-style btn-primary mt-4"
                    onClick={() => handleShow(service)}
                  >
                    Know more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Popup */}
      {show && (
        <div
          className="custom-popup"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "8px",
              padding: "20px",
              maxWidth: "500px",
              width: "90%",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            }}
          >
            <h4>{selectedService?.name}</h4>
            <ul>
              {selectedService?.included.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <button className="btn btn-danger mt-3" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}