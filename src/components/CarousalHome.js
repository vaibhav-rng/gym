import React  from 'react';
import Carousel from 'react-elastic-carousel';
import ReviewData from '../Pages/Reviewdata';
import Stars from '../components/Stars';
import { Link} from 'react-router-dom';



export default function CarousalHome() {
    
    return (
        <div>
             <Carousel>
               {ReviewData.map(item => <div key={item.id}>     
                   <Stars starRating={item.starValue}/>
                   <h1>{item.text} </h1>
                   <h5>- {item.name}</h5>
                   <h1>this is github test</h1>
                <Link className=" btn-primary" to={`/${item.id}`} >view</Link>  
               </div>)}
                
               </Carousel>
        </div>
    )
}

