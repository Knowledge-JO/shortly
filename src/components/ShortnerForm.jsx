import "../styles/ShortnerForm.css";

const ShortnerForm = () => {
  return (
    <div className="form-container">
      <form action="">
        <input type="text" placeholder="Shorten a link here..." />
        <button>Shorten it!</button>
      </form>
    </div>
  );
};

export default ShortnerForm;
