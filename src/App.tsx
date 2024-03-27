import "./App.scss";
import SearchTeam from "./containers/SearchTeam/SearchTeam";


const App = () => {

  return (
    <div className="app">
      <h1 className="app__title">Ticket Tracker</h1>
      
      <div className="app__search-team-container">
      <SearchTeam  />
      </div>
    </div>
  );
}; 


export default App;
