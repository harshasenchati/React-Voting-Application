import React from "react";
import "./App.css";

function Results({ teams }) {
  return (
    <div className="results">
      {teams.map((team) => (
        <div key={team.id} className="items">
          <h3>{team.name}</h3>
          <p>Votes: {team.votes}</p>
        </div>
      ))}
    </div>
  );
}

export default Results;
