import React from 'react'
import { useParams } from 'react-router-dom'
import ReviewData from '../Pages/Reviewdata'

function SingleReview() {
    const params =useParams()
    const obj = ReviewData.map(data =>{ if (data.id===params.id)  
       return  <div ><h5>key={data.id} {data.name}</h5> 
    </div>})
    return (
        <div>
            {obj}
        </div>
    )
}

export default SingleReview
