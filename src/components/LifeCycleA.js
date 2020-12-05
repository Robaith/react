import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Robaith'
        }
        console.log('LifeCycle A constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }
    
    render() {
        console.log('lifeCycleA render')
        return (
            <div>
                <p>LifeCycleA</p>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
