import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import Testcreation from './components/Testcreation';
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route exact path='/' element={<Testcreation></Testcreation>}></Route>
          <Route exact path='/tests' element={<Test></Test>}></Route>

        </Routes>
        </Router>
    </div>
  );
}

export default App;
