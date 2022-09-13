import './App.css';
import NavBar from './components/Navbar';

function App() {
  return (
    <div sx={{ display: 'flex' }}>
      <NavBar />
      <header className="App-header  bg-primary">
        <p className='text-center text-secondary'>
          Rooms
        </p>
      </header>
    </div>
  );
}

export default App;
