import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import ApiServices from "../../../Services/ApiServices"




export default function Addvehicle(){
  const [data,setData]=useState([])
   
   const [brandId,setBrandId]=useState("")
   const [vehicleName,setVehicleName]=useState("")
   const [vehicleType, setVehicleType] = useState("");
   const [Image,setImage]=useState({})
    const [imageName,setImageName]=useState("")    
    const changeImage=(e)=>{
      setImageName(e.target.value)
      setImage(e.target.files[0]);
    }

   
      useEffect(()=>{
              
                 ApiServices.allBrand()
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
            const handleForm = (e) => {
            e.preventDefault();
            let formData = new FormData();
            formData.append("vehicleName", vehicleName);
            formData.append("Image", Image);
            formData.append("brandId", brandId);
            formData.append("vehicleType", vehicleType); 
            ApiServices.addVehicle(formData)
              .then((res) => {
                if (res.data.success) {
                  toast.success(res.data.message);
                  setVehicleName("");
                  setImage({});
                  setImageName("");
                  setVehicleType(""); 
                  toast.error(res.data.message);
                }
              })
              .catch((err) => {
                toast.error(err.message);
              });
          };
    return(
        <>
 <section className="w3l-about-breadcrumb position-relative text-center">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
        <div className="container py-lg-5 py-3">
            <h2 className="title"  style={{fontSize:"40px",fontWeight: 'bold'}}>Vehicle</h2>
            <ul className="breadcrumbs-custom-path mt-2">
            <li>
                <a href="#url"  style={{fontSize:"20px",fontWeight: 'bold'}}>DashBoard</a>
            </li>
            <li className="active" style={{fontSize:"20px",fontWeight: 'bold'}}>
                <span
                className="fa fa-angle-double-right mx-2"  style={{fontSize:"20px",fontWeight: 'bold'}}
                aria-hidden="true"
                />{" "}Add Vehicle{" "}
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
        <form  onSubmit={handleForm} >
          <div className="row my-3">
            <div className="col-sl-3">
              Brand Name
            </div>
             <div className="d-flex ">   
          <select className="form-control w-50 my-3" value={brandId} onChange={(e)=>{setBrandId(e.target.value)}}>
            <option selected disabled value={""}>Choose Brand</option> 
            {
                data?.map((el,index)=>(
                    <option key={index} value={el._id}>{el.brandName}</option>
                ))
            }
        </select>
        </div>
            <div className="col-sl-3">
              Vehicle Name
            </div>
            <div className="col-md-11">
              <input
                required=""
                className="form-control"
                type="text"
                name="name"
                value={vehicleName} onChange={(e)=>{setVehicleName(e.target.value)}}
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
                name="Iamge"
                value={imageName} onChange={changeImage}
              

              />
            </div>
          </div>
         <div className="row my-3">
          <div className="col-sl-3">Vehicle Type</div>
          <div className="col-md-11">
            <select
              required
              className="form-control"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="MUV">MUV</option>
              <option value="MUV">Van</option>
              <option value="MUV">Electric</option>
            </select>
          </div>
        </div>

          <button
          type="submit"
            className="btn btn-danger d-block mx-auto my-3  col-5 " 
            name="submit_btn"
            style={{ width: "25%" ,fontSize:"25px"}}
          >
            Add
            </button>
          </form>
        </div>
      </div>

        </>
    )
}