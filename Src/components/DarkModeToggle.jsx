import React from "react";
import { Moon, Sun } from "lucide-react";
import useStore from "../stores/store"; // Import the state store

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useStore(); // Use state store for dark mode

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-secondary dark:bg-gray-700"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />} {/* Switch icon based on dark mode */}
    </button>
  );
};

export default DarkModeToggle;
