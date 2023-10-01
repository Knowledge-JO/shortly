import "../styles/App.css";
import Navbar from "./Navbar";
import IntroSection from "./IntroSection";

import Boost from "./Boost";
import AdvancedSection from "./AdvancedSection";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <IntroSection />
      </div>

      <AdvancedSection />
      <Boost />
      <Footer />
    </div>
  );
};

export default App;
