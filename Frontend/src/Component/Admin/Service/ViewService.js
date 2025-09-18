
import {  useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FadeLoader } from "react-spinners"
import { toast } from "react-toastify"
import * as qs from "qs"
import ApiServices, { BASE_URL } from "../../../Services/ApiServices"

export default function ViewService(){
 
    const [data,setData]=useState([])
    const [load,setLoad]=useState(true)
    useEffect(
        ()=>{      
             fetchServices()    
        },[])
    const fetchServices=()=>{
        
          ApiServices.allService()
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
            .finally(
                ()=>{
                    setLoad(false)
                }
            )
        }

       const deleteService = (id, deleteService) => {
        const data = { _id: id, deleteService: deleteService };
        ApiServices.deleteService(qs.stringify(data))
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                   fetchServices();
                } else {
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
            <h2 className="title" style={{fontSize:"40px",fontWeight: 'bold'}} >Service</h2>
            <ul className="breadcrumbs-custom-path mt-2">
            <li>
                <a href="#url" style={{fontSize:"20px",fontWeight: 'bold'}} >DashBoard</a>
            </li>
            <li className="active" style={{fontSize:"20px",fontWeight: 'bold'}} >
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
    <br/>
    <div className="nav-item float-right m-4">
                <Link 
                  to={"/Admin/AddService"}
                  className="btn btn-outline-danger btn-lg " style={{fontSize:"20px", fontWeight: 'bold'}}
                >
             Add Service
                </Link>
              </div>
        { load==true?
           <div className="d-flex justify-content-center my-5">
            <FadeLoader color="red" />
         
       </div>
     
        :
        
            <div className="container text-center" >
                <table className="table table-striped table-hover table-danger table-bordered animated slideInLeft" style={{boxShadow:"10px 0px 10px grey"}}>
                  <thead>
                    <tr className="table-danger" style={{fontSize:"20px",  fontWeight: 'bold'}}>
                        <td>Sno</td>
                        <td>Vehicle Name</td>
                        <td>Service Name</td>
                        <td>Price</td>
                        <td>service Category</td>
                        <td>Description</td>
                        <td>Additional Information</td>
                        <td>Images</td>
                        <td colSpan={2}>Action</td>

                    </tr>
                    </thead>
                    <tbody  >
                    
                    {
                        data?.map(
                            (el,index)=>(
                                <tr key={el._id}>
                                    <td>{index+1}</td>
                                    <td>{el?.vehicleId?.vehicleName}</td>
                                    <td>{el?.serviceName}</td>
                                    <td>
                                    {el?.price}
                                    </td>
                                    <td>{el?.serviceCategory}</td>
                                    <td>{el?.description}</td>
                                    <td>{el?.additionalInformation}</td>
                                    <td>
                                      <img 
                                        src={BASE_URL + el?.Image} 
                                        alt="" 
                                        style={{ height: "80px", width: "120px" }} 
                                        />
                                    </td>
                                    
                                    <td>
                                       <Link to={ "/Admin/EditService/"+el?.id}>
                                       <i className="bi bi-pencil-square btn btn-danger "></i>
                                       </Link>
                                     </td>
                                    <td>
                                            {el.delete ? (
                                                <button style={{
                                                    background: "#e74c3c",
                                                    color: "white",
                                                    padding: "10px 15px",
                                                    borderRadius: "8px",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    fontSize: "14px",
                                                    fontWeight: "bold",
                                                    transition: "0.3s",
                                                    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)"
                                                }}
                                                    onMouseOver={(e) => e.target.style.background = "#c0392b"}
                                                    onMouseOut={(e) => e.target.style.background = "#e74c3c"}
                                                    onClick={() => deleteService(el._id, false)}>
                                                    🔄 Undo
                                                </button>
                                            ) : (
                                                <button style={{
                                                    background: "#e74c3c",
                                                    color: "white",
                                                    padding: "10px 15px",
                                                    borderRadius: "8px",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    fontSize: "14px",
                                                    fontWeight: "bold",
                                                    transition: "0.3s",
                                                    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)"
                                                }}
                                                    onMouseOver={(e) => e.target.style.background = "#f8796aff"}
                                                    onMouseOut={(e) => e.target.style.background = "#e74c3c"}
                                                    onClick={() => deleteService(el._id, true)}>
                                                    🗑️ Delete
                                                </button>
                                            )}
                                        </td>
                           
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
              

            </div>

         
        }
        </>
    )
}