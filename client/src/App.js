import { Route, Switch } from 'react-router-dom';
import './App.css';
import CreateDog from './components/CreateDog/CreateDog';
import DogDetail from './components/DogDetail/DogDetail';
import Favorites from './components/Favorites/Favorites';

import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';

import LandingPage from './pages/LandingPage/LandingPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {

  return (
    <div className="App">
      <Switch>

        <Route exact path='/'>
          <LandingPage />
          <Footer />
        </Route>
        
        <Route exact path='/home'>
          <Nav />
          <Home />
        </Route>

        {/* <Route path='/dog'>
          <Nav />
        </Route>
        <Route path='/dogs'>
          <Nav />
        </Route>
        
        <Route exact path='/dog/:id/' component={DogDetail}/>
        <Route exact path='/dogs/create' component={CreateDog}/>
        <Route exact path='/dogs/favorites' component={Favorites}/> */}

        <Route path='/dog/:id/'>
          <Nav />
          <Route exact path='/dog/:id/' component={DogDetail}/>
        </Route>

        <Route path='/dogs/favorites'>
          <Nav />
          <Favorites />
        </Route>
        
        <Route path='/dogs'>
          <Nav />
          <CreateDog />
        </Route>

      
        {/* <Route path="*" exact={true}  component={PageNotFound}/> */}
        <Route path="*" component={PageNotFound}/>

      </Switch>
      
    </div>
  );
}

export default App;
