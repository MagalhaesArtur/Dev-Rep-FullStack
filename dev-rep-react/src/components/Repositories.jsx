import React from "react";

const Repositories = ({ repositories, onDeleteRepo }) => {
  if (repositories == "") {
    return (
      <div className="mainContentContainer">
        <h1>Repositories</h1>

        <ul className="repositoriesContainer">
          <li className="item">
            <div className="info">
              <div className="owner">Not Found...</div>
            </div>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="mainContentContainer">
      <h1>Repositories</h1>

      <ul className="repositoriesContainer">
        {repositories.map((repository) => (
          <li className="item" key={repository._id}>
            <div className="info">
              <div className="owner">
                {repository.name.substring(0, repository.name.indexOf("/"))}
              </div>
              <div className="name">
                {repository.name.substring(repository.name.indexOf("/") + 1)}
              </div>
            </div>
            <button
              onClick={() => {
                onDeleteRepo(repository);
              }}
              className="deleteBtn"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repositories;
