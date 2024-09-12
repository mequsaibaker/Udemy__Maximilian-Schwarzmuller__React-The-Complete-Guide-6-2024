export function Summary({ text }) {
  return (
    <>
      <h1>Summary</h1>
      <p>{text}</p>
    </>
  );
}

function App() {
  return <Summary text="Hello World!" />;
}

export default App;
