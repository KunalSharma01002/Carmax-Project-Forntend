import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import ApiServices, { BASE_URL } from "../../../Services/ApiServices"


export default function ViewVehicleUser() {
  const { brandId } = useParams()
  const [data, setData] = useState([])

  const {id}=useParams()
      useEffect(()=>{
             let data={
                 _id:id
             }
    ApiServices.allVehicle(data) 
          .then((res) => {
        if (res.data.success === true) {
          setData(res.data.data)
        } else {
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }, [brandId])

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Cars of this Brand</h2>
      <div className="row">
        {data.length > 0 ? (
          data.map((el, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow p-3 m-3">
                <img
                  src={BASE_URL + el?.Image}
                  alt={el?.vehicleName}
                  style={{ height: "200px", width: "100%", objectFit: "cover" }}
                />
                <h5 className="mt-2">{el?.vehicleName}</h5>
                
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No cars available for this brand</p>
        )}
      </div>
    </div>
  )
}