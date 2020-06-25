import React from 'react'

function FunctionClick(){
    function clickHanlder(){
        console.log('Button clicked')
    }
    return(
        <div>
            <button onClick = {clickHanlder}>Click</button>
        </div>
    )
}
export default FunctionClick