import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [response, setResponse] = React.useState<string>("waiting...");
  React.useEffect(() => {
    fetch("/ping").then((response) =>
      response.json().then((json) => setResponse(json.response))
    );
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {response}
        </a>
      </header>
    </div>
  );
}

export default App;
