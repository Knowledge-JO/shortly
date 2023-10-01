import "../styles/ShortnerForm.css";

const ShortnerForm = ({ onHandleForm, onSetLink, error, errorMsg, link }) => {
  return (
    <div className="form-container">
      <form onSubmit={(e) => onHandleForm(e)}>
        <span className={`${error ? "error" : ""}`}>{errorMsg}</span>
        <input
          className={`${error ? "error" : ""}`}
          type="text"
          placeholder="Shorten a link here..."
          value={link}
          onChange={(e) => onSetLink(e.target.value)}
        />

        <button>Shorten it!</button>
      </form>
    </div>
  );
};

export default ShortnerForm;
