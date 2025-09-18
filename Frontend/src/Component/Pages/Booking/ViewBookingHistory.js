import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FadeLoader } from "react-spinners"
import { toast } from "react-toastify"
import ApiServices from "../../../Services/ApiServices"
import * as qs from "qs"


export default function ViewBookingHistory(){
 
    const [data,setData]=useState([])
   
    useEffect(
      ()=>{      
           fetchDept()    
      },[])
      const fetchDept=()=>{
          let data={
            userId:sessionStorage.getItem("userId")
          }
          ApiServices.allUserBooking(data)
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
         }
      
       const changeStatus=(id,status)=>{
              let data={
                  _id:id,
                  status:status
              }
              ApiServices.bookingChangeStatus(qs.stringify(data))
              .then((res)=>{
                  if(res.data.success){
                      toast.success(res.data.message)
                      fetchDept()
                  }else{
                      toast.error(res.data.message)
                  }
              })  
              .catch((err)=>{
                  toast.error(err.message)
              })
          }
      
      return(<>
         <section className="w3l-about-breadcrumb position-relative text-center">
    <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
      <div className="container py-lg-5 py-3">
        <h2 className="title">Services</h2>
        <ul className="breadcrumbs-custom-path mt-2">
          <li>
            <a href="#url">Home</a>
          </li>
          <li className="active">
            <span
              className="fa fa-angle-double-right mx-2"
              aria-hidden="true"
            />{" "}
            Services{" "}
          </li>
        </ul>
      </div>
    </div>
  </section>
  <div className="container">
                <table className="table table-bordered table-hover text-center ">
                  <thead>
                    <tr className="table-danger" >
                        <td>Sno</td>
                        <td>Service Name</td>
                        <td>Cost</td>
                        <td>Address</td>
                        <td>date</td>
                        <td>Time</td>
                        <td>Status</td>
                        <td>Action</td>
                       
                       

                    </tr>
                    </thead>
                    <tbody >
                    
                    {
                        data?.map(
                            (el,index)=>(
                                <tr>
                                    <td>{index+1}</td>
                                    <td >{el?.serviceId?.serviceName}</td>
                                    <td>
                                    {el?.cost}
                                    </td>
                                     <td>{el?.address}</td>
                                      <td>{el?.date}</td>
                                       <td>{el?.time}</td>
                                       <td>{el?.status==1 ?"pendding":el?.status==2? "Approve" : el?.status==3? "Decline" : el?.status==4? "Complete":"Cancel" }</td>
                                     
                                      <td>
                                     {
                                          el?.status== 1&&
                                        
                                          <button onClick={()=>{
                                            changeStatus(el?._id, 5)
                                        }} className="mx-2 btn btn-danger">Cancel</button>
                                    
                                      }
                                      {
                                        el.status== 4 &&
                                        <Link to={"/user/ViewRating/"+el?._id} onClick={()=>{

                                        }} className="mx-2 btn btn-success">Rating</Link>
                                       
                         
                                    }
                                    </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
              

            </div>
      
      </>)
      
      }