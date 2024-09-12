import { useState } from "react";

function App() {
  const [isStyled, setIsStyled] = useState(false);
  return (
    <>
      <p className={isStyled ? "active" : ""}>Style me!</p>
      <button onClick={() => setIsStyled(!isStyled)}>Toggle style</button>
    </>
  );
}

export default App;
