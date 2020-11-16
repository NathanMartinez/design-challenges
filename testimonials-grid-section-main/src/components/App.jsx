import Card from "./Card";
import data from "../cardData/";

function App() {
  return (
    <div className="App">
      {data.map(({ imageName, name, title, quote }, i) => (
        <Card
          key={i}
          imageName={imageName}
          name={name}
          title={title}
          quote={quote}
        />
      ))}
    </div>
  );
}

export default App;
