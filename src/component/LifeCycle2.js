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
    shouldComponentUpdate(){
        console.log('LifeCycle 2 shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycle 2 getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycle 2 componentDidUpdate')
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