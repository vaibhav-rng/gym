import React  from 'react'
import Stars from '../components/Stars';


 const Reviewonpage = (props) => {
    return (
        <>
  <div className="col-4" >
    <br />
  <div className="card-body card">
    <h5 className="card-title">{props.name}</h5>
    <Stars className="card-subtitle mb-2 " starRating={props.starvalue}/>
    <p className="card-text">{props.text}</p>
  </div>
  </div>
        </>
    )
}
 
export default Reviewonpage