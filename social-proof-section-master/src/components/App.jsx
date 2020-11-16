const { default: TitleSection } = require("./TitleSection");
const { default: RatingSection } = require("./RatingSection");
const { default: CommentSection } = require("./CommentSection");

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
