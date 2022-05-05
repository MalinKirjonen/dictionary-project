import faceMalin from "./faceMalin.JPG";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={faceMalin} alt="logo" className=" App-logo img-fluid" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Malin Kirjonen</small>
        </footer>
      </div>
    </div>
  );
}
