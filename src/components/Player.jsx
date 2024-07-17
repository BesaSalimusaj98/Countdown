import { React, useState, useRef } from "react";
export default function Player() {
  const [endteredPlayerName, setEnteredPlayerName] = useState(null);
  const playerName = useRef();
  function handleOnClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {endteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleOnClick}>Set Name</button>
      </p>
    </section>
  );
}
