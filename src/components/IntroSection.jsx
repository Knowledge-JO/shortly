import "../styles/IntroSection.css";
import illustration from "../assets/images/illustration-working.svg";
const IntroSection = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1>More than just shorter links</h1>
        <p>
          Build you brand&apos;s recognition and get detailed insight on how
          your links are performing
        </p>
        <button>Get Started</button>
      </div>
      <img src={illustration} alt="illustration working" />
    </div>
  );
};

export default IntroSection;
