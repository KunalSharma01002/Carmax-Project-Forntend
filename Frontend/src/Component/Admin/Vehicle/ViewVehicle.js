import { useEffect, useState } from "react"
import { BeatLoader } from "react-spinners"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import ApiServices, { BASE_URL } from "../../../Services/ApiServices"
import * as qs from "qs"

export default function ViewVehicle() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  useEffect(() => {
    fetchDept()
  }, [])

  const fetchDept = () => {
    ApiServices.allVehicle()
      .then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message)
          setData(res.data.data)
        } else {
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  const deleteVehicle = (id, deleteVehicle) => {
    const data = { _id: id, deleteVehicle: deleteVehicle }
    ApiServices.deleteVehicle(qs.stringify(data))
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message)
          fetchDept()
        } else {
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(data.length / itemsPerPage)

  return (
    <>
      <section className="w3l-about-breadcrumb position-relative text-center">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
          <div className="container py-lg-5 py-3">
            <h2 className="title" style={{ fontSize: "40px", fontWeight: "bold" }}>Vehicle</h2>
            <ul className="breadcrumbs-custom-path mt-2">
              <li>
                <a href="#url" style={{ fontSize: "20px", fontWeight: "bold" }}>DashBoard</a>
              </li>
              <li className="fa fa-angle-double-right mx-2" style={{ fontSize: "20px", fontWeight: "bold" }}>
                <span aria-hidden="true" /> Manage Vehicle{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <button className="btn btn-outline-danger btn-lg m-4 float-right">
        <Link className="nav-link " style={{ fontSize: "20px", fontWeight: "bold" }} to={"/Admin/AddVehicle"}>
          Add Vehicle
        </Link>
      </button>

      <div className="container text-center">
        <table className="table table-striped table-hover table-danger table-bordered animated slideInLeft"
          style={{ boxShadow: "10px 0px 10px grey" }}>
          <thead>
            <tr className="table-danger" style={{ fontSize: "20px", fontWeight: "bold" }}>
              <td>Sno</td>
              <td>Vehicle Name</td>
              <td>Brand Name</td>
              <td>Vehicle Type</td>
              <td>Image</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((el, index) => (
              <tr key={el._id}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{el?.vehicleName}</td>
                <td>{el?.brandId?.brandName}</td>
                <td>{el?.vehicleType}</td>
                <td>
                  <img src={BASE_URL + el?.Image} style={{ height: "80px", width: "120px" }} alt="vehicle" />
                </td>
                <td>{el?.status ? "Active" : "Inactive"}</td>
                <td>
                  <Link to={"/Admin/EditVehicle/" + el?._id}>
                    <i className="bi bi-pencil-square btn btn-danger "></i>
                  </Link>

                  {el.delete ? (
                    <button
                      style={{
                        background: "#e74c3c",
                        color: "white",
                        padding: "10px 15px",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: "bold",
                        transition: "0.3s",
                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
                      }}
                      onClick={() => deleteVehicle(el._id, false)}
                    >
                      🔄 Undo
                    </button>
                  ) : (
                    <button
                      style={{
                        background: "#e74c3c",
                        color: "white",
                        padding: "10px 15px",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: "bold",
                        transition: "0.3s",
                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
                      }}
                      onClick={() => deleteVehicle(el._id, true)}
                    >
                      🗑️
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <nav>
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
