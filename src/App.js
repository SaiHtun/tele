import Navbar from './components/Navbar.jsx';
import { Switch, Route } from 'react-router-dom';
// Routes
import Home from './pages/Home';
import Items from './pages/Items';
import Item from './pages/Item';
// components
import Menu from './components/Menu';
import Overlay from './components/Overlay';
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import NavContextProvider from './context/NavContext.jsx';


const { REACT_APP_SPACEID : SPACEID, REACT_APP_ATOKEN : ATOKEN } = process.env;

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${SPACEID}?access_token=${ATOKEN}`,
  cache: new InMemoryCache()
})



function App() {


  return (
    <ApolloProvider client={client}>
      <NavContextProvider>
        <div className="App">
          <Navbar />
          <Menu />
          <Overlay />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/:items">
              <Items></Items>
            </Route>
            <Route exact path="/:category/:itemId">
              <Item></Item>
            </Route>
          </Switch>
        </div>
      </NavContextProvider>
    </ApolloProvider>
  );
}

export default App;
