// src/components/FavoritesList.jsx
import React from "react";
import BookCard from "./BookCard"; // Import the BookCard component to display individual books
import useStore from "../stores/store"; // Import Zustand store

const FavoritesList = () => {
  // Get favorites array from the Zustand store
  const { favorites } = useStore();

  return (
    <div>
      {favorites.length === 0 ? ( // If no favorites, display a message
        <p>No favorites yet!</p>
      ) : (
        // If there are favorite books, display them in a grid layout
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {favorites.map((book) => (
            // Render a BookCard for each favorite book, passing the book data as props
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
