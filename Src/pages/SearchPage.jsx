import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { searchBooks } from "../services/api"; // Change to book search API
import BookList from "../components/BookList"; // BookList component
import Pagination from "../components/Pagination";
import useStore from "../stores/store";
import LoadingSpinner from "../components/LoadingSpinner";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    searchQuery,
    searchResults,
    setSearchQuery,
    setSearchResults,
    setCurrentPage,
    currentPage,
    totalPages,
    setTotalPages,
  } = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const queryParams = new URLSearchParams(location.search);
  const urlQuery = queryParams.get("query") || "";
  const urlPage = parseInt(queryParams.get("page"), 10) || 1;

  useEffect(() => {
    if (
      urlQuery !== searchQuery ||
      urlPage !== currentPage ||
      searchResults.length === 0
    ) {
      handleSearch(urlQuery, urlPage);
    }
  }, [urlQuery, urlPage]);

  const handleSearch = async (query, page = 1) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await searchBooks(query,
