import React from 'react';
import MediaCard from './MediaCard';

import './MediaCardsList.css';

function MediaCardsList({ players }) {
  return (
    <div className="media-cards-list">
      {players.map((player) => (
        <MediaCard
          key={player.id}
          name={player.name}
          description={player.description}
        />
      ))}
    </div>
  );
}

export default MediaCardsList;
