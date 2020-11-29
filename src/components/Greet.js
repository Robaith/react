import React from 'react'

const Greet = (props) => {
    const {name,gfName} = props
    return (
        <div>
            <h1>Hellow {name} and {gfName}</h1> 
        </div>
    
    )
} 

export default Greet