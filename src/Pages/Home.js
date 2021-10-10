import React from 'react'
import CarousalHome from '../components/CarousalHome';
import 'bootstrap/dist/css/bootstrap.css';
import QuoteForm from './QuoteForm'
import Bmi from '../components/BMI';

function Home() {  

    const mystyle = {
        color: "cyan",
        padding: "10px",
        
      };
    return (
    <>
        <div className=" container-fluid Formbg">
          <div className="formpadding" ><QuoteForm/></div>
        </div>
        <div className="bmibackground">
        <h1 className=" position-relative " style={{"font-size":"400%",top:50}}  >BMI</h1>
        <h1 className=" position-absolute "style={{"font-size":"400%",left:"0px",top: "100px"}} >Calculater </h1>
            <div className="offset-9 col-2"><Bmi/></div>
        </div> 
        <CarousalHome/>
    </>
    )
}

export default Home
