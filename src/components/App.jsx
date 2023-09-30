import "../styles/App.css";
import Navbar from "./Navbar";
import IntroSection from "./IntroSection";
import ShortnerForm from "./ShortnerForm";
import ShortenedUrlList from "./ShortenedUrlList";
import AdvancedSection from "./AdvancedSection";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <IntroSection />
      <ShortnerForm />
      <ShortenedUrlList />
      <AdvancedSection />
      <Footer />
    </div>
  );
};

export default App;
