import React, { useState } from "react";
import ImageSlider from "./components/ImageSlider";
import TestimonialSection from "./components/TestimonialSection";

function App() {
  const [john, setJohn] = useState(true);
  const userData = {
    john: {
      imageName: "john",
      quote: `"If you want to lay the best foundation possible I'd recommend taking
      this course. The depth the instructors go into is incredible. I now feel
      so confident about starting up as a professional developer."`,
      name: "John Tarkpor",
      jobTitle: "Junior Front-end Developer",
    },
    tanya: {
      imageName: "tanya",
      quote: `"I've been interested in coding for a while but never taken the jump, 
      until now. I couldn't recommend this course enough. I'm now in the job of my 
      dreams and so excited about the future."`,
      name: "Tanya Sinclair",
      jobTitle: "UX Engineer",
    },
  };
  return (
    <div className="App">
      <ImageSlider
        data={john ? userData.john : userData.tanya}
        setJohn={setJohn}
      />
      <TestimonialSection data={john ? userData.john : userData.tanya} />
    </div>
  );
}

export default App;
