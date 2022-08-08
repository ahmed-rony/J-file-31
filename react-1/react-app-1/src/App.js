
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';


function App() {
  const students = ['Ron', 'Hermonie', 'Ginny', 'Luna']
  return (
    <div className="App">
      <header className="App-header">
        <h2 className='bg-danger'>Hi! I'm Harry.. Harry Potter</h2>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Person house ="Gryffindor" name= {students[3]}></Person>
        <Person name= {students[2]}></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person(props){  // props = properties;
  const personStyle = {
    color: 'yellow'
  }
  console.log(props)
  return (
    <div style={{border: '2px solid #fff', margin: '10px 0', padding: '10px'}}>
      <h1>My name is {props.name}</h1>
      <h1 >I'm a {props.house}</h1>
      <h2 style={personStyle}>Lumos</h2>
    </div>
  );
}

export default App;
