import React, { useState, useEffect, useContext } from "react";

import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Repositories from "../components/Repositories";
import NewRepository from "../components/NewRepository";

import { AuthContext } from "../contexts/auth";

import {
  getRepositories,
  createRepository,
  deleteRepository,
} from "../services/api";

import { Link } from "react-router-dom";

import "../styles/MainPage.css";
const MainPage = () => {
  const { user, logout } = useContext(AuthContext);

  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const loadData = async (query = "") => {
    try {
      setLoading(true);
      const response = await getRepositories(user?.id, query);
      console.log(response.data);
      setRepositories(response.data);
      setLoading(false);
    } catch (error) {
      console.log(user?.id);
      console.log(error);
      setLoadingError(true);
    }
  };

  useEffect(() => {
    (async () => await loadData())();
  }, []);

  const handleSearch = async (query) => {
    await loadData(query);
  };

  const handleDeleteRepo = async (repository) => {
    try {
      await deleteRepository(user?.id, repository._id);
      await loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleNewRepo = async (url) => {
    try {
      await createRepository(user?.id, url);
      await loadData();
    } catch (err) {
      console.error(err);
      setLoadingError(true);
    }
  };

  if (loadingError) {
    return (
      <div className="loading">
        erro ao carregar os dados <Link to="/login">Voltar</Link>
      </div>
    );
  }

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="main">
      <Navbar handleLogout={handleLogout} />
      <Searchbar handleSearch={handleSearch} />
      <Repositories
        repositories={repositories}
        onDeleteRepo={handleDeleteRepo}
      />
      <NewRepository handleNewRepo={handleNewRepo} />
    </div>
  );
};

export default MainPage;
