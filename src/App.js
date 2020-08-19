import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Layout from './Components/Layout';
import PosView from './Components/PosView';
import HistoryView from './Components/HistoryView';
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <PosView/>
          </Route>
          <Route path="/history">
            <HistoryView/>
          </Route>
        </Switch>
      </Layout>
    </Router>

  );
}
export default App;
