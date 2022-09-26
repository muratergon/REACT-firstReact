import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Services />
      <Portfolio />
      <About />
    </div>
  );
}

export default App;
