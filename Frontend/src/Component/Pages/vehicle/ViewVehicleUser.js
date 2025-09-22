import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useParams, useSearchParams } from "react-router-dom";
import ApiServices, { BASE_URL } from "../../../Services/ApiServices";

export default function ViewVehicleUser() {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [expanded, setExpanded] = useState({});
  const { brandId } = useParams();

  const page = parseInt(searchParams.get("page")) || 1;
  const type = searchParams.get("type") || "";

  useEffect(() => {
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

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const vehicleTypes = [
    { name: "All Types", value: "", icon: "bi-list-ul" },
    { name: "SUV", value: "SUV", icon: "bi-truck text-danger" },
    { name: "Sedan", value: "Sedan", icon: "bi-car-front-fill text-success" },
    { name: "Hatchback", value: "Hatchback", icon: "bi-car-front text-primary" },
    { name: "MPVs", value: "MPVs", icon: "bi-people text-warning" },
    { name: "Van", value: "Van", icon: "bi-truck-front text-info" },
    { name: "Electric", value: "Electric", icon: "bi-lightning-charge text-purple" },
  ];

  return (
    <>
      {/* Header */}
      <section className="w3l-about-breadcrumb position-relative text-center">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
          <div className="container py-lg-5 py-3">
            <h2 className="title">Vehicle</h2>
            <ul className="breadcrumbs-custom-path mt-2">
              <li><a href="/">Home</a></li>
              <li className="active">
                <span className="fa fa-angle-double-right mx-2" /> Vehicle
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
              onClick={() => {
                setSearchParams({ ...(t.value && { type: t.value }), page: 1 });
              }}
            >
              <i className={`bi ${t.icon} me-1`}></i> {t.name}
            </button>
          ))}
        </div>

        {/* Vehicle Cards */}
        <div className="row">
          {data.length > 0 ? (
            data.map((el) => (
              <div className="col-lg-4 mb-2" key={el._id}>
                <Link
                  to={`/user/viewService/${el._id}`} // 👈 navigate to service page
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="card shadow-lg rounded-4 overflow-hidden">
                    <img
                      src={BASE_URL + el.Image}
                      alt={el.vehicleName}
                      className="img-fluid w-100"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="p-4">
                      <h5 className="fw-bold text-uppercase text-danger">
                        {el.brandId?.brandName}
                      </h5>
                      <h6>
                        {el.vehicleName}{" "}
                        {el.vehicleType && `(${el.vehicleType})`}
                      </h6>
                    </div>
                  </div>
                </Link>
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
                  className={`page-item ${page === i + 1 ? "active" : ""}`}
                  key={i}
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
    </>
  );
}
