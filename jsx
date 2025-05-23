import React from 'react';
import { Link } from 'react-router-dom';

function Games() {
  const extractFileId = (url) => {
    const match = url.match(/\/file\/d\/([^\/]+)/);
    return match ? match[1] : null;
  };

  const games = [
    {
      id: 1,
      title: "Internet cafe simulator 2",
      description: "Survive the zombie apocalypse in this action-packed game.",
      genre: "Action, Survival",
      platforms: "Windows, Linux",
      downloadLink: "https://drive.google.com/file/d/1ckpWXwNTK3k2YF_IMvoF_Xqt6-2HbZ/view?usp=drive_link",
      detailLink: "/game41"
    }
    // ... other games
  ];

  return (
    <div className="games-container">
      {games.map(game => (
        <div key={game.id} className="game-card">
          {/* ... other game info ... */}
          <a 
            href={`https://drive.google.com/uc?export=download&id=${extractFileId(game.downloadLink)}`}
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download
          </a>
        </div>
      ))}
    </div>
  );
}

export default Games;
