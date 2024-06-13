 //App.js
import './App.css';
import DirectorList from './component/DirectorList';
import Counter from './component/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <Counter/> 
      <DirectorList/>
    </div>
  );
}

export default App;
