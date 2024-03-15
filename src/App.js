import './App.css';
import Ticket from './ticket/Ticket';
import Form from './form/Form';
import Quiz from './quiz/Quix';

function App() {
  return (
    <div className="App">
      <Form/>
      <Quiz/>
      <Ticket/>
    </div>
  );
}

export default App;
