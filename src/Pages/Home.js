import React from 'react'
import CarousalHome from '../components/CarousalHome';
import 'bootstrap/dist/css/bootstrap.css';
import QuoteForm from './QuoteForm'

function Home() {  

    return (
        <>
        <div className=" container-fluid Formbg">
        <div className="formpadding" ><QuoteForm/></div>
        </div>
        <CarousalHome/>       
        </>
    )
}

export default Home
