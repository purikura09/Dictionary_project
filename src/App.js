import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="Logo img-fluid" alt="logo" />
          <br />
        </header>
        <br />

        <Dictionary />

        <footer className="text-center">Coded by Rebecca with SheCodes</footer>
      </div>
    </div>
  );
}
