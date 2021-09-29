import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Footter from './components/Footter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import About from './Pages/About';
import Home from './Pages/Home';
import QuoteForm from './Pages/QuoteForm';
import Navbar from './components/Navbar';
import Review from './Pages/Review';
import ShowReview from './Pages/ShowReview';
import  Reviewonpage  from './components/Reviewonpage';
import SingleReview from './components/SingleReview';

export default function App() {
  
  
    return (
    <>
       <Navbar/>
     <BrowserRouter>
      <Switch>
        <Route path="/Quoteform" component={QuoteForm}  ></Route>
        <Route path="/" component={Home} exact ></Route>
        <Route path="/review" component={Review}></Route>
        <Route path="/about" component={About} exact ></Route>
        <Route path="/about1" component={Reviewonpage}  ></Route>
        <Route path="/Testimonials" component={ShowReview}  ></Route>
        <Route path="/:id" component={SingleReview} exact  ></Route>
     </Switch>
    </BrowserRouter>  
       <Footter/>  
   </>
    )
}
