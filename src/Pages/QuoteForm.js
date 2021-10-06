import React, { useState } from 'react';
import { useHistory } from 'react-router';

const QuoteForm = (props) => {
    
    const[state,setstate]=useState({
      name:"",
      email:"",
      phnumber:"",
      goal:"0" 
    })

    const handleInputChange = (event) => {
      setstate(prev => ({
        ...prev,
        [event.target.id]:event.target.value
      }))
    }

    let history = useHistory();
    function onsubmitHandle() {
          history.push({
            pathname:"/about",
            state
      } )}
      if (state.goal==="4") {
        var anyother =  <input type="text" className="  d-inline-flex form-control" /> 
     }
       return (
                 
        <div >
            <form >
  <div className="form-group  col-4">
    <input type="text"  className="form-control " id="name" value={state.name}
      onChange={handleInputChange}    placeholder="Enter Name"/>
     <br />
  </div>
  <div className="form-group col-4" >
    <input type="Email" className="form-control" id="email"  value={state.email}
      onChange={handleInputChange}  placeholder="Enter Email"/>
  </div>
  <br />
  <div className="form-group col-2">
    <input type="text" className="form-control "  id="phnumber" value={state.phnumber}  onChange={handleInputChange} 
     placeholder="Enter Phone Number"/>
  </div>
  <br />
   <div className="col-4 d-inline-flex">
  <select className="form-select " value={state.goal}  onChange={handleInputChange}  id="goal">
     <option value="0" >Choose your Goal</option>
     <option value="1">Muscle</option>
     <option value="2">Lean</option>
     <option value="3">Fit</option>
     <option value="4">Any Other</option> 
   </select> 
   {anyother}
   </div>
   <br/> <br/> 
  <button type="submit" onClick={onsubmitHandle}  className="btn btn-primary">Submit</button>
   
</form>
        </div>
        
    );
}

export default QuoteForm;
