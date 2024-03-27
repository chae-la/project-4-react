import "./App.scss";
import team from "./data/team";
import SearchTeam from "./containers/SearchTeam/SearchTeam";


const App = () => {
  const names = team.map((member) => member.name);
  const role = team.map((mem) => mem.role)
  return (
    <div className="app">
      <h1 className="app__title">Ticket Tracker</h1>
      
      <div className="app__search-team-container">
      <SearchTeam names={names} roles={role} />
      </div>
    </div>
  );
}; 


export default App;
