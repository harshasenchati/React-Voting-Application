import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Form from "./Form";
import VotingOptions from "./VotingOptions";
import Results from "./Results";
import "./App.css";

function App() {
  const [teams, setTeams] = useState([
    { id: 1, name: "BJP", votes: 0 },
    { id: 2, name: "TRS", votes: 0 },
    { id: 3, name: "Congress", votes: 0 },
  ]);

  const handleVote = (teamId) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) => {
        if (team.id === teamId) {
          return { ...team, votes: team.votes + 1 };
        } else {
          return team;
        }
      })
    );
  };

  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/form" element={<Form />} />
        <Route
          path="/votingoptions"
          element={<VotingOptions teams={teams} onVote={handleVote} />}
        />
        <Route path="/results" element={<Results teams={teams} />} />
      </Routes>
    </div>
  );
}

export default App;
