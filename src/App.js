import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import EventDetail from './components/EventDetail/EventDetail';
import SearchFilter from './components/SearchFilter/SearchFilter';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <SearchFilter/>
      <EventDetail/>
      <Footer/>

      {/* coba link ke pages */}
      
        <Switch>
          <Route path='/about' component={About} /> 
        </Switch>
      </Router>

    </div>
  );
}

export default App;
