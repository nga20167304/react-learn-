import React, { Component} from 'react'
import LifeCycle2 from './LifeCycle2'

class LifeCycle1 extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Nga'
        }
        console.log('LifeCycle 1 constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycle 1 getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycle 1 componentDidMount')
    }
    render(){
        console.log('LifeCycle 1 render')
        return(
            <div>
                <div>LifeCycle1</div>
                <div><LifeCycle2/></div>
            </div>

        )
    }
}
export default LifeCycle1