import axios from "axios";

export const BASE_URL="http://localhost:5002/"

class ApiServices{
  
   
    getPath(){
        let userType=sessionStorage.getItem("userType")
        const userPath=userType==1?"admin":"user"
       

        return userPath
    }
    getToken(){
        let token=sessionStorage.getItem("token")
        return {Authorization:token}
    }
    login(data){

        return axios.post(BASE_URL+"user/login",data)
    }
    register(data){
        return axios.post(BASE_URL+"user/register",data)
    }
    addBrand(data){
        return axios.post(BASE_URL+this.getPath()+"/Brand/add",data,{headers:this.getToken()} )
    }
    allBrand(data){
        return axios.post(BASE_URL+this.getPath()+"/Brand/all",data,{headers:this.getToken()} )
    }
    addVehicle(data){
        return axios.post(BASE_URL+this.getPath()+"/Vehicle/add",data,{headers:this.getToken()} )
    }
    allVehicle(data){
        return axios.post(BASE_URL+this.getPath()+"/Vehicle/all",data,{headers:this.getToken()} )
    }
    updateVehicle (data){
        return axios.post(BASE_URL+this.getPath()+"/Vehicle/update",data,{headers:this.getToken()} )
    }
    getSingleVehicle(data){
        return axios.post(BASE_URL+this.getPath()+"/Vehicle/single",data,{headers:this.getToken()} )
    }
    addService(data){
        return axios.post(BASE_URL+this.getPath()+"/Service/add",data,{headers:this.getToken()} )
    }
    allService(data){
        return axios.post(BASE_URL+this.getPath()+"/Service/all",data,{headers:this.getToken()} )
    }
    getSingleService(data){
        return axios.post(BASE_URL+this.getPath()+"/Service/single",data,{headers:this.getToken()} )
    }
    updateService(data){
        return axios.post(BASE_URL+this.getPath()+"/Service/update",data,{headers:this.getToken()} )
    }
    addBooking(data){
        return axios.post(BASE_URL+"user/booking/add",data,{headers:this.getToken()} )
    }
    allUser(data){
        return axios.post(BASE_URL+"user/all",data,{headers:this.getToken()} )
    }
    allBooking(data){
        return axios.post(BASE_URL+this.getPath()+"/Booking/all",data,{headers:this.getToken()})
    }
    vehicleChangeStatus(data){
        return axios.post(BASE_URL+this.getPath()+"/Vehicle/status",data,{headers:this.getToken()})
    }
    allUserService(data){
        return axios.post(BASE_URL+"user/Service/all",data,{headers:this.getToken()})
    }
    bookingChangeStatus(data){
        return axios.post(BASE_URL+this.getPath()+"/Booking/status",data,{headers:this.getToken()})
    }
    allHistory(data){
        return axios.post(BASE_URL+"user/Booking/all",data,{headers:this.getToken()})
    }
    getSingleReview(data){
        return axios.post (BASE_URL+"user/Review/single",data,{headers:this.getToken()})
    }
    addReview(data){
        return axios.post (BASE_URL+"user/Review/add",data,{headers:this.getToken()})
    }
    allUserBooking(data){
        return axios.post(BASE_URL+"user/Booking/all",data,{headers:this.getToken()})
    }
    getSingleBooking(data){
        return axios.post(BASE_URL+"user/Booking/single",data,{headers:this.getToken()})
    }
   deleteService(data){
        return axios.post(BASE_URL+this.getPath()+"/Service/delete",data,{headers:this.getToken()})
    } 
     deleteVehicle(data){
        return axios.post(BASE_URL+this.getPath()+"/Vehicle/delete",data,{headers:this.getToken()})
    } 
    deleteBrand(data){
        return axios.post(BASE_URL+this.getPath()+"/Brand/delete",data,{headers:this.getToken()})
    }
    dashBoard(data){
        return axios.post(BASE_URL+this.getPath()+"/dashBoard",data,{headers:this.getToken()})
    }
}
export default new ApiServices()