import './App.css';
import LoginForm from './Pages/LoginForm';
import Signup from './Pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import More from './Pages/More';





function App() {
  

  return (

<>
    <BrowserRouter>
    <Navbar />

      <Switch>
      <Route path="/"  component={Home} exact />
        <Route path="/Login" component={LoginForm} exact />
        <Route path="/Signup" component={Signup} exact />
        <Route path="/Home" component={Home} exact />
        <Route path="/More/:id" component={More} />
      


      </Switch>
    </BrowserRouter>

</>



  );
}

export default App;