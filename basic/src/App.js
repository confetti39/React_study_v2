import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "jeongyo";
  return (
    <>
      <h1 className="orange">Hello1</h1>
      <h2>Hello2</h2>
      <p>{name}</p>
      <ul>
        <li>딸기</li>
        <li>우유</li>
      </ul>
    </>
  );
}

export default App;
