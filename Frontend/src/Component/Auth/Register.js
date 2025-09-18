
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import ApiServices from "../../Services/ApiServices"


export default function Register(){

     const[name,setFirstName]=useState("")
     const[address,setAddress]=useState("")
     const[email,setEmail]=useState("")
     const[password,setPassword]=useState("")
     const[contact,setContactNumber]=useState("")
     const[pincode,setPinCode]=useState("")
    
     const nav=useNavigate()
    const handleForm=(e)=>{
        e.preventDefault()
        let mydata={
            name:name,
            email:email,
            password:password,
            address:address,
            contact:contact,
            pincode:pincode,
        }

     ApiServices.register(mydata)
        .then((res)=>{ 
                  if(res.data.success){
                    toast.success(res.data.message)
                    setTimeout(()=>{
                      nav("/login")
                    },1500)
                  
                    }else{
                        toast.error(res.data.message)
                    }
        }).catch((err)=>{
            toast.error(err.message)
        })
      }

 

  

     
    return(
        <>
     <section style={{ backgroundImage: 'url("/assets/images/cars2.jpg")',
      backgroundSize: "cover",
      backgroundPosition: 'center center' ,
      backgroundRepeat: "no-repeat",
      width: '100%',
      height:'400px',
      

       }}  className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div
          className="card shadow-2-strong card-registration"
          style={{ borderRadius: 15 }}
        >
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form onSubmit={handleForm}>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div data-mdb-input-init="" className="form-outline">
                    <input
                      type="text"
                      id="firstName"
                      className="form-control form-control-lg"
                      value={name} onChange={(e)=>{setFirstName(e.target.value)}}
                    />
                    <label className="form-label" htmlFor="firstName">
                      First Name
                    </label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div data-mdb-input-init="" className="form-outline">
                    <input
                      type="text"
                      id="address"
                      className="form-control form-control-lg"
                      value={address} onChange={(e)=>{setAddress(e.target.value)}}
                    />
                    <label className="form-label" htmlFor="address">
                     address
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">
                  <div
                    data-mdb-input-init=""
                    className="form-outline datepicker w-100"
                  >
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="MyPassword"
                      value={password} onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <label htmlFor="birthdayDate" className="form-label">
                      Password
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 pb-2">
                  <div data-mdb-input-init="" className="form-outline">
                    <input
                      type="email"
                      id="emailAddress"
                      className="form-control form-control-lg"
                      value={email} onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <label className="form-label" htmlFor="emailAddress">
                      Email
                    </label>
                  </div>
                </div>
                <div className="col-md-6 mb-4 pb-2">
                  <div data-mdb-input-init="" className="form-outline">
                    <input
                      type="contact"
                      maxLength={10}
                      name="contact"
                      id="phoneNumber"
                      className="form-control form-control-lg"
                      value={contact} onChange={(e)=>{setContactNumber(e.target.value)}}
                    />
                    <label className="form-label" htmlFor="phoneNumber">
                      Phone Number
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                
                <div className="col-md-6 mb-4 pb-2">
                  <div data-mdb-input-init="" className="form-outline">
                    <input
                      type="contact"
                      maxLength={10}
                      name="contact"
                      id="phoneNumber"
                      className="form-control form-control-lg"
                      value={pincode} onChange={(e)=>{setPinCode(e.target.value)}}
                    />
                    <label className="form-label" htmlFor="phoneNumber">
                    Pincode
                    </label>
                  </div>
                </div>
              </div>
             
              <div className="mt-4 pt-2">
                <button
                  data-mdb-ripple-init=""
                  className="btn btn-primary btn-lg"
                  type="submit"
                 
                > Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </>
    )
}