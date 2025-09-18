import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ApiServices, { BASE_URL } from "../../../Services/ApiServices";
import "../../../Component/Style/Card.css";

export default function ViewVehicleUser() {
  const [brands, setBrands] = useState([]);

  const [showAll, setShowAll] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    ApiServices.allBrand()
      .then((res) => {
        if (res.data.success === true) {
          setBrands(res.data.data);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  const handleBrandClick = (brand) => {
    navigate(`/user/viewVehicle/${brand._id}`);
  };

  
  const visibleBrands = showAll ? brands : brands.slice(0, 12);

  return (
    <>
      {/* Header */}
      <section className="w3l-about-breadcrumb position-relative text-center">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
          <div className="container py-lg-5 py-3">
            <h2 className="title">Brands & Vehicles</h2>
            <ul className="breadcrumbs-custom-path mt-2">
              <li><a href="/">Home</a></li>
              <li className="active">
                <span className="fa fa-angle-double-right mx-2" /> Vehicles
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="container p-4 mt-5 mb-5  shadow-sm rounded-3  border border-secondary">
        <h3 className="mb-4 text-center">Select Your Car Brand</h3>
        
        <div className="row g-3 justify-content-center ">
          {visibleBrands.map((brand) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 " key={brand._id}>
            <div
               className="brand-box shadow-sm rounded-3 p-3 text-center border border-secondary"
              style={{
                cursor: "pointer",
                transition: "0.3s",
                height: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
               
                handleBrandClick(brand);
              }}
            >

                <img
                  src={BASE_URL + brand.Logo}
                  alt={brand.brandName}
                  style={{
                    maxWidth: "60px",
                    maxHeight: "40px",
                    objectFit: "contain",
                  }}
                />
                <p
                  className="mt-2 mb-0 small text-truncate"
                  style={{ fontWeight: "500" }}
                >
                  {brand.brandName}
                </p>
              </div>
            </div>
          ))}
        </div>

      
        {brands.length > 12 && (
          <div className="text-center mt-4">
            <button
              className="btn btn-outline-danger px-4"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
