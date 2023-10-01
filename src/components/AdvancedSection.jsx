import "../styles/AdvancedSection.css";
import ShortnerForm from "./ShortnerForm";
import brandRecognition from "../assets/images/icon-brand-recognition.svg";
import detailedRecords from "../assets/images/icon-detailed-records.svg";
import fullyCustomizable from "../assets/images/icon-fully-customizable.svg";
import ShortenedUrlList from "./ShortenedUrlList";
import { useEffect, useState } from "react";

const url = "https://api.shrtco.de/v2/shorten?url=";
const AdvancedSection = () => {
  const [link, setLink] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const db = localStorage.getItem("shortened_links");
  const [shortenedLinks, setShortenedLinks] = useState(db ? db.split(",") : []);

  useEffect(() => {
    console.log(shortenedLinks);
  }, [shortenedLinks]);

  const handleShortnerForm = async (e) => {
    e.preventDefault();
    try {
      if (link) {
        setError(false);
        const completeUrl = url + link.trim();
        const res = await fetch(completeUrl);
        const result = await res.json();
        if (result.ok) {
          const short_link = result.result.full_short_link;
          setShortenedLinks((shortenedLinks) => [
            ...shortenedLinks,
            `${link} ${short_link}`,
          ]);
          if (db !== null) {
            const items = localStorage.getItem("shortened_links").split(",");
            localStorage.setItem(`shortened_links`, [
              ...items,
              `${link} ${short_link}`,
            ]);
          } else {
            localStorage.setItem(`shortened_links`, [`${link} ${short_link}`]);
          }
        } else {
          setError(true);
          setErrorMsg("Try again with a valid link.");
          console.log(errorMsg);
        }
      } else {
        setError(true);
        setErrorMsg("Please add a link");
      }
    } catch (err) {
      setError(true);
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="advanced-section">
      <ShortnerForm
        onHandleForm={handleShortnerForm}
        onSetLink={setLink}
        error={error}
        errorMsg={errorMsg}
        link={link}
      />

      <ShortenedUrlList shortenedLinks={shortenedLinks} />

      <div className="advanced-stats">
        <div className="stats-header">
          <h1>Advanced statistics</h1>
          <p className="sub-header">
            Track how your links are performing across the web with our advanced
            statistic dashboard
          </p>
        </div>
      </div>

      <div className="advanced-dets-cards">
        <div className="join-line"></div>
        <div className="advanced-dets-cards-container">
          <div className="card card-1">
            <div className="brand-recognition">
              <img src={brandRecognition} alt="Brand Recognition" />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links
              don&apos;t mean a thing. Branded links help instil confidence in
              your content.
            </p>
          </div>
          <div className="card card-2">
            <div className="detail-records">
              <img src={detailedRecords} alt="Detailed Records" />
            </div>
            <h3>Detail Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="card card-3">
            <div className="fullyCustomizable">
              <img src={fullyCustomizable} alt="Fully Customizable" />
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSection;
