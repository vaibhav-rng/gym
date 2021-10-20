import React from 'react'

function About(props) {
    const {name,phnumber,email}=props.location.state
    return (
        <>
            <h1> Thank you , {name} for your response </h1>
            <h1> We will contact you on this {phnumber} or {email} </h1>
        </>
    )
}

export default About
