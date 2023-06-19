import "./App.css";
import Header from "./components/Header";
import RightContent from "./components/RightContent";
import SideBar from "./components/SideBar";
import { RootRouter } from "./router/RootRouter";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <SideBar />
        <RightContent>{<RootRouter />}</RightContent>
      </div>
    </div>
  );
}

export default App;
