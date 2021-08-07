import logo from './logo.svg';
import './App.css';
import {Route,Switch,NavLink} from 'react-router-dom';

const Home = ()=> <h1>Home Link</h1>
const About = ()=> <h1>About Link</h1>
const Contact = ()=> <h1>Contact Link</h1>


function App() {
  return (
    <div className="App">
     <nav>
      <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
      <NavLink exact activeClassName="active-link" to="/about">About</NavLink>
      <NavLink exact activeClassName="active-link" to="/contact">Contact</NavLink>
     </nav>

     <Switch>
       <Route exact path="/" component={Home}></Route>
       <Route exact path="/about" component={About}></Route>
       <Route exact path="/contact" render={()=> <Contact/>}></Route>
     </Switch>

    </div>
  );
}

export default App;
