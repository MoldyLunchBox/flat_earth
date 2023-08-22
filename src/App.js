import logo from './logo.svg';
import './App.css';
import ThreeScene from './components/ThreeScene';
import { Home } from './components/sections/Home';
import { Navbar } from './components/Navbar';
import { GetInvolved } from './components/sections/GetInvolved';
function App() {
  return (

    <div className=" flex overflow-hidden  flex-col w-full h-full  ">
      <section className='h-screen relative flex flex-col bg-gradient-to-t from-[#1e293b]  to-black'>
        <Home />
        <div className='curve'></div>
      </section>

      <section className='h-screen relative -z-10 bg-[#1e3a8a] flex flex-col justify-center'>
        <GetInvolved />
        <div className='bubble justify-end '></div>

      </section>

      <section className='h-screen dark   flex flex-col'>
        <GetInvolved />
      </section>
    </div>
  );
}

export default App;
