import * as React from "react";
import { useState } from "react";

export const App = () => {
  const [votes, setVotes] = useState(0);
  const addVote = () => {
    setVotes(votes + 1);
  };
  return (
    <div>
      <h2>{votes} Votes!!</h2>
      <p>
        <button onClick={addVote}>Vote!</button>
      </p>
    </div>
  );
};
