import React, { useState, useEffect } from 'react';

function PlayerList({ players }) {
  const handleSeeDetails = (playerId) => {
  };

  const handleDeletePlayer = (playerId) => {
  };

  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <h3>{player.name}</h3>
          <button onClick={() => handleSeeDetails(player.id)}>See Details</button>
          <button onClick={() => handleDeletePlayer(player.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

function PlayerListContainer() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  async function fetchPlayers() {
    try {
      
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players');
      const data = await response.json();
      setPlayers(data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  }

  return (
    <div>
      <PlayerList players={players} />
    </div>
  );
}

export default PlayerListContainer;