import React ,{useState}from 'react';
import Axios from 'axios';
import Stars from '../components/Stars';

const Review = () => {
    
    const[state,setstate]=useState({
        name:"",
        text:"",
        value:4,
      })

      const handleInputChange = (event) => {
        setstate(prev => ({
          ...prev,
          [event.target.id]:event.target.value
        }))
      }
     const onClickhandler=(e)=>{
         e.preventDefault()
          Axios.post("http://localhost:3001/review",{
            username:state.name,
            reviewarea:state.text,
            rating:state.value
          }).then(()=>{
             alert("done")
          }).catch(()=>{
            alert("not done")
           })
      }

    return (
        <div>
          <form onSubmit={onClickhandler}>
          <div className="form-group col-4">    
            <input type="text"  
             class="form-control"  placeholder="Enter Email or Name"
             value={state.name} onChange={handleInputChange} id="name"/>
        </div>
        
         <div className=" d-inline-flex col-1"> 
         
            <select class="form-control " 
            value={state.value} onChange={handleInputChange} id="value"> 
             
            <option value="5">best(5)</option>
            <option value="4">good(4)</option>
            <option value="3">average(3)</option>
            <option value="2">bad(2)</option>
            <option value="1">worse(1)</option>
            </select>
           
          </div>
          
     <div className="form-group d-inline-flex ">
       <div className=" form-control "  >
              <Stars className="" starRating={state.value} /> 
         </div>
      </div>
         
         
        <div className="form-group col-4">
            <textarea className="form-control" name="reviewarea" cols="30"
           value={state.text} onChange={handleInputChange} id="text"
              rows="10" placeholder="tell us why?" ></textarea>
        </div>
         
          <br />
          <button type='submit' onClick={()=>{alert("thanks for response")}} className="btn-primary"> submit</button>
          </form>
        </div>
    );
}


export default Review;
