import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Homepage from './Start';
import Tasks from './Tasks';
import Mycomponent from './Quote';

function App() {
  return (
    <div >
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Tasks' element={<Tasks />} />
          <Route path='/Quotes' element={<Mycomponent />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
