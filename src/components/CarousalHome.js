import React  from 'react';
import Carousel from 'react-elastic-carousel';
import Stars from '../components/Stars';
import { Link} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';



export default function CarousalHome() {

    const [ReviewData,setReviewData]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/showreview")
        .then((response)=>{
            setReviewData(response.data)
        })
        .catch((err)=>{
        console.log(err)
        })
    }
    )
    
    return (
        <div>
             <Carousel >
               {ReviewData.map(item => <div key={item._id}>     
                   <Stars starRating={item.rating}/>
                   <h2>{item.reviewarea} </h2>
                   <h5>- {item.username}</h5>       
                <Link  to={`/${item._id}`} > <button className="btn-primary">view</button> </Link>  
               </div>)}
                
               </Carousel>
        </div>
    )
}

