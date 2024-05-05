import "../../form3.css";
import EmojiRating from "./RatingForm";

const Form3 = () => {
  return (
    <section className="wrapper">
      <h1>Feedback Form</h1>

      <div className="container">
        <div className="header">
          <span>Back</span>
        </div>

        <form className="form-wrapper">
          <div className="multi-inputs">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="number">Contact Number</label>
              <input
                type="text"
                id="number"
                name="number"
                placeholder="+98 0000 0000"
              />
            </div>
          </div>

          <label htmlFor="email">Email</label>
          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <h3>Share your experience in scaling</h3>
            <EmojiRating />
          </div>

          <div className="input-wrapper">
            <textarea
              placeholder="Enter your comments..."
              name="comment"
              id="comment"
              cols="30"
              rows="5"
            />
          </div>

          <div className="button-wrapper">
            <button className="btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form3;
