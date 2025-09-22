import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminHeader(){

  const token = sessionStorage.getItem("token")
  const nav= useNavigate()
  const logout  =()=>{
    sessionStorage.clear()
    toast.success("Logout successfully")
    nav("/Login")
  }
    return(
      <>
        <header id="site-header" className="fixed-top">
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <h1>
            <Link className="navbar-brand" href="index.html">
              <span>C</span>arserving
            </Link>
          </h1>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa icon-expand fa-bars" />
            <span className="fa icon-close fa-times" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to={"/Admin"}>
                 DashBoard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Admin/Viewservice"}>
                 Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Admin/Viewbrand"}>
                  Brand
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to={"/Admin/Viewproduct"}>
                 Product
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to={"/Admin/ViewVehicle"}>
              Vehicle
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Admin/ViewBooking"}>
                 Booking
                </Link>
              </li>

              <li className="nav-item">
                {
                  !!token?
              <Link onClick={logout} className="nav-link mr-2">
               Logout
              </Link>
              :
              <>
            
          </>}


              </li>
            </ul>
            

            <ul className="navbar-nav search-right mt-lg-0 mt-2">
              <li className="nav-item mr-3" title="Search">
                <Link href="#search" className="btn search-search">
                  <span className="fa fa-search" aria-hidden="true" />
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to={"/Contact"}
                  className="btn btn-danger d-none d-lg-block btn-style mr-2"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* //toggle switch for light and dark theme */}
            {/* search popup */}
            <div id="search" className="pop-overlay">
              <div className="popup">
                <form action="#" method="GET" className="d-sm-flex">
                  <input
                    type="search"
                    placeholder="Search.."
                    name="search"
                    required="required"
                    autofocus=""
                  />
                  <button type="submit">Search</button>
                  <Link className="close" href="#url">
                    ×
                  </Link>
                </form>
              </div>
            </div>
            {/* /search popup */}
          </div>
          {/* toggle switch for light and dark theme */}
          <div className="mobile-position">
            <nav className="navigation">
              <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <div className="mode-container">
                      <i className="gg-sun" />
                      <i className="gg-moon" />
                    
                        
                    </div>
                </label>
              </div>
            </nav>
          </div>
        </nav>
      </div>
      </header>
      </>
    )
}