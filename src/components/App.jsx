import "../styles/App.css";
import Navbar from "./Navbar";
import IntroSection from "./IntroSection";
import ShortenedUrlList from "./ShortenedUrlList";
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
      <ShortenedUrlList />
      <AdvancedSection />
      <Boost />
      <Footer />
    </div>
  );
};

export default App;
