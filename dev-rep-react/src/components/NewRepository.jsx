import React, { useState } from "react";

const NewRepository = ({ handleNewRepo }) => {
  const [newRepo, setNewRepo] = useState("");
  return (
    <div className="newRepositoriesContainer">
      <div className="newRepo">
        <label htmlFor="newRepoInput">New Repository:</label>
        <input
          value={newRepo}
          onChange={(e) => {
            setNewRepo(e.target.value);
          }}
          type="url"
          name="newRepoInput"
          id="newRepoInput"
        />
        <button
          onClick={() => {
            handleNewRepo(newRepo);
          }}
          className="addRepBtn"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NewRepository;
