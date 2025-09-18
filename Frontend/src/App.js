
import './App.css';
import { BrowserRouter,Routes,Route, useLocation } from 'react-router-dom';
import Master from './Component/Layout/Master';
import AdminMaster from './Component/Layout/AdminMaster';
import Index from './Component/Pages/Index';
import Error from './Component/Layout/Error';
import About from './Component/Pages/About';
import Service from './Component/Pages/Service';
import Contact from './Component/Pages/Contact';

import "react-toastify/dist/ReactToastify.css"
import Login from './Component/Auth/Login';
import Register from './Component/Auth/Register';

import { ToastContainer } from 'react-toastify';
import AddBrand from './Component/Admin/Brand/AddBrand';
import AddService from './Component/Admin/Service/AddService';
import AddProduct from './Component/Admin/Product/AddProduct';
import ViewProduct from './Component/Admin/Product/ViewProduct';
import ViewService from './Component/Admin/Service/ViewService';
import ViewBrand from './Component/Admin/Brand/ViewBrand';
import DashBoard from './Component/Admin/Dashboard/DashBoard';
import Addvehicle from './Component/Admin/Vehicle/AddVehicle';
import ViewVehicle from './Component/Admin/Vehicle/ViewVehicle';
import EditVehicle from './Component/Admin/Vehicle/EditVehicle';
import EditService from './Component/Admin/Service/EditService';
import ViewServiceUser from './Component/Pages/Service/ViewServiceUser';
import ViewSingleService from './Component/Pages/Service/ViewSingleService';
import AddBooking from './Component/Pages/Booking/AddBooking';

import ViewBooking from './Component/Admin/Booking/ViewBooking';
import ViewBookingHistory from './Component/Pages/Booking/ViewBookingHistory';
import ReviewRating from './Component/Pages/Review/ReviewRating';
import ViewVehicleUser from './Component/Pages/vehicle/ViewVehicleUser';
import Card from './Component/Pages/vehicle/Card';
import ChatBot from 'react-chatbotify';
import ViewUserBrand from './Component/Pages/Brand/ViewUserBrand';
import PrivateRoute from './Component/Layout/PrivateRoute';
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';

// function MyRoute({ children }) {
//   const location = useLocation();

//   // Pages where header/footer should be hidden
//   const hideHeaderFooter = ["/Login", "/Register"];

//   return (
//     <>
//       {!hideHeaderFooter.includes(location.pathname) && <Header/>}
      
//       {children}
//       {!hideHeaderFooter.includes(location.pathname) && <Footer/>}
//     </>
//   );
// }







function App() {

 
  return (
   
    <>
    <BrowserRouter>
     
        <Routes>

          <Route path='/' element={<Master/>}>

            <Route path='/Home' element={<Index/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Service' element={<Service/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/user/viewBrand' element={<ViewUserBrand/>}/>
            
            <Route path='/user/viewVehicle/:brandId' element={<PrivateRoute><ViewVehicleUser/></PrivateRoute>}/>
            <Route path='/user/viewService/:vehicleId' element={<ViewServiceUser/>}/>
            <Route path='/user/viewSingleService/:serviceId/:vehicleId' element={<ViewSingleService/>}/>
            
            <Route path='/user/viewVehicleType' element={<Card/>}/>
            
       
            <Route path='/user/Addbooking/:serviceId/:vehicleId'  element={<AddBooking/>}/>
            <Route path='/user/ViewHistory' element={<ViewBookingHistory/>}/>
            <Route path='/user/ViewRating/:id' element={<ReviewRating/>}/>
           

            <Route path='/*' element={<Error/>}/>
     
            </Route>
         
          
          <Route path='/Admin' element={<AdminMaster/>}>
            <Route path='/Admin' element={<DashBoard/>}/>
            <Route path='/Admin/Addvehicle'  element={<Addvehicle/>}/>
            <Route path='/Admin/Addbrand'  element={<AddBrand/>}/>
          
            <Route path='/Admin/Addservice' element={<AddService/>}/>
            <Route path='/Admin/Addproduct'  element={<AddProduct/>}/>
            <Route path='/Admin/Viewproduct' element={<ViewProduct/>}/>
            <Route path='/Admin/Viewvehicle' element={<ViewVehicle/>}/>
            <Route path='/Admin/Viewservice' element={<ViewService/>}/>
            <Route path='/Admin/Viewbrand' element={<ViewBrand/>}/>
            <Route path='/Admin/EditVehicle/:id' element={<EditVehicle/>}/>
            <Route path='/Admin/EditService/:id' element={<EditService/>}/>
            <Route path='/Admin/ViewBooking' element={<ViewBooking/>}/>
          

            

          </Route>
          
          
           <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
          

          </Routes>
       
          <ChatBot/>


        </BrowserRouter>

        <ToastContainer/>
  
        </>
         
         
        
        
        
  )
}

export default App;
