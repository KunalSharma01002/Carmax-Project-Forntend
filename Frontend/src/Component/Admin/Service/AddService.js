
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import ApiServices from "../../../Services/ApiServices"

  export default function AddService(){
    
    const [data,setData]=useState([])
    const [vehicleId,setVehicleId]=useState("")
    const [serviceName,setServiceName]=useState("")
    const [serviceCategory,setServiceCategory]=useState("")
    const [price,setPrice]=useState("")
    const [description,setDescription]=useState("")
    const [additionalInformation,setAdditionalInformation]=useState("")
    const [Image,setImage]=useState({})
    const [imageName,setImageName]=useState("")
    const changeImage=(e)=>{
      setImageName(e.target.value)
      setImage(e.target.files[0]);
    }
     useEffect(()=>{
       ApiServices.allVehicle()
            .then((res)=>{
              if(res.data.success){
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
    
     
      let data=new FormData()
      data.append("vehicleId",vehicleId);
      data.append ("serviceName",serviceName);
      data.append("serviceCategory", serviceCategory);
      data.append ("price",price);
      data.append ("description",description);
      data.append ("additionalInformation",additionalInformation);
      data.append("Image",Image);
      
      // console.log(data);
      ApiServices.addService(data)
      .then((res)=>{
          if(res.data.success){
              toast.success(res.data.message)
              setData([])
              setVehicleId("")
              setServiceName("")
              setServiceCategory("")
              setPrice("")
              setDescription("")
              setAdditionalInformation("")
              setImage({})
              setImageName("")
             
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
            <h2 className="title" style={{fontSize:"40px",fontWeight: 'bold'}}>Service</h2>
            <ul className="breadcrumbs-custom-path mt-2"style={{fontSize:"20px",fontWeight: 'bold'}}>
            <li>
                <a href="#url" >DashBoard</a>
            </li>
            <li className="active">
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
            <div className="container  my-3 py-5 animated slideInDown">
      <div
        className="card px-5 c1 w-50 mx-auto"
        style={{ border: "1px solid grey", boxShadow:"0px 0px 10px grey" }}
      >
        <h1 className="text-center my-3 text-danger " style={{fontSize:"50px",fontWeight: 'bold'}}>Add Service</h1>
        <form  onSubmit={handleForm} >
          <div className="row my-3" >
                <div className="col-sl-3">
              Brand Name
            </div>
             <div className="d-flex ">   
          <select className="form-control w-50 my-3" value={vehicleId} onChange={(e)=>{setVehicleId(e.target.value)}}>
            <option selected disabled value={""}>Choose Brand</option> 
            {
                data?.map((el,index)=>(
                    <option key={index} value={el._id}>{el.vehicleName}</option>
                ))
            }
        </select>
        </div>
        
            <div className="col-sl-3">
              Service Name
            </div>
            <div className="col-md-12">
              <input
                required
                className="form-control"
                type="text"
                name="servicename"
                value={serviceName} onChange={(e)=>{setServiceName(e.target.value)}}
              />
            </div>
          </div>
          <div className="row my-3">
          <div className="col-sl-3">Select Service Category</div>
          <div className="col-md-11">
            <select
              required
              className="form-control"
              name="serviceCategory"
              value={serviceCategory}
              onChange={(e) => setServiceCategory(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="Car Services">Car Service</option>
              <option value="Denting Painting">Denting Painting</option>
              <option value="Mechanical Repairs">Mechanical Repairs</option>
              <option value="Car AC Services">AC Service</option>
              <option value="Car Cleaning">Car Cleaning</option>
            
            </select>
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
                name="price"
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
                name="description"
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
                name="additionalInformation"
                value={additionalInformation} onChange={(e)=>{setAdditionalInformation(e.target.value)}}

              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sl-3">
            Image
            </div>
            <div className="col-md-11">
              <input
                required=""
                className="form-control"
                type="file"
                name="Image"
                value={imageName}
                onChange={changeImage}
              

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
{/*  
   }  */}

     
        </>
     )
}