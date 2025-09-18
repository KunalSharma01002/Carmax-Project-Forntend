
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import ApiServices from "../../../Services/ApiServices"
import { useNavigate, useParams } from "react-router-dom"




  export default function EditService(){
    
    

    const [serviceName,setServiceName]=useState("")
    const [price,setPrice]=useState("")
    const [description,setDescription]=useState("")
    const [additionalInformation,setAdditionalInformation]=useState("")
    const [time,setTime]=useState("")
    const [vehicleTypeId,setVehicleTypeId]=useState("")
    const [data,setData]=useState([])
      const {id}=useParams()
      const nav=useNavigate()
    useEffect(()=>{
        let data={
            _id:id
        }
      ApiServices.getSingleService(data)
              .then((res)=>{
                  if(res.data.success==true){
                      toast.success(res.data.message)
                      setServiceName(res.data.data.serviceName)
                      setPrice(res.data.data.price)
                      setDescription(res.data.data.description)
                      setAdditionalInformation(res.data.data.additionalInformation)
                      setTime(res.data.data.time)
                      setVehicleTypeId(res.data.data.vehicleTypeId)
                      
                  }else{
                      toast.error(res.data.message)
                  }
              })
              .catch((err)=>{
             
                  toast.error(err.message)
              })
  
  
     },[])

     useEffect(()=>{
        
           ApiServices.allVehicle(data)
                   .then((res)=>{
                       if(res.data.success==true){
                           toast.success(res.data.message)
                         
                           setData(res.data.data)
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
        "_id":id,
        "serviceName":serviceName,
        "price":price,
        "description":description,
        "additionalInformation":additionalInformation,
        "time":time,
        "vehicleTypeId":vehicleTypeId,
      }
      // console.log(data);
      ApiServices.updateService(data)
      .then((res)=>{
          if(res.data.success){
              toast.success(res.data.message)
              nav("/Admin/ViewService")
      
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
            <h2 className="title"style={{fontSize:"40px",fontWeight: 'bold'}} >Service</h2>
            <ul className="breadcrumbs-custom-path mt-2">
            <li>
                <a href="#url" style={{fontSize:"20px",fontWeight: 'bold'}} >DashBoard</a>
            </li>
            <li className="active" style={{fontSize:"20px",fontWeight: 'bold'}}>
                <span
                className="fa fa-angle-double-right mx-2" style={{fontSize:"20px",fontWeight: 'bold'}}
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
        style={{ border: "1px solid grey", boxShadow: "0px 0px 10px grey"  }}
      >
        <h1 className="text-center my-3 text-danger"  style={{fontSize:"50px", fontWeight: 'bold'}}> Edit Service</h1>
        <form  onSubmit={handleForm} >
          <div className="row my-3">
            <div className="col-sl-3">
              Service Name
            </div>
            <div className="col-md-12">
              <input
                required
                className="form-control"
                type="text"
                name="name"
                value={serviceName} onChange={(e)=>{setServiceName(e.target.value)}}
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sl-3">
            Price
            </div>
            <div className="col-md-12 ">
              <input
                required
                className="form-control "
                type="number"
                name="name"
                value={price} onChange={(e)=>{setPrice(e.target.value)}}

              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sl-3">
             Description
            </div>
            <div className="col-md-12 ">
              <input
                required
                className="form-control"
                type="text"
                name="name"
                value={description} onChange={(e)=>{setDescription(e.target.value)}}

              />
            </div>
          </div>

          <div className="row my-3">
            <div className="col-sl-3">
             Additional Information
            </div>
            <div className="col-md-12 ">
              <input
                required
                className="form-control"
                type="text"
                name="name"
                value={additionalInformation} onChange={(e)=>{setAdditionalInformation(e.target.value)}}

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
                type="text"
                name="name"
                value={time} onChange={(e)=>{setTime(e.target.value)}}

              />
            </div>
          </div>
          <select  className="form-control w-50 my-3" value={vehicleTypeId} onChange={(e)=>{setVehicleTypeId(e.target.value)}}>
            <option selected disabled value={""}>Choose vehicle</option> 
            {
                data?.map((el,index)=>(
                    <option key={index} value={el._id}>{el.vehicleName}</option>
                ))
            }
        </select>
         
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
{/*  
   }  */}

     
        </>
     )
}