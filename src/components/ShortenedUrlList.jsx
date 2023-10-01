import { useState } from "react";
import "../styles/ShortenedUrlList.css";

const ShortenedUrlList = ({ shortenedLinks }) => {
  const shortenedLinksSlice =
    shortenedLinks.length > 4
      ? shortenedLinks
          .slice(shortenedLinks.length - 5, shortenedLinks.length - 1)
          .reverse()
      : shortenedLinks;
  return (
    <ul className="list-container">
      {shortenedLinksSlice.map((link, index) => (
        <ListItem
          key={index}
          originalLink={link.split(" ")[0]}
          shortLink={link.split(" ")[1]}
        />
      ))}
    </ul>
  );
};

const ListItem = ({ originalLink, shortLink }) => {
  return (
    <div className="list">
      <p>{originalLink}</p>
      <div>
        <a href={shortLink} target="_blank" rel="noreferrer">
          {shortLink}
        </a>
        <CopyButton shortLink={shortLink} />
      </div>
    </div>
  );
};

const CopyButton = ({ shortLink }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortLink);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.log(err);
      setCopied(false);
    }
  };
  return (
    <button className={`copy ${copied ? "active" : ""}`} onClick={handleCopy}>
      {copied ? "copied" : "copy"}
    </button>
  );
};

export default ShortenedUrlList;
