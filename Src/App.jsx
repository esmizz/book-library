import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Home page displaying books
import BookDetails from "./pages/BookDetails"; // Page to show details of a selected book
import FavoritesList from "./components/FavoritesList"; // Component to display favorite books
import SearchPage from "./pages/SearchPage"; // Page for searching books
import Header from "./components/Header"; // Header component
import Footer from "./components/Footer"; // Footer component
import useStore from "./stores/store"; // Zustand store for state management

const App = () => {
  const { isDarkMode } = useStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background dark:bg-gray-900 text-text dark:text-white">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/book/:id" element={<BookDetails />} /> {/* Book details page */}
            <Route path="/favorites" element={<FavoritesList />} /> {/* Favorites list page */}
            <Route path="/search" element={<SearchPage />} /> {/* Search page */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
