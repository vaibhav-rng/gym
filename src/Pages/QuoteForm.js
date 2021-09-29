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
    return (
        <div>
            <form>
  <div class="form-group col-4">
    <label  for="name">Name</label>
    <input type="text"  class="form-control " id="name" value={this.state.name}
      onChange={this.onchangeHandle}    placeholder="Enter Name"/>
     <br />
  </div>
  <div class="form-group col-4" >
    <label for="email">Email</label>
    <input type="Email" class="form-control" id="email"  value={this.state.email}
      onChange={this.onchangeHandle}  placeholder="Enter Email"/>
  </div>
  <br />
  <div class="form-group  col-2">
    <label for="phnumber">Phone Number</label>
    <input type="text" class="form-control " value={this.state.phnumber}  onChange={this.onchangeHandle} 
     id="phnumber" placeholder="Enter Phone Number"/>
  </div>
  <br />
   <div class="col-4">
  <select class="form-select " value={this.state.goal}  onChange={this.onchangeHandle}  id="goal">
     <option value="0" >Choose your Goal</option>
     <option value="1">Muscle</option>
     <option value="2">Lean</option>
     <option value="3">Fit</option>
   </select> 
   </div>
   <br />

  <button type="submit" onClick={this.handleClick} class="btn btn-primary">Submit</button>
  
</form>
        </div>
    );
  }
}


export default QuoteForm;


