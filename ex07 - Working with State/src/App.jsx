import { useState } from "react";

function App() {
  const [price, setPrice] = useState(100);
  return (
    <>
      <p>${price}</p>
      <button onClick={() => setPrice(75)}>Apply Discout</button>
    </>
  );
}

export default App;
