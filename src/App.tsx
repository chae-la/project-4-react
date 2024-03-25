import "./App.scss";
import team from "./data/team";
import Card from "./components/Card/Card";

const App = () => {
  
  return (
    <div className="app">
        <h1 className="app__title">Ticket Tracker</h1>
      <div className="app__counter-container">
      {team.map(member => (
        <Card key={member.id} name={member.name} role={member.role} />
      ))}

      </div>
    </div>
  );
};

export default App;
