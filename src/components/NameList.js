import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            name : 'nibir',
            age : 25
        },
        {
            name : 'robo',
            age : 24
        }
    ]
    const personList = persons.map(person => <Person person={person} />)
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
