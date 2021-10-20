import axios from 'axios'
import React ,{useEffect, useState} from 'react'
import { useParams  } from 'react-router-dom'
import Stars from './Stars'

function SingleReview() {
     const params =useParams()
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
    
    const obj = ReviewData.map(data =>{ if (data._id===params.id)  
       return  <div key={data._id} className="container col-4">
            <div className="card">
             <h1 className="card-title">{data.username}</h1>
             <Stars starRating={data.rating}/>   
             <h4 className="card-text">{data.reviewarea}</h4>
             </div>
    </div>})
    return (
        <div>
            <br />
            {obj}
            <br />
        </div>
    )
}

export default SingleReview
