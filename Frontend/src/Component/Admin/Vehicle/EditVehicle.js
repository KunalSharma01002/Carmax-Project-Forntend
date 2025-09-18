import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import ApiServices, { BASE_URL } from "../../../Services/ApiServices"

export default function EditVehicle() {
  const [vehicleName, setVehicleName] = useState("")
  const [vehicleType, setVehicleType] = useState("")  // ✅ new state for type
  const [Image, setImage] = useState({})
  const [imageName, setImageName] = useState("")
  const [previousImage, setPreviousImage] = useState("")

  const { id } = useParams()
  const nav = useNavigate()

  useEffect(() => {
    let data = { _id: id }
    ApiServices.getSingleVehicle(data)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message)
          setVehicleName(res.data.data.vehicleName)
          setVehicleType(res.data.data.vehicleType) // ✅ set type
          setPreviousImage(res.data.data.Image)
        } else {
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }, [])

  const changeImage = (e) => {
    setImageName(e.target.value)
    setImage(e.target.files[0])
  }

  const handleForm = (e) => {
    e.preventDefault()
    let data = new FormData()
    data.append("_id", id)
    data.append("vehicleName", vehicleName)
    data.append("vehicleType", vehicleType) // ✅ add to form

    if (!!imageName) {
      data.append("Image", Image)
    }

    ApiServices.updateVehicle(data)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message)
          nav("/Admin/ViewVehicle")
        } else {
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  return (
    <>
      {/* Page Heading */}
      <section className="w3l-about-breadcrumb position-relative text-center">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
          <div className="container py-lg-5 py-3">
            <h2 className="title" style={{ fontSize: "40px", fontWeight: "bold" }}>
              Vehicle
            </h2>
            <ul className="breadcrumbs-custom-path mt-2">
              <li>
                <a href="#url" style={{ fontSize: "20px", fontWeight: "bold" }}>
                  DashBoard
                </a>
              </li>
              <li
                className="active"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                <span
                  className="fa fa-angle-double-right mx-2"
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                  aria-hidden="true"
                />{" "}
                Edit Vehicle{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Edit Vehicle Card */}
      <div className="container my-5">
        <div
          className="card px-5 c1 w-50 mx-auto"
          style={{ border: "1px solid grey", boxShadow: "10px 10px 5px grey" }}
        >
          <h1
            className="text-center my-3 text-danger"
            style={{ fontSize: "50px", fontWeight: "bold" }}
          >
            Edit Vehicle
          </h1>
          <img
            src={BASE_URL + previousImage}
            alt="previous"
            style={{ height: "100px", width: "100px" }}
          />

          <form onSubmit={handleForm}>
            {/* Vehicle Name */}
            <div className="row my-3">
              <div className="col-md-3">Vehicle Name</div>
              <div className="col-md-9">
                <input
                  required
                  className="form-control"
                  type="text"
                  value={vehicleName}
                  onChange={(e) => setVehicleName(e.target.value)}
                />
              </div>
            </div>

            {/* Vehicle Type */}
            <div className="row my-3">
              <div className="col-md-3">Vehicle Type</div>
              <div className="col-md-9">
                <select
                  className="form-control"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  required
                >
                  <option value="">-- Select Type --</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="MUV">MUV</option>
                  <option value="MUV">Van</option>
                  <option value="MUV">Electric</option>
                </select>
              </div>
            </div>

            {/* Vehicle Image */}
            <div className="row my-3">
              <div className="col-md-3">Image</div>
              <div className="col-md-9">
                <input
                  className="form-control"
                  type="file"
                  value={imageName}
                  onChange={changeImage}
                />
              </div>
            </div>

            <button
              className="btn btn-danger d-block mx-auto my-3 col-5"
              name="submit_btn"
              style={{ width: "25%", fontSize: "25px" }}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
