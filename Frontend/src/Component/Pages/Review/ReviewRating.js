import { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ApiServices from "../../../Services/ApiServices";
export default function ReviewRating(){

 
 const [rating,setRating] =useState(null)
 const [serviceId,setServiceId]=useState("")
 const [bookingId,setBookingId]=useState("")
 const [feedback,setFeedback] =useState("")
 const [hover ,setHover]= useState(null)

 const {id}=useParams()
  useEffect(()=>{
                let data={
                    _id:id
                }
              ApiServices.getSingleBooking(data)
                      .then((res)=>{
                          if(res.data.success){
                              toast.success(res.data.message)
                              setServiceId(res.data.data?.serviceId)     
                              setBookingId(res.data.data?.bookingId)            
                              
                          }else{
                              toast.error(res.data.message)
                          }
                      })
                      .catch((err)=>{
                     
                          toast.error(err.message)
                      })
          
          
             },)

         const handleForm=(e)=>{
              e.preventDefault();
            
              let data={
                "bookingId":bookingId,
                "rating":rating,
                "feedback":feedback,
                "serviceId":serviceId,
              
              }
              // console.log(data);
              ApiServices.addReview(data)
              .then((res)=>{
                  if(res.data.success){
                      toast.success(res.data.message)
                      setRating("")
                      setFeedback("")
                     
                      
                  }else{
                      toast.error(res.data.message)
                     
                  }
              }).catch((err)=>{
                  toast.error(err.message)
              })     
          

            }
    return(<>
     
     <section className="w3l-about-breadcrumb position-relative text-center">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
        <div className="container py-lg-5 py-3">
            <h2 className="title">Service</h2>
            <ul className="breadcrumbs-custom-path mt-2">
            <li>
                <a href="#url">DashBoard</a>
            </li>
            <li className="active">
                <span
                className="fa fa-angle-double-right mx-2"
                aria-hidden="true"
                />{" "}
                AddService{" "}
            </li>
            </ul>
        </div>
        </div>
    </section>
    <div className="container my-5">
      <div
        className="card px-5 c1 w-50 mx-auto"
        style={{ border: "1px solid grey", boxShadow: "10px 10px 5px grey" }}
      >
        <h1 className="text-center my-3 text-danger " style={{fontSize:"50px", fontWeight: 'bold'}}>Add Vehicle</h1>
        <form  onSubmit={handleForm} style={{}}>
          <div className="row my-3">
           
            <div className="col-sl-3">
            Service rating
            </div>
            <div className="col-md-11">
            { [...Array(5)].map((star,index)=>{
         const currentRating = index+1;
         return(
          <label>
        <input
        type="radio"
        name="rating"
        value={currentRating}
        onClick={()=>setRating(currentRating)}
        />
        <FaStar 
        className="star"
        size={50}
        color={currentRating<= (hover ||rating)? "#ffc107":"#e4e5e9"}
        onMouseEnter={()=>setHover(currentRating)}
        onMouseLeave={()=>setHover(null)}
        />
        </label>
         )
         })
         }
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sl-3">
            Feedback
            </div>
            <div className="col-md-11">
              <input
                required=""
                className="form-control"
                type="text"
                name="name"
                value={feedback} onChange={(e)=>{setFeedback(e.target.value)}}
              

              />
            </div>
          </div>
          <button
            className="btn btn-danger d-block mx-auto my-3  col-5 " 
            name="submit_btn"
            style={{ width: "25%" ,fontSize:"25px"}}
          >
            Add
            </button>
          </form>
        </div>
      </div>
       
     
      
    </>)
}