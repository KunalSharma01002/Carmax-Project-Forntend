import { useEffect, useState } from "react"
import ApiServices, { BASE_URL } from "../../../Services/ApiServices"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"

export default function ViewSingleService() {
  const [service, setService] = useState({})
  const [vehicle, setVehicle] = useState({})
  const [expanded, setExpanded] = useState(false) 

  const { serviceId, vehicleId } = useParams()

  // 👇 fetch service
  useEffect(() => {
    
    let payload = { _id: serviceId }
    ApiServices.getSingleService(payload)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message)
          setService(res.data.data)
        } else {
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }, [serviceId])

  // 👇 fetch vehicle
  useEffect(() => {
  
    let payload = { _id: vehicleId }
    ApiServices.getSingleVehicle(payload)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message)
          setVehicle(res.data.data)
        } else {
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }, [vehicleId])

  // 👇 preview for additionalInformation
  const preview =
    service?.additionalInformation?.length > 100
      ? service.additionalInformation.substring(0, 100) + "..."
      : service?.additionalInformation

  return (
    <>
      <section className="w3l-about-breadcrumb position-relative text-center">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
          <div className="container py-lg-5 py-3">
            <h2 className="title">About Service</h2>
            <ul className="breadcrumbs-custom-path mt-2">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="active">
                <span
                  className="fa fa-angle-double-right mx-2"
                  aria-hidden="true"
                />{" "}
                Service Details{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w3l-content-6">
        <div className="content-6-mian py-5">
          <div className="container py-lg-5">
            <div className="content-info-in row">
              <div className="col-lg-6">
                <img
                  src={BASE_URL + service?.Image}
                  alt={service?.serviceName}
                  style={{ height: "400px", width: "100%", objectFit: "cover" }}
                />
              </div>

              <div className="col-lg-6 mt-lg-0 mt-5 about-right-faq align-self pl-lg-4">
                <div className="title-content text-left mb-2">
                  <h6 className="sub-title">About Service</h6>
                  <h2 className="hny-title">{vehicle?.VehicleName}</h2>
                  <h3 className="hny-title">{service?.serviceName}</h3>
                  <p className="hny-title">Price: {service?.price}</p>
                </div>
                <h3 className="hny-title">Description</h3>
                <p className="mt-3">{service?.description}</p>

                <h3 className="hny-title">Additional Information</h3>
                <p className="mt-3">
                  {expanded ? service?.additionalInformation : preview}{" "}
                  {service?.additionalInformation?.length > 100 && (
                    <span
                      onClick={() => setExpanded(!expanded)}
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      {expanded ? "View Less" : "View More"}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
