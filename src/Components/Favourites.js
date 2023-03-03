import React, { useState, useEffect } from 'react';

function Favourites() {


  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/favourites")
      .then(response => response.json())
      .then(data => setFavourites(data))
      .catch(error => console.log(error));
  }, []);
  const handleDeleteClick = (id) => {
    fetch(`http://localhost:9292/favourites/${id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(data => {
        const filteredFavourites = favourites.filter(favourite => favourite.id !== id);
        setFavourites(filteredFavourites);
      })
      .catch(error => console.log(error));
  };


  return (
    <div className="row">
      {favourites.map(favourite => (
        <div key={favourite.id} className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{favourite.book.title}</h5>
            <p className="card-text">{favourite.book.description}</p>
            <button className="btn btn-danger" onClick={() => handleDeleteClick(favourite.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favourites;