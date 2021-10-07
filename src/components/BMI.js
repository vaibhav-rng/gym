import { render } from '@testing-library/react';
import React, { useState } from 'react';

const Bmi = () => {
    const [state,setstate] =useState({
        height:null,
        weight:null,
        age:null,
        bmi:null
    })
    
    const handleclick=(e)=>{
        
        setstate(prev=>({
            ...prev,
            [e.target.id]:e.target.value,
           
        }))    
    } 
     if (state.bmi!=null) {
      var showbmi= state.bmi
     }
    return (
        
        <>
        <div className="">
        <input className="form-control" onChange={handleclick} value={state.age} id="age" placeholder="Age" />
        <input className="form-control d-inline-flex" onChange={handleclick} value={state.height} type="number" id="height" placeholder="height(m)" />
        <input className="form-control  d-inline-flex" onChange={handleclick} value={state.weight} type="number" id="weight" placeholder="weight(kg)" />
         <button onClick={()=>setstate(prev=>({...prev,bmi:Math.round(state.weight/Math.pow(state.height, 2)*1000)/100}))} className="btn-primary ">BMI</button>  
         {showbmi}         
        </div>
        </>
    );
}

export default Bmi;
