export const user = {
  name: "",
};

function App() {
  function handleCreateUser(name) {
    user.name = name;
    console.log(user);
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label htmlFor="name">Name</label>
        {/* You don't need to do anything with this input! You'll learn how to handle user input later */}
        <input id="name" type="text" />
      </p>
      <p id="actions">
        <button onClick={() => handleCreateUser("Max")}>Create User</button>
      </p>
    </div>
  );
}

export default App;
