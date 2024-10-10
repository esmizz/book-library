import React from "react";
import BookCard from "./BookCard"; // Assuming you have a BookCard component

const FavoritesList = ({ favorites }) => {
  return (
    <div>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {favorites.map((book) => (
            <BookCard key={book.id} book={book} /> {/* Display favorite books */}
          ))} {/* Ensure there is no extra quotation mark */}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
