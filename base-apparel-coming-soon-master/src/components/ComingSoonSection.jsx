import React from "react";
import EmailInput from "./EmailInput";

function ComingSoonSection() {
  return (
    <div className="coming-soon-section">
      <h1>
        <span>We're</span>
        <br />
        Coming Soon
      </h1>
      <p>
        Hello fellow shoppers! We're currently building our new store. Add your
        email below to stay up-to-date with announcements and our launch deals.
      </p>
      <EmailInput />
    </div>
  );
}

export default ComingSoonSection;
