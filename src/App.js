import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import OurTeam from "./components/OurTeam";
import Brand from "./components/Brand";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Services />
      <Portfolio />
      <About />
      <OurTeam />
      <Brand />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
