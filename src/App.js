import Navbar from './components/Navbar.jsx';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import NavContextProvider from './context/NavContext.jsx';

const { SPACEID, ATOKEN } = process.env;

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/4fhknrnoq500?access_token=sVA9Y3AJ8sCyQCgpXY7VNncjajIHlTWV1hN05ZK6yws`,
  cache: new InMemoryCache()
})



function App() {


  return (
    <ApolloProvider client={client}>
      <NavContextProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </NavContextProvider>
    </ApolloProvider>
  );
}

export default App;
