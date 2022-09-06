import logo from './/images/b.png';
import './App.css';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar ></NavBar>
      <header className="App-header  bg-primary">
        <p className='text-center text-secondary'>
          Rooms
        </p>
      </header>
    </div>
  );
}

export default App;
