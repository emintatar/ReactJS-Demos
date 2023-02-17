import "./App.css";
import Navbar, {AltNavbar} from "./components/Navbar";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
        <AltNavbar />
        <Body />
      </div>
    </div>
  );
};

export default App;
