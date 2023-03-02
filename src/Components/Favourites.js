import React, { useState, useEffect } from 'react';

function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/favourites")
      .then(response => response.json())
      .then(data => setFavourites(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="row">
      {favourites.map(favourite => (
        <div key={favourite.book.id} className="card" style={{ width: "18rem" }}>
          <img src={favourite.book.image_url} className="card-img-top" alt={favourite.book.title} />
          <div className="card-body">
            <h5 className="card-title">{favourite.book.title}</h5>
            <p className="card-text">{favourite.book.description}</p>
            <p className="card-text">Added by: {favourite.user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favourites;