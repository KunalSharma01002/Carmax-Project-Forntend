
import { useState } from "react"
import { FadeLoader} from "react-spinners"



  export default function AddProduct(){
    const [productName,setproductName]=useState("")
    const [Price,setPrice]=useState("")
    const [productImage,setproductImage]=useState("")
    const [description,setDescription]=useState("")
    const [quantity,setQuantity]=useState("")
    const [load,setLoad]=useState(true)
    const handleForm=(e)=>{
      e.preventDefault()


    
    
    //   .finally(
    //     ()=>{
    //         setLoad(false)
    //     }
    // )
    
    } 

      
    
   
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
         {/* { load==true?
            <div className="d-flex justify-content-center my-5">
                <FadeLoader color="red" />
            
          </div>
          
            : */}
            <div className="container my-5">
      <div
        className="card px-5 c1 w-50 mx-auto"
        style={{ border: "1px solid grey", boxShadow: "10px 10px 5px grey" }}
      >
        <h1 className="text-center my-3 text-danger">Add Product</h1>
        <form  onSubmit={handleForm}>
          <div className="row my-3">
            <div className="col-sl-3">
              productName
            </div>
            <div className="col-md-12">
              <input
                required
                className="form-control"
                type="text"
                name="name"
                value={productName} onChange={(e)=>{setproductName(e.target.value)}}
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sl-3">
            product Image
            </div>
            <div className="col-md-12">
            <input
                required
                className="form-control"
                type="file"
                name="name"
                value={productImage} onChange={(e)=>{setproductImage(e.target.value)}}

              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sl-3">
            Price     
            </div>
            <div className="col-md-12">
            <input type="number"  className="form-control" min="0" max="10000" name="Broker_Fees" id="broker_fees" required="required"
                value={Price} onChange={(e)=>{setPrice(e.target.value)}}

              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sl-3">
            Description
            </div>
            <div className="col-md-12">
              <input
                required
                className="form-control"
                type="text"
                name="description"
                value={description} onChange={(e)=>{setDescription(e.target.value)}}
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sl-3">
             Quantity
            </div>
            <div className="col-md-12">
              <input
               type="number" className="form-control" min="0" max="500"  name="Broker_Fees" id="broker_fees" required
                value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}
              />
            </div>
          </div>
          <button
            className="btn btn-danger d-block mx-auto my-3 "
            name="submit_btn"
            style={{ width: "25%" }}
          >
            Add 
            </button>
          </form>
        </div>
      </div>
{/*  
   }  */}

     
        </>
     )
}