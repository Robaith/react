import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Robaith" gfName="abc" >
        <p>This is children props</p>
      </Greet>
      <Greet name="Joy" gfName="nai" >
        <button>Submit</button>
      </Greet>
      <Greet name="Nibir" gfName="bolbona" />

      <Welcome name="Robaith" gfName="abc" />
      <Welcome name="Joy" gfName="nai" />
      <Welcome name="Nibir" gfName="bolbona" />
    </div>
  );
}

export default App;
