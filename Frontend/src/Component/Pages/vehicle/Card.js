import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApiServices, { BASE_URL } from "../../../Services/ApiServices";
import "../../../Component/Style/Card.css";

export default function Card() {
  const [brands, setBrands] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all brands
  useEffect(() => {
    ApiServices.allBrand()
      .then((res) => {
        if (res.data.success) {
          setBrands(res.data.data);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => toast.error(err.message));
  }, []);

  // Fetch vehicles of selected brand
  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    ApiServices.allVehicle({
      brandId: brand._id,
      currentPage: 0,
      limit: 100,
    })
      .then((res) => {
        if (res.data.success) {
          setVehicles(res.data.data);
        } else {
          setVehicles([]);
          toast.error(res.data.message);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  // Variant options
  const variants = ["Petrol", "Diesel", "CNG"];

  const handleVariantSelect = (variant) => {
    toast.success(
      `${variant} variant selected for ${selectedVehicle.vehicleName}`
    );
    // you can navigate to service page here if needed
    // navigate(`/user/viewService/${selectedVehicle._id}?variant=${variant}`);
    setSelectedVehicle(null);
  };

  const filteredBrands = brands.filter((b) =>
    b.brandName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* --- Brand Modal --- */}
      {!selectedBrand && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content rounded-4 shadow-lg">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">Select Brand</h5>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Search your car"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div className="row text-center">
                  {filteredBrands.map((brand) => (
                    <div
                      key={brand._id}
                      className="col-4 col-md-2 mb-4"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleBrandSelect(brand)}
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
                      <p className="small mt-2 mb-0 fw-semibold text-truncate">
                        {brand.brandName}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- Vehicle Modal --- */}
      {selectedBrand && !selectedVehicle && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content rounded-4 shadow-lg">
              <div className="modal-header">
                <h5 className="modal-title">
                  Select Vehicle - {selectedBrand.brandName}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedBrand(null)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  {vehicles.length > 0 ? (
                    vehicles.map((v) => (
                      <div
                        key={v._id}
                        className="col-6 col-md-4 mb-3"
                        onClick={() => setSelectedVehicle(v)}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="card rounded-4 shadow-sm border-0">
                          <img
                            src={BASE_URL + v.Image}
                            alt={v.vehicleName}
                            className="img-fluid rounded-top-4"
                            style={{
                              height: "120px",
                              objectFit: "cover",
                            }}
                          />
                          <div className="p-2 text-center">
                            <h6 className="fw-bold mb-0 text-truncate">
                              {v.vehicleName}
                            </h6>
                            <small className="text-muted">
                              {v.vehicleType}
                            </small>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-muted">
                      No vehicles found for this brand.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- Variant Modal --- */}
      {selectedVehicle && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 shadow-lg">
              <div className="modal-header">
                <h5 className="modal-title">
                  Select Variant - {selectedVehicle.vehicleName}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedVehicle(null)}
                ></button>
              </div>
              <div className="modal-body text-center">
                {variants.map((v) => (
                  <button
                    key={v}
                    className="btn btn-outline-primary m-2"
                    onClick={() => handleVariantSelect(v)}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
