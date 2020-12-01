import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      <UserGreeting />
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}

      {/* <Greet name="Nibir" gfName="bolbona" />
      <Welcome name="Joy" gfName="nai" /> */}
      {/* <Greet name="Robaith" gfName="abc" >
        <p>This is children props</p>
      </Greet>
      <Greet name="Joy" gfName="nai" >
        <button>Submit</button>
      </Greet>
      <Greet name="Nibir" gfName="bolbona" />

      <Welcome name="Robaith" gfName="abc" />
      <Welcome name="Joy" gfName="nai" />
      <Welcome name="Nibir" gfName="bolbona" /> */}
    </div>
  );
}

export default App;
