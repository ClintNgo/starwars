import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Search from './Components/Search.jsx';
import People from './Components/People.jsx';
import Planet from './Components/Planet.jsx';
import Starship from './Components/Starship.jsx';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter className="App">
                <Search></Search>
          <div className='App'>
            <Switch>
              <Route exact path='/people/:id'>
                <People></People>
              </Route>
              <Route exact path='/planets/:id'>
                <Planet></Planet>
              </Route>
              <Route exact path='/starships/:id'>
                <Starship></Starship>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
