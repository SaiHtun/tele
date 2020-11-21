import Navbar from './components/Navbar.jsx';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
