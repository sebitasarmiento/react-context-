import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../assets/context/GlobalContext";
import IconHeart from "../components/IconHeart";

function Gallery() {
  const { photos, favorites, setFavorites, setPhotos } = useContext(GlobalContext);

  useEffect(() => {
    fetch("/photos.json")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos);
      })
      .catch((error) => console.error(error));
  }, []);

  const isFavorite = (photo) => {
    return favorites.some((favPhoto) => favPhoto.id === photo.id);
  };

  const toggleFavorite = (photo) => {
    if (isFavorite(photo)) {
      setFavorites((prevFavorites) => prevFavorites.filter((favPhoto) => favPhoto.id !== photo.id));
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, photo]);
    }
  };

  return (
    <div className="grid">
      {photos.map((photo, index) => (
        <div key={index} className="grid__item">
          <div className="card">
            <img src={photo.src.original} alt={photo.alt} className="card__img" />
            <div className="card__content">
              <h1 className="card__header">{photo.alt}</h1>
              <p className="card__text">Agregar a favoritos</p>
              <button className="card__btn" onClick={() => toggleFavorite(photo)}>
                <IconHeart filled={isFavorite(photo)} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;

