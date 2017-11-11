import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerList extends Component {

    renderPlayers(playerdata) {
        const firstName = playerdata.firstName;
        const lastName = playerdata.lastName;
        const photo = playerdata.photo

        return (
            <tr key={firstName}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td><img src={photo}/></td>
            </tr>
        )
    }



    render() {
        return (
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {this.props.players.map(this.renderPlayers)}
            </tbody>
        </table>
        )
    }
}

function mapStateToProps(state) {

    return { players: state.players };
}

export default connect(mapStateToProps)(PlayerList);