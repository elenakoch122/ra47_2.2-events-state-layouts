import './App.css';
import Store from './components/Store';
import { data } from './data';

function App() {
  return (
    <div className="App">
      <Store products={data} />
    </div>
  );
}

export default App;
