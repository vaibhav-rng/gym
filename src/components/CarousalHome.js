import React  from 'react';
import Carousel from 'react-elastic-carousel';
import ReviewData from '../Pages/Reviewdata';
import Stars from '../components/Stars';
import { Link} from 'react-router-dom';



export default function CarousalHome() {
    
    return (
        <div>
             <Carousel
             >
               {ReviewData.map(item => <div key={item.id}>     
                   <Stars starRating={item.starValue}/>
                   <h2>{item.text} </h2>
                   <h5>- {item.name}</h5>       
                <Link  to={`/${item.id}`} > <button className="btn-primary">view</button> </Link>  
               </div>)}
                
               </Carousel>
        </div>
    )
}

