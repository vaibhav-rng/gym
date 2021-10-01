import React from 'react'
import { useParams } from 'react-router-dom'
import ReviewData from '../Pages/Reviewdata'
import Stars from './Stars'

function SingleReview() {
    const params =useParams()
    const obj = ReviewData.map(data =>{ if (data.id===params.id)  
       return  <div key={data.id} className="container col-4">
            <div className="card">
             <h1 className="card-title">{data.name}</h1>
             <Stars starRating={data.starValue}/>   
             <h4 className="card-text">{data.text}</h4>
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
