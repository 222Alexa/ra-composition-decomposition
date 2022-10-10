import "./App.css";
import "./main.css";
import "./components/Blocks/blocks.css"
import Header from "./components/Blocks/Header/Header";
import Main from "./components/Blocks/Main/Main";
import SideBar from "./components/Blocks/Sidebar/Sidebar";

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
