import './App.css';
import Header from './Component/Header/Header';
import Quesions from './Component/Quesions/Quesions';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Quesions></Quesions>
      
    </div>
  );
}

export default App;
