import './App.css';
import Ticket from './ticket/Ticket';
import Form from './form/Form';
import Quiz from './quiz/Quix';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/ticket' element={<Ticket/>}/>
      </Routes>
    </div>
  );
}

export default App;
