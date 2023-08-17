import logo from './logo.svg';
import './App.css';
import ThreeScene from './components/ThreeScene';
import { Home } from './components/sections/Home';
function App() {
  return (
    <div  className="flex w-full  h-[100vh] bg-gradient-to-r from-[#1e293b]  to-black ">
        <Home />
    </div>
  );
}

export default App;
