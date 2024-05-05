import { ArrowLeft, Mail, User } from "lucide-react";
import "../../form2.css";
import EmojiRating from "./EmojiRating";

const Form2 = () => {
  return (
    <section className="wrapper">
      <h1>Feedback Form</h1>

      <div className="container">
        <div className="header">
          <ArrowLeft size={20} color={"#fff"} />
          <h2>Feedback Form</h2>
        </div>
        <form className="form-wrapper">
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
            <EmojiRating />
          </div>

          <div className="input-wrapper">
            <textarea
              placeholder="Suggest anything you can improve"
              name="comment"
              id="comment"
              cols="30"
              rows="5"
            />
          </div>

          <div className="button-wrapper">
            <button className="btn-primary">Send Feedback</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form2;
