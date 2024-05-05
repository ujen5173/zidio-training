import { Mail, User } from "lucide-react";
import "../form1.css";
import Rating from "./Rating";

const Form1 = () => {
  return (
    <section className="wrapper">
      <h1>Feedback Form</h1>

      <form className="form-wrapper">
        <label htmlFor="name">Name</label>
        <div className="input-wrapper">
          <div className="icon-wrapper">
            <User size={15} color={"#696969"} />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
        </div>
        <label htmlFor="email">Email</label>
        <div className="input-wrapper">
          <div className="icon-wrapper">
            <Mail size={15} color={"#696969"} />
          </div>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <h3>Share your experience in scaling</h3>
          <Rating />
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
          <button className="btn-secondary">Cancel</button>
          <button className="btn-primary">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Form1;
