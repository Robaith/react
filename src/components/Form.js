import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             topic : 'select one'
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic : event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} choosed ${this.state.topic}`)
        event.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName </label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                <label>Topic </label>
                <select value={this.state.topic} onChange={this.handleTopicChange} >
                    <option value='select one'>Select</option>
                    <option value='React'>React</option>
                    <option value='Angular'>Angular</option>
                    <option value='Vue'>Vue</option>
                </select>
                <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default Form
