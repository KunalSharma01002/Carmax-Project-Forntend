
import {  useEffect, useState } from "react"
import { toast } from "react-toastify"
import ApiServices from "../../../Services/ApiServices"
import { useNavigate, useParams } from "react-router-dom"





  export default function AddBooking(){
    
   
    
    const [cost,setCost]=useState("")
    const [serviceName,setServiceName]=useState("")
    const [vehicleName,setVehicleName]=useState("")
    const [address,setAddress]=useState("")
    const [date,setDate]=useState("") 
    const [time,setTime]=useState("")
   
   

    
          
  const { serviceId, vehicleId } = useParams();
  const nav=useNavigate()


 
  useEffect(()=>{
               let data={
                   _id:serviceId
               }
             ApiServices.getSingleService(data)
                     .then((res)=>{
                         if(res.data.success){
                             toast.success(res.data.message)
                             setCost(res.data.data.price)
                             
                             setServiceName(res.data.data.serviceName)                         
                             
                         }else{
                             toast.error(res.data.message)
                         }
                     })
                     .catch((err)=>{
                    
                         toast.error(err.message)
                     })
         
         
            },[])
              useEffect(()=>{
               let data={
                   _id:vehicleId
               }
             ApiServices.getSingleVehicle(data)
                     .then((res)=>{
                         if(res.data.success){
                             toast.success(res.data.message)
                           
                             setVehicleName(res.data.data.serviceName)                         
                             
                         }else{
                             toast.error(res.data.message)
                         }
                     })
                     .catch((err)=>{
                    
                         toast.error(err.message)
                     })
         
         
            },[])
         
         
           
   
    const handleForm=(e)=>{
      e.preventDefault();
    
      let data={
        "cost":cost,
        "address":address,
        "date":date,
        "time":time,
        "serviceId":serviceId,
        "vehicleId":vehicleId,
      }
      // console.log(data);
      ApiServices.addBooking(data)
      .then((res)=>{
          if(res.data.success){
              toast.success(res.data.message)
              setCost("")
              setAddress("")
              setDate("")
              setTime("")
              nav("/user/ViewHistory")
              
          }else{
              toast.error(res.data.message)
             
          }
      }).catch((err)=>{
          toast.error(err.message)
      })
    
    
    //   .finally(
    //     ()=>{
    //         setLoad(false)
    //     }
    // )
    
    } 

      
    
   
     return(
        <>

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
         {/* { load==true?
            <div className="d-flex justify-content-center my-5">
                <FadeLoader color="red" />
            
          </div>
          
            : */}
            <div className="container my-5">
      <div
        className="card px-5 c1 w-50 mx-auto"
        style={{ border: "1px solid grey", boxShadow: "10px 10px 5px grey" }}
      >
        <h1 className="text-center my-3 text-danger">Add Booking</h1>
        <form  onSubmit={handleForm}>
          <div className="row my-3">
            <div className="col-sl-3">
            Selected Vehicle: {vehicleName}
            </div>
          <div className="col-sl-3">
             Service Name: {serviceName}
            </div>
            <div className="col-sl-3">
             Cost : {cost}
            </div>
           
          </div>
          <div className="row my-3">
            <div className="col-sl-3">
            Address
            </div>
            <div className="col-md-12 ">
              <input
                required
                className="form-control "
                type="text"
                name="name"
                value={address} onChange={(e)=>{setAddress(e.target.value)}}

              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sl-3">
             Date
            </div>
            <div className="col-md-12 ">
              <input
                required
                className="form-control"
                type="date"
                name="name"
                min={new Date().toISOString().split('T')[0]}
                value={date} onChange={(e)=>{setDate(e.target.value)}}

              />
            </div>
          </div>

          
          <div className="row my-3">
            <div className="col-sl-3">
             Time
            </div>
            <div className="col-md-12 ">
              <input
                required
                className="form-control"
                type="time"
                name="name"
                
                value={time} onChange={(e)=>{setTime(e.target.value)}}

              />
            </div>
          </div>
         
    
          
          <button
            className="btn btn-danger d-block mx-auto my-3 "
            name="submit_btn"
            style={{ width: "25%" }}
          >
            Add
            </button>
          </form>
        </div>
      </div>
{/*  
   }  */}

     
        </>
     )
}