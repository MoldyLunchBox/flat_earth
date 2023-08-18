import logo from './logo.svg';
import './App.css';
import ThreeScene from './components/ThreeScene';
import { Home } from './components/sections/Home';
import { Navbar } from './components/Navbar';
import { GetInvolved } from './components/sections/GetInvolved';
function App() {
  return (
    
    <div  className=" flex overflow-hidden flex-col w-full h-full  ">
      <div className='h-screen z-1 relative flex flex-col bg-gradient-to-t from-[#1e293b]  to-black'>
       
        <Home />
      <div className='curve'></div>
      </div>
      <div className='h-screen -z-10 bg-[#166534] flex flex-col'>
        <GetInvolved />
        </div>
    </div>
  );
}

export default App;
