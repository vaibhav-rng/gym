import React, { Component } from 'react';

class FiveStarReviews extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    onclickh = (params) => {
      this.setState(
          {
              count :this.state.count +1
          }
      )
    }
    
    render() {
      
        
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.onclickh}>
                 click
                </button>
            </div>
        );
    }
}

export default FiveStarReviews;
