const Inputs = ({ feedback, name, onFeedbackChange, onNameChange }) => {
  return (
    <div id="feedback">
      <h2>Please share some feedback</h2>
      <p>
        <label htmlFor="feedback">Your Feedback</label>
        <textarea name="" id="feedback" onChange={onFeedbackChange}>
          {feedback}
        </textarea>
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" value={name} onChange={onNameChange} />
      </p>
    </div>
  );
};

export default Inputs;
