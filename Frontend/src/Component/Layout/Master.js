import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import Header from "./Header";
import Footer from "./Footer";
export default function Master(){
    const loading=useSelector((state)=>state.loader.loading)
    if(loading){
        return  <div style={{minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"Center"}}>
        <BeatLoader loading={loading} size={50}/>
        </div>
    }
    else{
    return(
        <>
       
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
}