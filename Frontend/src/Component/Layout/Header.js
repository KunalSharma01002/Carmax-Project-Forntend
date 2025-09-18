import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"





export default function Header(){

  
  const token = sessionStorage.getItem("token")
  const nav= useNavigate()
  const dispatch=useDispatch()
  const logout  =()=>{
    sessionStorage.clear()
   
    toast.success("Logout successfully")
    nav("/Login")
  }
  
  const isOpen=useSelector((state)=>state.modal.isOpen)
  const loading1=useSelector((state)=>state.loader.loading)
  console.log(loading1, "loading in header");
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      zIndex:"1500",
      transform: 'translate(-50%, -50%)',
    },
  };
    return(
        <> 
        <header id="site-header" className={isOpen?"blur zindex fixed-top":"fixed-top"}>
          <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <h1>
              <a className="navbar-brand" href="index.html">
                <span>C</span>arMax
              </a>
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
              <li className="nav-item @@Home__active">
                            <Link className="nav-link" to="/Home">
                            Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                       
                         <li className="nav-item @@About__active">
                            <Link className="nav-link" to={"/About"}>
                            About
                            </Link>
                        </li>
                        <li className="nav-item @@Service_active">
                          <Link className="nav-link" to={"/Service"}>Car Service</Link>
                        </li>
                          <li className="nav-item @@About__active">
                            <Link className="nav-link" to={"/user/viewBrand"}>
                            Brands
                            </Link>
                        </li>
                          {
                              !!token?
                              <>
                              
                              <Link onClick={logout} className="nav-link ">
                                Logout
                              </Link>
                              </>
                                :<>
                                
                                <Link to="/Login" className="nav-link @@Login__active">
                                login
                               </Link>
                                <li className="nav-item @@Register__active">
                                <Link className="nav-link" to={"/Register"}>
                                Register
                                </Link>
                            </li>
                            </>

                            }

                      
                        {/* <li className="nav-item @@Service__active">
                            <Link className="nav-link" to={"/user/viewService/:vehicleID"}>
                            Service
                            </Link>
                      
                        </li> */}
                      
                       
                            

                      
                      
                        
              </ul>
              <ul className="navbar-nav search-right mt-lg-0 mt-2">
                <li className="nav-item mr-3" title="Search">
                  <a href="#search" className="btn search-search">
                    <span className="fa fa-search" aria-hidden="true" />
                  </a>
                </li>
                <li className="nav-item @@Contact__active">
                            <Link className=" btn btn-primary d-none d-lg-block btn-style mr-2" to={"/Contact"}>
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
                    <a className="close" href="#url">
                      ×
                    </a>
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
      {/* <Modal isOpen={isOpen} style={customStyles}>
    <div className="p-5">
        <h3>You are about to logout?</h3>
        <button className="btn btn-primary" onClick={logout}>Confirm</button>
        <button className="btn btn-danger" onClick={()=>{dispatch(hideMODAL())}}>Cancel</button>
    </div>
  </Modal> */}
      
  </>
    )
}