import React from "react";
import useStore from "../stores/store"; // Import the state store
import BookCard from "./BookCard"; // Component for displaying individual books

const FavoritesList = () => {
  const { favorites } = useStore(); // Get favorite books from state

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">My Favorite Books</h2>
      {favorites.length === 0 ? (
        <p>You haven't added any favorite books yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {favorites.map((book) => (
            <BookCard key={book.id} book={book} /> {/* Display favorite books */}
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
