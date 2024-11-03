import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((array) => {
    return <Card key={array.id} {...array} />;
  });

  return (
    <div className="w-[550px] mx-auto">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
