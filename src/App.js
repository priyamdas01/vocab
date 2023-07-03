// import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import {useEffect} from 'react';

function App() {
  useEffect(()=>{
    fetch("http://localhost:3000/vocabulary")
    .then(r => r.json())
    .then(data => console.log(data))
}, []);
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
