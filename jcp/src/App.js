import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainView from './views/MainView/MainView.jsx';


function App() {
  return (
    <div className="app">

    <Router>
        <Switch>
          <Route path="/" exact component={props =>
            <div>
              <MainView />
            </div>
          }/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
