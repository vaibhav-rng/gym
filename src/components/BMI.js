import { render } from '@testing-library/react';
import React, { useState } from 'react';
//this is code is weirdly written :(

const Bmi = () => {
    const [state,setstate] =useState({
        height:null,
        weight:null,
        age:null,
        bmi:23
    })
    
    const handleclick=(e)=>{
        
        setstate(prev=>({
            ...prev,
            [e.target.id]:e.target.value,
           
        }))    
    } 
     if (state.bmi!=null) {
      var showbmi= state.bmi
      var weightType;
      if (showbmi<=18) {
            weightType="Underweight";
      }
      else if(showbmi>18&&showbmi<24){
         weightType="Normal"
      }
      else if(showbmi>24&&showbmi<30){
         weightType="Overweight"
     }
      else{
       weightType="Obesity"
     }

     }
    return (
        
        <>
        <div className="">
        <input className="form-control" onChange={handleclick} value={state.age} id="age" placeholder="Age" />
        <input className="form-control d-inline-flex" onChange={handleclick} value={state.height} type="number" id="height" placeholder="height(m)" />
        <input className="form-control  d-inline-flex" onChange={handleclick} value={state.weight} type="number" id="weight" placeholder="weight(kg)" />
         <button onClick={()=>setstate(prev=>({...prev,bmi:Math.round(state.weight/Math.pow(state.height, 2)*1000)/100}))} className="btn-primary ">BMI</button>  
         {showbmi} 
        <h1 
        style={state.bmi<=18?{color:"blue"}:state.bmi>18&&state.bmi<24?{color:"green"}:state.bmi>24&&state.bmi<30?{color:"orange"}:{color:"red"}}>
        {weightType}</h1>         
        </div>
        </>
    );
}

export default Bmi;
