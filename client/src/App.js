import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'; 
import LandingPage from './components/LandingPage';
import DogDetail from './components/DogDetail'
import DogCreate from './components/DogCreate'

function App() {
  return (
    
      <Switch>
        <div className='App'>
          <Route exact path= '/' component={LandingPage}/>
          <Route exact path= '/home' component={Home}/>
          <Route exact path= '/dog/:id' component={DogDetail}/>
          <Route exact path= '/dog' component={DogCreate}/>
        </div>
      </Switch>
    
  );
}

export default App;
