YABL - Yet Another Book Library
YABL (Yet Another Book Library) is a book management application built with React, Axios, and Tailwind CSS. It allows users to search for books, view trending titles, and explore a "Developer's Pick" section. The book data is fetched from the Open Library API.

Features
Book Search: Users can search for books by title, author, or ISBN and get a list of results.
Trending Books: Displays a selection of trending books.
Developer's Pick: A manually curated list of selected books featured on the homepage.
Book Details: View detailed information about each book, including description, author, genres, and publication information.
Tech Stack
React: Frontend framework used for building the UI.
Axios: Used for fetching data from the Open Library API.
Tailwind CSS: Utility-first CSS framework for styling the application.
Open Library API: The source for book data.

API Integration
This app uses the Open Library API to fetch book data. You may need to sign up for an API key depending on the features you want to use.

In the project, API calls are handled via Axios and stored in the src/services/api.js file.

Installation
Clone the repository:
bash
Copy code
git clone <https://github.com/esmizz.git>
cd esmael
Install dependencies:
bash
Copy code
npm install
Create a .env file in the root directory and add your Open Library API key (if required):
bash
Copy code
VITE_OPEN_LIBRARY_API_KEY=your_api_key_here
Start the development server:
bash
Copy code
npm run dev
Open http://localhost:5173 to view the application.
License
This project is licensed under the MIT License - see the LICENSE file for details.