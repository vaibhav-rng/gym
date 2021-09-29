import React, { Component } from 'react';
import Reviewonpage from '../components/Reviewonpage';
import ReviewData from '../Pages/Reviewdata';

class ShowReview extends Component {
    render() {
        const mappedReview = ReviewData.map(data=> <Reviewonpage name={data.name}
         text={data.text} starvalue={data.starValue} key={data.id}  /> )
        return (
            <>
                {mappedReview}
            </>
        );
    }
}

export default ShowReview;
