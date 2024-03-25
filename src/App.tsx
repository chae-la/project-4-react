import "./App.scss";
import team from "./data/team";
import Card from "./components/Card/Card";
import SearchTeam from "./containers/SearchTeam/SearchTeam";

const App = () => {
  const names = team.map((member) => member.name);
  return (
    <div className="app">
      <h1 className="app__title">Ticket Tracker</h1>
      <div className="app__counter-container">
      <SearchTeam names={names} roles={[]} />
      </div>
    </div>
  );
};
{/* {team.map((member) => (
  <Card key={member.id} name={member.name} role={member.role} />
))} */}

export default App;
