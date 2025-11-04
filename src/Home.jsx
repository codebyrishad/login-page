import React, { useContext, useState } from "react";
import { usercontext } from "./App";

function Home() {
  const { state, dispatch } = useContext(usercontext);
  const [newName, setNewName] = useState("");

  function handleUpdate() {
    dispatch({ type: "UPDATE", payload: newName });
    setNewName("");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Welcome, {state.username}</h2>
      <input
        type="text"
        placeholder="Enter new name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <br /><br />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Home;
