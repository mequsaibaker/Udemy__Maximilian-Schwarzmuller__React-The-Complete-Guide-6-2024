import { useState } from "react";
import Inputs from "./components/Inputs";
import Review from "./components/Review";

function App() {
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");

  function onFeedbackChange(event) {
    setFeedback(event.target.value);
  }

  function onNameChange(event) {
    setName(event.target.value);
  }

  return (
    <>
      <Inputs
        feedback={feedback}
        name={name}
        onFeedbackChange={onFeedbackChange}
        onNameChange={onNameChange}
      />
      <Review feedback={feedback} name={name} />
    </>
  );
}

export default App;
