import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import ApiServices from "../../Services/ApiServices"


export default function Login(){

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const nav=useNavigate()
   
      
        const handleForm=(e)=>{
            e.preventDefault()  
            let  myData={
              email:email,
              password:password
          }
          // console.log(loginData);

      ApiServices.login(myData)
          .then((res)=>{
              if(res.data.success){
                  toast.success(res.data.message)
                  let userType=res?.data?.data?.
                  userType
                  sessionStorage.setItem("token",res.data.token)
                  sessionStorage.setItem("userId",res.data.data._id)
                  sessionStorage.setItem("userType",res.data.data.userType)
                  sessionStorage.setItem("name",res.data.data.name)
                  
                  if(userType==1){
                      nav("/Admin")
                  }else{
                      nav("/Home")
                  }
              }else{
                  toast.error(res.data.message)
              }
          })
          .catch((err)=>{
            
              toast.error(err.message)
          })
        }
       
    

        

    return(
        <>
       
       <section style={{ backgroundImage: 'url("/assets/images/Cars1.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "top center",
      minHeight: 700,

       }}>
         {/* <div style={{backgroundColor:"rgba(0,0,0,0.7)", minHeight:"700px"}}></div> */}
        
  <div className="container py-5 h-100" style={{position:"absolute", top:"5vh",left:"10vh", minHeight:"100px",}}>
 
    <div className="row d-flex justify-content-center align-items-center  h-100">
      <div className="col col-xl-5 ">
        <div className="card" style={{ borderRadius: 20 }}>
          <div className="row g-0 ">
            
            <div className="col-md-5 col-lg-11 d-flex align-items-center">
              <div className="card-body p-5 p-lg-7 text-black">
                <form onSubmit={handleForm}>
                 
                  <h5
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: 1 }}
                  >
                    Sign into your account
                  </h5>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example17"
                      className="form-control form-control-lg"
                      value={email} onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <label className="form-label" htmlFor="form2Example17">
                      Email address
                    </label>
                  </div>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example27"
                      className="form-control form-control-lg"
                      value={password} onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <label className="form-label" htmlFor="form2Example27">
                      Password
                    </label>
                  </div>
                  <div className="pt-1 mb-4">
                    <button
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-dark btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <a className="small text-muted" href="#!">
                    Forgot password?
                  </a>
                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?{" "}
                    
                    <a href="#!" style={{ color: "#393f81" }}>
                      Register here
                    </a>
                  </p>
                  <a href="#!" className="small text-muted">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  
</section>

     
        </>
    )
}