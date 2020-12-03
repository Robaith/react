import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['joy', 'robo', 'joy', 'nibir', 'robo']
    const persons = [
        {
            id : 1,
            name : 'nibir',
            age : 25
        },
        {
            id : 2,
            name : 'robo',
            age : 24
        }
    ]
const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
