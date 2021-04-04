import logo from './logo.svg';
import './App.css';
import Level from './Hello';
import Header from './components/Header';
import Footer from './components/Footer';
import {Home} from './components/Home';
import { Main } from './components/Main';
import { Clock } from './components/Clock';
import { Navbar } from './Navbar';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import { Create } from './components/Create';
import { ProductDetails } from './components/ProductDetails';

function App() {
  return (/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>s
    </div>*/
    <Router>
    <div>
      {/*
    <Header title="IMS"></Header>
    <Clock/>
    <Home></Home>
    <Navbar></Navbar>
    <Level></Level>
    <Main></Main>
    <Footer title="Copyrights reserved"></Footer>
      */}
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/create">
        <Create/>
        </Route>
        <Route path="/products/:id">
        <ProductDetails/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
