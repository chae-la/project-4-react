import "./App.scss";
import team from "./data/team";
import Card from "./components/Card/Card";

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">Ticket Tracker</h1>
      <Card />
    </div>
  );
};

export default App;
