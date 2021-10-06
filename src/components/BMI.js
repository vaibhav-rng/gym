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
         bmi:state.weight/(state.height*state.height)
        }))
    } 
    return (
        <>
        <div className="">
        <input className="form-control" onChange={handleclick} value={state.age} id="age" placeholder="Age" />
        <input className="form-control d-inline-flex" onChange={handleclick} value={state.height} type="number" id="height" placeholder="height(cm)" />
        <input className="form-control  d-inline-flex" onChange={handleclick} value={state.weight} type="number" id="weight" placeholder="weight(kg)" />
         <button className="btn-primary ">BMI</button>  
         <h1>{state.bmi}</h1>         
        </div>
        </>
    );
}

export default Bmi;
