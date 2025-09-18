import { useEffect, useState, useRef } from "react"
import { Link, useParams } from "react-router-dom"
import { FadeLoader } from "react-spinners"
import { toast } from "react-toastify"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ApiServices, { BASE_URL } from "../../../Services/ApiServices"
import "../../Style/Card.css"

export default function ViewServiceUser() {
  const [data, setData] = useState([])
  const [active, setActive] = useState("all")
  const scrollRef = useRef(null)
  const { vehicleId } = useParams()   // 👈 get vehicleId from URL

  const categories = [
  
    { id: "Car Services", name: "Car Services", icon: "/assets/icons/car-service.png" },
    { id: "Denting Painting", name: "Denting Painting", icon: "/assets/icons/denting.png" },
    { id: "Mechanical Repairs", name: "Mechanical Repairs", icon: "/assets/icons/custom-repair.png" },
    { id: "Car AC Services", name: "Car AC Services", icon: "/assets/icons/ac-repair.png" },
    { id: "Car Cleaning", name: "Car Cleaning", icon: "/assets/icons/cleaning.png" },
  ]

  useEffect(() => {
    ApiServices.allUserService({ vehicleId })   // 👈 pass vehicleId to backend
      .then((res) => {
        if (res.data.success) {
          setData(res.data.data)
        } else {
          toast.error(res.data.message)
        }
      })
      .catch((err) => toast.error(err.message))
  }, [vehicleId])

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -250, behavior: "smooth" })
  }

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 250, behavior: "smooth" })
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="w3l-about-breadcrumb position-relative text-center">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
          <div className="container py-lg-5 py-3">
            <h2 className="title">Services</h2>
            <ul className="breadcrumbs-custom-path mt-2">
              <li><a href="/">Home</a></li>
              <li className="active"><span className="fa fa-angle-double-right mx-2" /> Services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ Category Carousel */}
      <div className="container my-4">
        <div className="d-flex align-items-center position-relative">
          <button className="btn btn-light shadow-sm rounded-circle me-2" onClick={scrollLeft}>
            <ChevronLeft size={20} />
          </button>
          <div ref={scrollRef} className="d-flex overflow-auto hide-scrollbar"
            style={{ scrollBehavior: "smooth", gap: "20px", flex: 1, padding: "10px 0" }}>
            {categories.map((cat) => (
              <div key={cat.id}
                className={`text-center px-4 py-3 rounded-4 cursor-pointer ${
                  active === cat.id ? "active-tab shadow" : "inactive-tab"
                }`}
                onClick={() => setActive(cat.id)}
                style={{
                  minWidth: "120px",
                  border: active === cat.id ? "2px solid #0d6efd" : "1px solid #ddd"
                }}
              >
                <img src={cat.icon} alt={cat.name} width="50" height="50" />
                <p className="mt-2 fw-semibold">{cat.name}</p>
              </div>
            ))}
          </div>
          <button className="btn btn-light shadow-sm rounded-circle ms-2" onClick={scrollRight}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Services */}
      <div className="container py-5">
        {data.length === 0 ? (
          <div className="text-center mt-5">
            <FadeLoader color="#0d6efd" />
          </div>
        ) : (
          <div className="row g-4">
            {data
              .filter((el) => active === "all" || el.serviceCategory === active)
              .map((el) => (
                <div className="col-md-4" key={el._id}>
                  <div className="card h-100 border-0 shadow rounded-4 overflow-hidden">
                    <img
                      src={BASE_URL + el?.Image}
                      alt={el?.serviceName}
                      className="card-img-top"
                      style={{ height: "220px", objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-bold mb-2">{el?.serviceName}</h5>
                      <h6 className="text-danger fw-semibold mb-3">₹ {el?.price}</h6>
                      <p className="text-muted small mb-4">
                        {el?.description?.length > 60
                          ? el?.description.substring(0, 60) + "..."
                          : el?.description}
                      </p>
                      <div className="d-flex justify-content-between mt-auto">
                        <Link to={`/user/viewSingleService/${el._id}/${el.vehicleId?._id}`}
                          className="btn btn-outline-primary btn-sm rounded-pill px-3">
                          Know More
                        </Link>
                        <Link to={`/user/Addbooking/${el._id}/${el.vehicleId?._id}`}>
                          <button className="btn btn-danger">Book Now</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  )
}
