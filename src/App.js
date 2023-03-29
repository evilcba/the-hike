
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Mainpage from './components/Mainpage/Mainpage';
import Availability from './components/Avaliability/Availability';


function App() {
  return (
    <div className="App">
      <div className='bg-gradient-to-b from-teal-500 to-transparent via-teal-500'>
      <Navbar/>
      <Mainpage/>
      <Availability/>
      </div>
     
    </div>
  );
}

export default App;
