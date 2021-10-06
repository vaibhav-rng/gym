import React, { Component } from 'react';
import bmibackground from '../images/bmi.jpg'

class Testpage extends Component {
    render() {
        return (
            <div>
                <div >  
         <img src={bmibackground}  className="img-fluid containerx" alt="" />
         <div><h1 className="bottom-leftx img-fluid">Hello background</h1></div>
        </div>
            </div>
        );
    }
}

export default Testpage;
