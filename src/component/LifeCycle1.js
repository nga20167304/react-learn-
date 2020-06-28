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
    shouldComponentUpdate(){
        console.log('LifeCycle 1 shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycle 1 getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycle 1 componentDidUpdate')
    }
    changeState = () => {
        this.setState({
            name: 'ÁAAA'
        })
    }
    render(){
        console.log('LifeCycle 1 render')
        return(
            <div>
                <div>LifeCycle1</div>
                <button onClick={this.changeState}>Change state</button>
                <div><LifeCycle2/></div>
            </div>

        )
    }
}
export default LifeCycle1