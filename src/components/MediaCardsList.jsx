import PropTypes from 'prop-types';
import MediaCard from './MediaCard';

import './MediaCardsList.css';

MediaCardsList.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function MediaCardsList({ players }) {
  return (
    <div className="media-cards-list">
      {players.map((player) => (
        <MediaCard
          key={player.id}
          name={player.name}
          description={player.description}
          rating={player.rating}
        />
      ))}
    </div>
  );
}

export default MediaCardsList;
