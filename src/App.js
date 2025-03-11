import React, { useState } from "react";
import "./App.css";

function App() {
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const handleHeartClick = () => {
    setIsHeartClicked(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Coração que cobre a tela */}
        {!isHeartClicked && (
          <div id="heartBackground">
            <div
              id="heartOverlay"
              onClick={handleHeartClick}
              style={{
                opacity: isHeartClicked ? 0 : 1,
              }}
            ></div>
          </div>
        )}
        <div id="backgroundMessage">
          <div id="messageBox" 
            className={isHeartClicked ? "messageBoxVisible" : ""}>
            Temos momentos em que estamos perdidos na escuridão, no entanto,
            nestes momentos as estrelas continuam brilhando.
            <br />
            Se por acaso o seu mundo não estiver mais fazendo sentido, vem
            comigo, e vamos montar um mundo na qual deixe o seu dia mais
            iluminado!!
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
