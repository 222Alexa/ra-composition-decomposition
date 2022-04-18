import "./App.css";
import "./main.css";
import Header from "./components/Header";
import Main from "./components/Main";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="body-container">
        <header>
          <Header />
        </header>
        <aside>
          <SideBar />
        </aside>
        <main>
          <Main />
        </main>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
