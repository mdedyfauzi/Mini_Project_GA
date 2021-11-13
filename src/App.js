import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import About from './pages/About';
import EventDetail from './components/EventDetail/EventDetail';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <EventDetail/>
      <Footer/>

      {/* coba link ke pages
      <Router>
        <Switch>
          <Route path='/about' component={About} /> 
        </Switch>
      </Router> */}

    </div>
  );
}

export default App;
