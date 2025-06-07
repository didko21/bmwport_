const FeaturedGame = ({ game }) => (
  <div className="game-card">
    <h2>{game.title}</h2>
    <p className="description">{game.description}</p>
    <div className="divider"></div>
    <div className="game-meta">
      <p><strong>Genre:</strong> {game.genre}</p>
      <p><strong>Platform:</strong> {game.platforms}</p>
    </div>
    <div className="game-actions">
      <button className="download-btn">Download</button>
      <button className="details-btn">View Details</button>
    </div>
    <div className="download-info">
      <span className="file-size">{game.fileSize}</span>
    </div>
  </div>
);

// CSS (you can use a separate CSS file or styled-components)
/*
.game-card {
  background: #1a1a1a;
  color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 300px;
  margin: 10px;
}

.game-card h2 {
  margin-top: 0;
  font-size: 1.5rem;
}

.description {
  color: #aaa;
  font-size: 0.9rem;
}

.divider {
  height: 1px;
  background: #333;
  margin: 15px 0;
}

.game-meta p {
  margin: 5px 0;
  font-size: 0.8rem;
}

.game-actions {
  display: flex;
  gap: 10px;
  margin: 15px 0;
}

.download-btn, .details-btn {
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.download-btn {
  background: #4CAF50;
  color: white;
}

.details-btn {
  background: #333;
  color: white;
}

.download-info {
  text-align: right;
}

.file-size {
  font-size: 0.8rem;
  color: #777;
}
*/
