import { useState } from "react";

function App() {
  const [alertIsVisiable, setAlertIsVisiable] = useState(false);
  const deleteBtn = (
    <button onClick={() => setAlertIsVisiable(true)}>Delete</button>
  );
  const alertDialog = (
    <div id="alert">
      <h2>Are you sure?</h2>
      <p>These changes can't be reverted!</p>
      <button onClick={() => setAlertIsVisiable(false)}>Proceed</button>
    </div>
  );
  return <>{!alertIsVisiable ? deleteBtn : alertDialog}</>;
}

export default App;
