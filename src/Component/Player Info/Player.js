import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'



const Player = (props) => {
    const { image, name, PlayingRole, salary, CurrentTeam, BattingStyle } = props.player;
    console.log(props);

    return (

        <div className="player-info shadow p-3 mb-5 bg-body rounded">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h2>Name: {name}</h2>
                <p>Playing Role: {PlayingRole}</p>
                <p>Batting Style: {BattingStyle}</p>
                <p>Salary: ${salary}</p>
                <p>Current Team : {CurrentTeam}</p>
                <button className="btn-success"
                    onClick={() => props.handleAddPlayer(props.player)}
                >
                    <FontAwesomeIcon icon={faPlusSquare} /> Buy Player
                </button>
            </div>

        </div>
    );
};

export default Player;