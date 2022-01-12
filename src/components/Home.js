import React, { Component } from 'react'
import AccountBalance from './AccountBalance'
import {Link} from "react-router-dom"
export default class Home extends Component {
    render() {
        return (
            <div>
                <img src="https://static.thenounproject.com/png/28416-200.png" alt="bank"/>
                <h1>Bank of React</h1>

                <Link to="/userProfile">UserProfile</Link> <br></br>
                <Link to="/login">Log In</Link>

                <AccountBalance accountBalance={this.props.accountBalance}></AccountBalance>
            </div>
        )
    }
}
