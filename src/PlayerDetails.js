import React, { useState, useEffect } from 'react';

function PlayerDetails({ playerId }) {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    fetchPlayerDetails(playerId);
  }, [playerId]);

  async function fetchPlayerDetails(playerId) {
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players/${playerId}`);
      const data = await response.json();
      setPlayer(data);
    } catch (error) {
      console.error('Error fetching player details:', error);
    }
  }

  if (!player) return <div>Loading...</div>;

  return (
    <div>
      <h2>{player.name}</h2>
      <p>Owner: {player.owner}</p>
      <p>Team: {player.team}</p>
    </div>
  );
}

export default PlayerDetails;