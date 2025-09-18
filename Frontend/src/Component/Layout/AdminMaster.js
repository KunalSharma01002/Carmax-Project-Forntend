import { Outlet, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { toast } from "react-toastify";
import AdminHader from "./AdminHeader";
import Footer from "./Footer";

export default function AdminMaster(){
    const token=sessionStorage.getItem("token")
    const userType=sessionStorage.getItem("userType")
    const nav=useNavigate()
    useEffect(()=>{
        if(!token || userType==2){
            toast.error("Please login")
            nav("/login")
        }
    },[])
    return(
        <>
        
        <AdminHader/><Outlet/><Footer/>
        
       
        </>
    )
}