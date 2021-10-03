import React, { useState } from 'react';
import { useHistory } from 'react-router';

const QuoteForm = (props) => {
    const[name,setname]= useState("")
    const[email,setemail]= useState("")
    const[ phnumber,setphnumber]= useState("")
    const[goal,setgoal]= useState("0")

    let history = useHistory();
    function onsubmitHandle() {
          history.push({
            pathname:"/about",
            name,email,phnumber,goal
      } )}
      if (goal==="4") {
        var anyother =  <input type="text" className="  d-inline-flex form-control" /> 
     }
       return (
                 
        <div >
            <form >
  <div className="form-group  col-4">
    <input type="text"  className="form-control " id="name" value={name}
      onChange={e => setname(e.target.value)}    placeholder="Enter Name"/>
     <br />
  </div>
  <div className="form-group col-4" >
    <input type="Email" className="form-control" id="email"  value={email}
      onChange={e=>setemail(e.target.value)}  placeholder="Enter Email"/>
  </div>
  <br />
  <div className="form-group col-2">
    <input type="text" className="form-control " value={phnumber}  onChange={e=>setphnumber(e.target.value)} 
     id="phnumber" placeholder="Enter Phone Number"/>
  </div>
  <br />
   <div className="col-4 d-inline-flex">
  <select className="form-select " value={goal}  onChange={e=>setgoal(e.target.value)}  id="goal">
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
