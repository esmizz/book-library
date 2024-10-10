// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router components
import Home from "./pages/Home"; // Import Home page component
import BookDetails from "./pages/BookDetails"; // Import BookDetails page component
import FavoritesList from "./components/FavoritesList"; // Import FavoritesList component
import SearchPage from "./pages/SearchPage"; // Import SearchPage component
import Header from "./components/Header"; // Import Header component
import Footer from "./components/Footer"; // Import Footer component
import useStore from "./stores/store"; // Import Zustand store for state management

const App = () => {
  // Get isDarkMode state from the store
  const { isDarkMode } = useStore();

  // Effect to add/remove dark mode class from the HTML element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]); // Dependency on isDarkMode state

  return (
    <Router>
      {/* Main layout of the app with a flexible layout and a dark mode-aware background */}
      <div className="flex flex-col min-h-screen bg-background dark:bg-gray-900 text-text dark:text-white">
        {/* Include the Header component */}
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {/* Define routes for different pages */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/book/:id" element={<BookDetails />} /> {/* Book details page */}
            <Route path="/favorites" element={<FavoritesList />} /> {/* Favorites list page */}
            <Route path="/search" element={<SearchPage />} /> {/* Search page */}
          </Routes>
        </main>
        {/* Include the Footer component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
