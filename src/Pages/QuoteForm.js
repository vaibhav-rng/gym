import React, { Component } from 'react';

class QuoteForm extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        name:"",
        email:"",
        phnumber:"",
        goal:"0"
     }
   }
   
   onchangeHandle = (event) => {
     this.setState({
       [event.target.id]:event.target.value
     })
   }
   

  handleClick = () => {
    this.props.history.push({
      pathname:"/about",
      state: this.state
  });
  };

  render() {

    if (this.state.goal==="4") {
      var anyother =  <input type="text" className="  d-inline-flex form-control" /> 
   }
    return (
        <div>
            <form>
  <div className="form-group col-4">
    <label  for="name">Name</label>
    <input type="text"  className="form-control " id="name" value={this.state.name}
      onChange={this.onchangeHandle}    placeholder="Enter Name"/>
     <br />
  </div>
  <div className="form-group col-4" >
    <label for="email">Email</label>
    <input type="Email" className="form-control" id="email"  value={this.state.email}
      onChange={this.onchangeHandle}  placeholder="Enter Email"/>
  </div>
  <br />
  <div className="form-group  col-2">
    <label for="phnumber">Phone Number</label>
    <input type="text" className="form-control " value={this.state.phnumber}  onChange={this.onchangeHandle} 
     id="phnumber" placeholder="Enter Phone Number"/>
  </div>
  <br />
   <div className="col-4 d-inline-flex">
  <select className="form-select " value={this.state.goal}  onChange={this.onchangeHandle}  id="goal">
     <option value="0" >Choose your Goal</option>
     <option value="1">Muscle</option>
     <option value="2">Lean</option>
     <option value="3">Fit</option>
     <option value="4">Any Other</option> 
   </select> 
    {anyother}
   </div>
   <br /> <br /> 

  <button type="submit" onClick={this.handleClick} className="btn btn-primary">Submit</button>
  
</form>
        </div>
    );
  }
}


export default QuoteForm;


