import React ,{useState , useEffect}from 'react';
import axios from 'axios';
import Reviewonpage from '../components/Reviewonpage';

export  function ShowReview() {

    const [ReviewData,setReviewData]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/review")
        .then((response)=>{
            setReviewData(response.data)
        })
        .catch((err)=>{
        console.log(err)
        })
    }
    )
    const mappedReview = ReviewData.map(data=> <Reviewonpage name={data.username}
        text={data.reviewarea} starvalue={data.rating} key={data._id}  /> )
       return (
           <>
               {mappedReview}
           </>
       );
    
       }

export default ShowReview;
