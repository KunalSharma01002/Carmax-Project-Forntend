
import { useState } from "react"

import { toast } from "react-toastify"
import ApiServices from "../../../Services/ApiServices"



  export default function AddBrand(){
    const [brandName,setBrandName]=useState("")
    const [Logo,setLogo]=useState("")
    const [logoName,setLogoName]=useState("")
   
     const changeImage=(e)=>{
      setLogoName(e.target.value)
      setLogo(e.target.files[0]);
    }
    const handleForm=(e)=>{
      e.preventDefault()
    let data=new FormData()
          data.append ("brandName",brandName);
          data.append("Logo",Logo);
          
          // console.log(data);
          ApiServices.addBrand(data)
          .then((res)=>{
              if(res.data.success){
                  toast.success(res.data.message)
                  setBrandName("")
                  setLogo({})
                  setLogoName("")
                 
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
            <h2 className="title">Brand</h2>
            <ul className="breadcrumbs-custom-path mt-2">
            <li>
                <a href="#url">DashBoard</a>
            </li>
            <li className="active">
                <span
                className="fa fa-angle-double-right mx-2"
                aria-hidden="true"
                />{" "}
                AddBrand{" "}
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
        <h1 className="text-center my-3">Add Brand</h1>
        <form  onSubmit={handleForm}>
          <div className="row my-3">
            <div className="col-sl-3">
              BrandName
            </div>
            <div className="col-md-10">
              <input
                required=""
                className="form-control"
                type="text"
                name="name"
                value={brandName} onChange={(e)=>{setBrandName(e.target.value)}}
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sl-3">
            Logo
            </div>
            <div className="col-md-11">
              <input
                required=""
                className="form-control"
                type="file"
                name="Iamge"
                value={logoName} onChange={changeImage}

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