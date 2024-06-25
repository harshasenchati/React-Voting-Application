
import React from 'react';
import './App.css'

function Team({teams, onVote }) {
  return (
    <div className='teams'>

      {teams.map(team => (
        <div key={team.id} className='items'>
          <h2>{team.name}</h2>
          {/* <p>Votes: {team.votes}</p> */}
          {/* <button className='button' onClick={() => onVote(team.id)}>Vote for {team.name}</button> */}
          <button  className="button">
          <div className="button-top" onClick={() => onVote(team.id)}>Vote for {team.name}</div>
          <div className="button-bottom"></div>
          <div className="button-base"></div>
        </button>
        </div>
      ))}
    </div>
  );
}

export default Team;

