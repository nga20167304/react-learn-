import React, { Component} from 'react'

class LifeCycle2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Nga'
        }
        console.log('LifeCycle 2 constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycle 2 getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycle 2 componentDidMount')
    }
    render(){
        console.log('LifeCycle 2 render')
        return(
            <div>
                LifeCycle2
            </div>
        )
    }
}
export default LifeCycle2