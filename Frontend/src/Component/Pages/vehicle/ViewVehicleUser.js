import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import ApiServices, { BASE_URL } from "../../../Services/ApiServices";
import "../../../Component/Style/Card.css";

export default function ViewVehicleUser() {
  const [brands, setBrands] = useState([]);
  const [showBrandModal, setShowBrandModal] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { brandId } = useParams();
  const navigate = useNavigate();

  const page = parseInt(searchParams.get("page")) || 1;
  const type = searchParams.get("type") || "";

  // 🏷️ Fetch all brands
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

  // 🚗 Fetch all vehicles for selected brand
  useEffect(() => {
    if (!brandId) return;
    ApiServices.allVehicle({
      currentPage: page - 1,
      limit: 6,
      vehicleType: type,
      brandId: brandId,
    })
      .then((res) => {
        if (res.data.success) {
          setData(res.data.data);
          setTotalPages(Math.ceil(res.data.total / 6));
        } else {
          setData([]);
          toast.error(res.data.message);
        }
      })
      .catch((err) => toast.error(err.message));
  }, [page, type, brandId]);

  const vehicleTypes = [
    { name: "All Types", value: "", icon: "bi-list-ul" },
    { name: "SUV", value: "SUV", icon: "bi-truck text-danger" },
    { name: "Sedan", value: "Sedan", icon: "bi-car-front-fill text-success" },
    { name: "Hatchback", value: "Hatchback", icon: "bi-car-front text-primary" },
    { name: "MPVs", value: "MPVs", icon: "bi-people text-warning" },
    { name: "Van", value: "Van", icon: "bi-truck-front text-info" },
    { name: "Electric", value: "Electric", icon: "bi-lightning-charge text-purple" },
  ];

  const handleBrandSelect = (brand) => {
    setShowBrandModal(false);
    navigate(`/user/viewVehicle/${brand._id}`);
  };

  const handleVariantSelect = (variant) => {
    if (selectedVehicle) {
      navigate(`/user/viewService/${selectedVehicle._id}?variant=${variant}`);
    }
  };

  const filteredBrands = brands.filter((b) =>
    b.brandName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Brand Selection Modal */}
      {showBrandModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content rounded-4 shadow-lg">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">Select Brand</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowBrandModal(false)}
                ></button>
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

      {/* Vehicle Section */}
      <section className="w3l-about-breadcrumb position-relative text-center">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
          <div className="container py-lg-5 py-3">
            <h2 className="title">Vehicles</h2>
            <ul className="breadcrumbs-custom-path mt-2">
              <li><a href="/">Home</a></li>
              <li className="active">
                <span className="fa fa-angle-double-right mx-2" /> Vehicles
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="container p-4">
        {/* Vehicle Type Filter */}
        <div className="mb-4 d-flex overflow-auto">
          {vehicleTypes.map((t) => (
            <button
              key={t.value}
              className={`btn rounded-pill me-2 ${
                type === t.value ? "btn-dark text-white" : "btn-outline-dark"
              }`}
              onClick={() =>
                setSearchParams({ ...(t.value && { type: t.value }), page: 1 })
              }
            >
              <i className={`bi ${t.icon} me-1`}></i> {t.name}
            </button>
          ))}
        </div>

        {/* Vehicle Cards */}
        <div className="row">
          {data.length > 0 ? (
            data.map((el) => (
              <div className="col-lg-4 mb-3" key={el._id}>
                <div
                  className="card shadow-lg rounded-4 overflow-hidden"
                  onClick={() => setSelectedVehicle(el)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={BASE_URL + el.Image}
                    alt={el.vehicleName}
                    className="img-fluid w-100"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="p-4">
                    <h5 className="fw-bold text-danger text-uppercase">
                      {el.brandId?.brandName}
                    </h5>
                    <h6>
                      {el.vehicleName}{" "}
                      {el.vehicleType && `(${el.vehicleType})`}
                    </h6>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No vehicles found</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="mt-4">
            <ul className="pagination justify-content-center">
              {page > 1 && (
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() =>
                      setSearchParams({ ...(type && { type }), page: page - 1 })
                    }
                  >
                    Previous
                  </button>
                </li>
              )}
              {[...Array(totalPages)].map((_, i) => (
                <li
                  key={i}
                  className={`page-item ${page === i + 1 ? "active" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setSearchParams({ ...(type && { type }), page: i + 1 })
                    }
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
              {page < totalPages && (
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() =>
                      setSearchParams({ ...(type && { type }), page: page + 1 })
                    }
                  >
                    Next
                  </button>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>

      {/* Variant Selection Modal */}
      {selectedVehicle && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
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
                <button
                  className="btn btn-outline-primary m-2"
                  onClick={() => handleVariantSelect("Petrol")}
                >
                  Petrol
                </button>
                <button
                  className="btn btn-outline-success m-2"
                  onClick={() => handleVariantSelect("Diesel")}
                >
                  Diesel
                </button>
                <button
                  className="btn btn-outline-warning m-2"
                  onClick={() => handleVariantSelect("CNG")}
                >
                  CNG
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
