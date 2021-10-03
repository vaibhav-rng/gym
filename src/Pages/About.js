import React from 'react'

function About(props) {
    const {name,phnumber,goal,email}=props.location
    return (
        <>
            <h1>{name} form has been submit</h1>
            <h1>{phnumber} form has been submit</h1>
            <h1>{email} form has been submit</h1>
        </>
    )
}

export default About
