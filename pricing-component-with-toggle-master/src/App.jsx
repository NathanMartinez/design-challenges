const { default: Card } = require("./components/Card");

function App() {
  return (
    <div className="App">
      <Card
        packageType="Basic"
        price="199.99"
        storageAmt="500 GB"
        userCount="2"
        sendAmt="3"
      />
      <Card
        packageType="Professional"
        price="249.99"
        storageAmt="1 TB"
        userCount="5"
        sendAmt="10"
        accent={true}
      />
      <Card
        packageType="Master"
        price="399.99"
        storageAmt="2 TB"
        userCount="10"
        sendAmt="20"
      />
    </div>
  );
}

export default App;
