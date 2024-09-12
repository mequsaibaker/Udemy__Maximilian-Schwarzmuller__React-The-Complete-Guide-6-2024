export const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

function App() {
  return (
    <ul>
      {DUMMY_TODOS.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default App;
