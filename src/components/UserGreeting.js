import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
        //short circuit operator
        // return this.state.isLoggedIn && <div>Welcome Robaith</div>

        //ternary conditional operator approach [most of the case, we will use this approach]
        return (
            this.state.isLoggedIn ?
            <div>Welcome Robaith</div> :
            <div>Welcome Guest</div>
        )

        //element variable approach
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Robaith</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        //with if else :
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome robaith</div>
        // }
        // else {
        //     return <div>Welcome guest</div>
        // }


        // return (
        //     <div>
                
        //     </div>
        // )
    }
}

export default UserGreeting
