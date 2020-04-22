import React, { Component } from 'react';
import './TeamCard.css';

class TeamCard extends Component {
    constructor(props) {
        super(props);
        this.state = { votes: 0 };
    }

    incrementVote = () => {
        this.setState(st => ({
            votes: st.votes++
        }));
    }

    render() {
        const { name, logo } = this.props;
        const { votes } = this.state;
        return (
            <div className="TeamCard">
                <h1>{name}</h1>
                <div className="TeamCard-logo">
                    <img src={logo} alt={name} />
                </div>
                <h3 className="TeamCard-vote">Votes: {votes}</h3>
                <button className="TeamCard-btn" onClick={this.incrementVote}>VOTE</button>
            </div>
        );
    }
}

export default TeamCard;
