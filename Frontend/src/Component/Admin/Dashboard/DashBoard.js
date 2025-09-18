export default function DashBoard(){


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
     <div className="container my-3 p-3  animated slideInDown">
         <div className="row">
             <div className="col-sm-6 col-md-6  mb-3  ">
                 <div className="card shadow ">
                     <div className="card-body">
                         <div className="d-flex align-items-center position-relative pb-3">
                             <div className="flex-shrink-0">
                                 <img className="img-md rounded-circle" src="/assets/images/serviceimg.png" alt="Profile Picture" style={{width:"100px"}}/>
                             </div>
                             <div className="flex-grow-1 ms-3">
                                 <a href="#" className="h5 stretched-link btn-link">Total Service </a>
                                 <h1 className="text-muted m-0"></h1>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="col-sm-6 col-md-6  mb-3">
                 <div className="card shadow">
                     <div className="card-body">

                         {/* <!-- Profile picture and short information --> */}
                         <div className="d-flex align-items-center position-relative pb-3">
                             <div className="flex-shrink-0">
                                 <img className="img-sm rounded-circle" src="/assets/images/vehicle.png" alt="Profile Picture" style={{width:"165px"}} />
                             </div>
                             <div className="flex-grow-1 ms-3">
                                 <a href="#" className="h5 stretched-link btn-link">Total Vehicle</a>
                                 <h1 className="text-muted m-0"></h1>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     <div className="container  animated slideInDown">
         <div className="row">
             <div className="col-sm-6 col-md-6  mb-3">
                 <div className="card shadow">
                     <div className="card-body">
                         <div className="d-flex align-items-center position-relative pb-3">
                             <div className="flex-shrink-0">
                                 <img className="img-md rounded-circle" src="/assets/img/notes.jpeg" alt="Profile Picture" loading="lazy" style={{height:"215px"}}/>
                             </div>
                             <div className="flex-grow-1 ms-3">
                                 <a href="#" className="h5 stretched-link btn-link">Add Booking </a>
                                 <h1 className="text-muted m-0"></h1>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="col-sm-6 col-md-6  mb-3 ">
                 <div className="card shadow">
                     <div className="card-body">
                         <div className="d-flex align-items-center position-relative pb-3">
                             <div className="flex-shrink-0">
                                 <img className="img-sm rounded-circle" src="/assets/img/Quiz.png" alt="Profile Picture" loading="lazy"/>
                             </div>
                             <div className="flex-grow-1 ms-3">
                                 <a href="#" className="h5 stretched-link btn-link">Total User</a>
                                 <h1 className="text-muted m-0"></h1>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>    
         </div>
     </div>
    </> 
 )
}