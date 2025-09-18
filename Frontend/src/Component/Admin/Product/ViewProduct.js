import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FadeLoader } from "react-spinners"

import { toast } from "react-toastify"

export default function ViewProduct(){
 
    const [data,setData]=useState([])
    const [load,setLoad]=useState(true)
    useEffect(
        ()=>{
           
         axios.post("http://localhost:2000/api/product/add")
            .then((res)=>{
             if(res.data.success==true){
                toast.success(res.setData.message)
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
        },[]
    )

   
    return(
        <>
        <section className="w3l-about-breadcrumb position-relative text-center">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
        <div className="container py-lg-5 py-3">
            <h2 className="title">Product</h2>
            <ul className="breadcrumbs-custom-path mt-2">
            <li>
                <a href="#url">DashBoard</a>
            </li>
            <li className="active">
                <span
                className="fa fa-angle-double-right mx-2"
                aria-hidden="true"
                />{" "}
                AddProduct{" "}
            </li>
            </ul>
        </div>
        </div>
    </section>
    <br/>
    <div className="nav-item col-2 float-right mb-2">
                <Link
                  to={"/Admin/AddProduct"}
                  className="btn btn-outline-danger btn-lg "
                >
              AddProduct
                </Link>
              </div>
        { load==true?
           <div className="d-flex justify-content-center my-5">
            <FadeLoader color="red" />
         
       </div>
     
        :
        
            <div className="container  ">
                <table className="table table table-bordered table-hover text-center ">
                    <thead>
                    <tr className="table-danger" >
                        <td>Sno</td>
                        <td>Product Name</td>
                        <td>Product Image</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Quantity</td>
                        <td>Action</td>
                    </tr> 
                    </thead>
                    <tbody>
                    <tr>
                    <td>1</td>
                    <td>Disc Pad</td>
                    <td> <img src="/assets/images/disc pad.jpg" height={100} width={100}/></td>
                    <td>300rs</td>
                    <td>Bosch F002H60037 Front Brake Pad for Passenger Cars</td>
                    <td>10</td>
                    <td>
                
                         <i className="bi bi-pencil-square btn btn-danger "></i>
                         <i className="bi bi-trash btn btn-danger ml-2  "></i>
                    </td>
                    </tr>
                  
                    {/* {
                        data?.map(
                            (el,index)=>(
                                <tr>
                                    <td><h4>{index+1}</h4></td>
                                    <td><h4>{el?.BrandName}</h4></td>
                                    <td>
                                    <img src={"http://localhost:2000/"+el?.Logo} style={{height:"100px",width:"100px"}}/>
                                    </td>
                                    <td>
                            {el.status==true?"Active":"In-active"}
                            </td>
                           
                                </tr>
                            )
                        )
                    } */}
                    </tbody>
                </table>
            </div>

         
        }
        </>
    )
}