import React, { Component } from 'react';
import Stars from '../components/Stars';

class Review extends Component {
    
    constructor(props) {
            super(props);
        
            this.state = {
                username:"",
                reviewarea:"",
                rating:"5"
            }
        }
        revieweventhandler = (event) => {
            this.setState({
                [event.target.name]:event.target.value
            }
            )
        }
      
        

    render() {

        return (
            <>
            <form >
            <div className="form-group col-4">    
                <input type="textbox"  name="username"
                 class="form-control"  placeholder="Enter Email or Name"
                  onChange={this.revieweventhandler} value={this.state.username}/>
            </div>
            
             <div className=" d-inline-flex col-1"> 
             
                <select class="form-control " name="rating" onClick={this.stars}
                 onChange={this.revieweventhandler} id=""> 
                 
                <option value="5">best(5)</option>
                <option value="4">good(4)</option>
                <option value="3">average(3)</option>
                <option value="2">bad(2)</option>
                <option value="1">worse(1)</option>
                </select>
               
              </div>
              
         <div className="form-group d-inline-flex ">
           <div className=" form-control "  >
                  <Stars className="" starRating={this.state.rating} /> 
             </div>
          </div>
             
             
            <div className="form-group col-4">
                <textarea className="form-control" name="reviewarea" cols="30"
                 value={this.state.reviewarea} onChange={this.revieweventhandler}
                  rows="10" placeholder="tell us why?" ></textarea>
            </div>
             
              <br />
              <button type="submit" className="btn-primary"> submit</button>
            </form>
            </>
        );
    }
}

export default Review;
