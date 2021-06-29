import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.scss'
import DataPage from './pages/data-page/DataPage';
import HomePage from './pages/home-page/HomePage';
import StatsPage from './pages/stats-page/StatsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/data" exact component={DataPage} />
        <Route path="/stats" exact component={StatsPage} />
        <Route path="*" render={() => <Redirect to="/"/>} />
      </Switch>
    </Router>
  );
}

export default App;
