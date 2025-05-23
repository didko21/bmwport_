// Games.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Games.css';

function Games() {
  const games = [
    { 
      id: 1, 
      title: "Internet cafe simulator 2", 
      description: "Survive the zombie apocalypse in this action-packed game.", 
      genre: "Action, Survival", 
      platforms: "Windows, Linux", 
      downloadLink: "https://drive.google.com/file/d/1ckpWXwNTK3k2YF_IMvoF_Xqt6-2HbZ/view?usp=drive_link", 
      detailLink: "/game41" 
    },
    { 
      id: 2, 
      title: "Space Adventure", 
      description: "Explore the galaxy in this epic space game.", 
      genre: "Adventure", 
      platforms: "Windows, Mac", 
      downloadLink: "/download2", 
      detailLink: "/game22" 
    }
  ];

  return (
    <div className="games-container">
      <h2>Available Games</h2>
      
      <div className="games-list">
        {games.map(game => (
          <div key={game.id} className="game-card">
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            <p><strong>Genre:</strong> {game.genre}</p>
            <p><strong>Platform:</strong> {game.platforms}</p>
            <div className="game-actions">
              <a 
                href={game.downloadLink} 
                className="download-btn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Download
              </a>
              <Link to={game.detailLink} className="details-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
