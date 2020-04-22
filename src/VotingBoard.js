import React, { Component } from 'react';
import TeamCard from './TeamCard';
import './VotingBoard.css';
import liverpool from './images/liverpool.png';
import barcelona from './images/barcelona.png';
import realMadrid from './images/real-madrid.png';
import bayernMunich from './images/bayern-munich.png';

class VotingBoard extends Component {
    static defaultProps = {
        teams: [
            {name: "FC Barcelona", logo: barcelona},
            {name: "Real Madrid", logo: realMadrid},
            {name: "FC Bayern Munich", logo: bayernMunich},
            {name: "Liverpool", logo: liverpool} 
        ]
    }

    render() {
        const { teams } = this.props;
        return (
            <div className="VotingBoard">
                <div className="VotingBoard-heading">
                    <h1>Football Voting App</h1>
                </div>
                <div className="VotingBoard-content">
                    {teams.map((team, i) => (
                        <TeamCard
                            key={i}
                            logo={team.logo}
                            name={team.name}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default VotingBoard;
