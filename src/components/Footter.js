
import React from 'react'
import { Link ,} from 'react-router-dom'

function Footter() {

        return (

 <>
<footer className="page-footer font-small blue pt-4 footer">

  <div className="container-fluid text-center text-md-left">

    <div className="row">

      <div className="col-md-6 mt-md-0 mt-3">
  
       <a href="/Quoteform"> <h2 className="text-uppercase col-4">Get quote</h2></a>
        <p className="text-uppercase col-4">Click to get Quote</p>

      </div>
      <div className="col-md-2 mb-md-0 mb-3">

        <h5 className="text-uppercase">Social</h5>

        <ul className="list-unstyled">
          <li>
         
            <a href="#!">Facebook</a>
         
          </li>
          <li>
            <a href="#!">Twitter</a>
          </li>
          <li>
            <a href="#!">Instagram</a>
          </li>
          
           
        </ul>

      </div>

      <div className="col-md-2 mb-md-0 mb-3">

        <h5 className="text-uppercase">Contact us</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!">Delhi</a>
          </li>
          <li>
            <a href="#!">Gurgaon</a>
          </li>
          <li>
            <a href="#!">Mumbai</a>
          </li>
        </ul>
      </div>
      
    <div className="col-md-2 mb-md-0 mb-3">

        <h5 className="text-uppercase">About us</h5>

       <ul className="list-unstyled">
       <li>

       </li>
       <li>
         <a href="#!">Aim</a>
       </li>
       <li>
         <a href="#!">Vision</a>
      </li>
       <li>
           <a href="/Testimonials">Testimonials</a>   
       </li>
       </ul>
    </div>


    </div>

  </div>

  
  <div className="footer-copyright text-center py-3">
    <h6 className="intro"> Made by Vaibhav</h6>
  </div>
  

</footer>

         
 </>
            
        )
    }
   
export default Footter
