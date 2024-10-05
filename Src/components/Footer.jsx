import React from "react";

const Footer = () => {
  return (
    <footer className="bg-accent text-background py-4 px-6 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-2">
          Book Explorer: Your Personal Book Library
        </p>
        <p className="text-sm">
          Powered by{" "}
          <a
            href="https://openlibrary.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-300"
          >
            Open Library API
          </a>
        </p>
        <p className="text-sm mt-1">
          Developed by <span className="font-medium">Esmael Ali</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
