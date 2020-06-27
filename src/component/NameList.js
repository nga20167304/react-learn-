import React from 'react'
// import Person from './Person'

function NameList(){
    const names = ['Bruce', 'Clark', 'Diana']
    // const persons =[
    //     {
    //         id: 1,
    //         name: 'Nga',
    //         age: 22,
    //         skill: 'Ruby' 
    //     },
    //     {
    //         id: 2,
    //         name: 'Nga1',
    //         age: 22,
    //         skill: 'Ruby1' 
    //     },
    //     {
    //         id: 3,
    //         name: 'Nga1',
    //         age: 22,
    //         skill: 'Ruby2' 
    //     }
    // ]
    const nameList = names.map((name,index) => <h2 key = {index}> {index} {name}</h2>)
    return(
    <div>
        {nameList}
    </div>
    )
}
export default NameList