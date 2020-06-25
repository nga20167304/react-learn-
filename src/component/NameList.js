import React from 'react'
import Person from './Person'

function NameList(){
    const persons =[
        {
            id: 1,
            name: 'Nga',
            age: 22,
            skill: 'Ruby' 
        },
        {
            id: 2,
            name: 'Nga1',
            age: 22,
            skill: 'Ruby1' 
        },
        {
            id: 3,
            name: 'Nga1',
            age: 22,
            skill: 'Ruby2' 
        }
    ]
const personList = persons.map(person => <Person key={person.id}person = {person} />)
    return(
    <div>
        {personList}
    </div>
    )
}
export default NameList