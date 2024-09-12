export const user = {
  email: "",
  password: "",
  loggedIn: false,
};

function App() {
  function handleClick() {
    user.email = "test@example.com";
    user.password = "test";
    user.loggedIn = true;
    console.log(user);
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label htmlFor="email"></label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input id="email" type="email" />
      </p>
      <p>
        <label htmlFor="password"></label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input id="password" type="password" />
      </p>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default App;
