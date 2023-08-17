import logo from './logo.svg';
import './App.css';
import ThreeScene from './components/ThreeScene';
import { Home } from './components/sections/Home';
import { Navbar } from './components/Navbar';
function App() {
  return (
    
    <div  className="flex flex-col w-full p-5 h-[100vh] bg-gradient-to-r from-[#1e293b]  to-black ">
        <Navbar />
        <Home />
    </div>
  );
}

export default App;
