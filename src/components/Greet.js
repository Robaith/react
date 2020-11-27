import React from 'react'

const Greet = (props) => {
    return (
        <div>
            <h1>Hellow {props.name} and {props.gfName}</h1> 
            {props.children}
        </div>
    
    )
} 

export default Greet