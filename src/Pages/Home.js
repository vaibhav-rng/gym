import React from 'react'
import CarousalHome from '../components/CarousalHome';
import 'bootstrap/dist/css/bootstrap.css';
import frontimg from '../images/1078069.jpg'
import QuoteForm from './QuoteForm'
function Home() {  



    return (
        < >
        <div className=" Formbg container-fluid" ><QuoteForm/></div>
       <CarousalHome/>       
        </>
    )
}

export default Home
