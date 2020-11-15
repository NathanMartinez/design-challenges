const { default: CommentSection } = require("./CommentSection");
const { default: RatingSection } = require("./RatingSection");
const { default: TitleSection } = require("./TitleSection");

function App() {
  return (
    <div className="App">
      <TitleSection />
      <RatingSection />
      <CommentSection />
    </div>
  );
}

export default App;
