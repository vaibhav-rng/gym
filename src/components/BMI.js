import React, { useState } from 'react';
//weird problem with form cannot focus on first element 
const Bmi = () => {
    const [state,setstate] =useState({
        height:null,
        weight:null,
        Age:"",
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
        <div>
         <form>
        <input className="form-control" onChange={handleclick} value={state.Age} type="number" id="Age" placeholder="Age" />
        <input className="form-control " onChange={handleclick} value={state.height} type="number" id="height" placeholder="height(m)" />
        <input className="form-control" onChange={handleclick} value={state.weight} type="number" id="weight" placeholder="weight(kg)" />
         <button onClick={()=>setstate(prev=>({...prev,bmi:Math.round(state.weight/Math.pow(state.height, 2)*1000)/100}))} className="btn-primary ">BMI</button>  
         <div className=' position-absolute bmiboxstyle' style={{left:"600px",top: "60px"}}>
          {state.bmi===null?null:<h1>{`BMI:${showbmi}`}</h1> }
         <h1 
          style={state.bmi<=18?{color:"blue"}:state.bmi>18&&state.bmi<24?{color:"green"}:state.bmi>24&&state.bmi<30?{color:"orange"}:{color:"red"}}>
           {weightType}</h1>
         </div>
         </form>   
        </div>
    );
}

export default Bmi;
