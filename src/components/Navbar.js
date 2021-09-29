import React from 'react'

function Navbar() {
    return (
<>    
    <nav className="navbar navbar-expand-lg navbar-light Navbar ">
        <a className="navbar-brand " href="#"> <h5 className="intro">Navbar</h5></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
       <li className="nav-item active">
         <a className="nav-link" href="/"><h5 className="intro">Home</h5></a>
       </li> 
       </ul>
       </div> 
    </nav>
 </>
    )
}

export default Navbar
