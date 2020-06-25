import React from 'react'

const Hello = () =>{
    // return(
    //     <div>
    //         <h1>Hello</h1>
    //     </div>
    // )

    //using JSX
    return React.createElement(
        'div', 
        {id: 'hello', className: 'nga'}, 
        React.createElement('h1', null, 'Hello'))
} 
export default Hello