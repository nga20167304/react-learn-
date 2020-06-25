import React, { Component} from 'react'

class EventBind extends Component{

    constructor(props){
        super(props)
        this.state = {
            message: 'Hello'
        }
        // this.clickHanlder = this.clickHanlder.bind(this);
    }
    // clickHanlder(){
    //     this.setState ({
    //         message: 'Goodbye'  
    //     })
    //     console.log(this)
    // }

    clickHanlder = () => {
        this.setState ({
            message: 'Goodbye'  
        })

    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick = {this.clickHanlder.bind(this)}>Click</button> */}
                {/* <button onClick = {() => this.clickHanlder()}>Click</button> */}
                <button onClick = {this.clickHanlder}>Click</button>
            </div>
        )
    }
}
export default EventBind