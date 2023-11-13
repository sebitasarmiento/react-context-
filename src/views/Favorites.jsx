import React, { useContext } from "react";
import { GlobalContext } from "../assets/context/GlobalContext";

function Favorites() {
  const { favorites } = useContext(GlobalContext);

  return (
   <div className="App">
  <h1>Fotos favoritas</h1>
  <div className="grid">
    {favorites.map((photo) => (
      <div key={photo.id} className="grid__item">
        <div className="card">
          <img src={photo.src.original} alt={photo.alt} className="card__img" />
          <div className="card__content">
            <h1 className="card__header">{photo.alt}</h1>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  )}

export default Favorites;
