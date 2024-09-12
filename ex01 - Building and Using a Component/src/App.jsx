export function MainGoal() {
  return <p>My main goal: Learn React in-depth and from the ground up</p>;
}

function App() {
  return (
    <div id="app">
      <h1>Time to Practice!</h1>
      <p>
        Build a <code>&lt;MainGoal&gt;</code> component and insert it below this
        text.
      </p>
      <p>
        Your <code>&lt;MainGoal&gt;</code> component should simply output some
        text that describes your main course goal (e.g., "My main goal: Learn
        React in great detail").
      </p>
      <p>
        <strong>Important:</strong> You custom component must contain the text
        "My main goal:"
      </p>
      <p>
        <strong>Also important:</strong> For the automatic checks to succeed,
        you <strong>must export</strong> your custom component function! Not as
        a default but simply by adding the <code>export</code> keyword in front
        of your function (e.g.,
        <code>export function YOUR_COMPONENT_NAME </code>).
      </p>
      <MainGoal />
    </div>
  );
}

export default App;
