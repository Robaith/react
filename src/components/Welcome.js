import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name,gfName} = this.props
        return <h1>Class Component {name} gf name {gfName}</h1>
    }
}

export default Welcome