// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useStore from "./stores/store"; // Make sure the store file exists and is in the correct location
import Home from "./pages/Home";

const App = () => {
  const theme = useStore((state) => state.theme); // Example: getting theme from zustand store

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
