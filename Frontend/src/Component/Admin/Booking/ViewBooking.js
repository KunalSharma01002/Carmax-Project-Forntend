import { useEffect, useState } from "react"
import ApiServices from "../../../Services/ApiServices"
import { toast } from "react-toastify"
import * as qs from "qs"
import {Fragment} from "react"
export default function ViewBooking(){


   const [data,setData]=useState([])
   
   useEffect(
    ()=>{      
         fetchDept()    
    },[])
   const fetchDept=()=>{
    
    ApiServices.allBooking()

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
            <h2 className="title" style={{fontSize:"40px",fontWeight: 'bold'}}>Booking</h2>
            <ul className="breadcrumbs-custom-path mt-2">
            <li>
                <a href="#url"style={{fontSize:"20px",fontWeight: 'bold'}}>DashBoard</a>
            </li>
            <li className="active" style={{fontSize:"20px",fontWeight: 'bold'}}>
                <span
                className="fa fa-angle-double-right mx-2" style={{fontSize:"20px",fontWeight: 'bold'}}
                aria-hidden="true"
                />{" "}
               Add Booking{" "}
            </li>
            </ul>
        </div>
        </div>
    </section>
    <br/>
   
       
            <div className="container text-center">
                <table className="table table-striped table-hover table-danger table-bordered animated slideInLeft" style={{boxShadow:"10px 0px 10px grey"}}>
                  <thead>
                    <tr className="table-danger "  style={{ fontSize:"20px",fontWeight: 'bold'}}>
                        <td>Sno</td>
                        <td>Service Name</td>
                        <td>Cost</td>
                        <td>Address</td>
                        <td>Data</td>
                        <td>Time</td>
                        <td>Status</td>
                        <td>Action</td>
                       

                    </tr>
                    </thead>
                    <tbody>
                    
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
                                       <td>{el?.status==1 ?"pendding":el?.status==2? "Approve":el?.status==3?"Decline" :"Complete"}</td>
                                     <td>
                                     {
                                          el?.status== 1? 
                                          <Fragment> 
                                            <button onClick={()=>{
                                            changeStatus(el?._id, 2)
                                        }} className="mx-2 btn btn-success">Approve</button>
                                         
                                          <button onClick={()=>{
                                            changeStatus(el?._id, 3)
                                        }} className="mx-2 btn btn-danger">Decline</button>
                                        </Fragment>
                                        :
                                        el.status== 2?
                                        <button onClick={()=>{
                                            changeStatus(el?._id, 4)
                                        }} className="mx-2 btn btn-success">Complete</button>
                                        :
                                        <></>
                                      
                                        
                                        

                                        
                                       
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