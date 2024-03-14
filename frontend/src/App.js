import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listening from './pages/Listening';
import Reading from './pages/Reading';
import Writing from './pages/Writing';
import Speaking from './pages/Speaking';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route exact path='/listening' element={<Listening/>}/>
          <Route exact path='/reading' element={<Reading/>}/>
          <Route exact path='/writing' element={<Writing/>}/>
          <Route exact path='/speaking' element={<Speaking/>}/>




        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
