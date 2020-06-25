import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
    render(){
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }
        
        // let message 
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }
        // return(
        //     <div>{message}</div>
        // )
        return(
            this.state.isLoggedIn ?
            <div>Welcome</div> :
            <div>Welcome Guest</div>
        )
    }
}

export default UserGreeting