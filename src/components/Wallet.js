import React from 'react';
import { connect } from 'react-redux'

export class Wallet extends React.Component {
    render() {
        return(
            <h1>Wallet balance: {this.props.balance}</h1>
        )
    }
}

export default connect( state => { balance: state} , null)(Wallet);