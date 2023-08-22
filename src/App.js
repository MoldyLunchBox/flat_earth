import logo from './logo.svg';
import './App.css';
import ThreeScene from './components/ThreeScene';
import { Home } from './components/sections/Home';
import { Navbar } from './components/Navbar';
import { GetInvolved } from './components/sections/GetInvolved';
import { Statistics } from './components/sections/Statistics';
import { BigStats } from './components/BigStats'
import Particles from 'react-tsparticles';
import { ParticlesContainer } from './components/ParticlesContainer';

function App() {
  return (

    <div className=" flex overflow-hidden  flex-col w-full h-full  ">

      <section className='h-screen min-h-[1000px] relative flex flex-col bg-gradient-to-t from-[#1e293b]  justify-center to-black'>
        <Home />
        <div className='curve'></div>
      </section>

      <section className='h-screen min-h-[1000px] relative -z-10 bg-[#1e3a8a] flex flex-col  justify-center'>
        <GetInvolved />
        <div className='bubble justify-end '></div>

      </section>

      <section className='relative h-full dark   min-h-[1000px] flex flex-col  justify-center '>
      <ParticlesContainer />
       
        <Statistics />
      <BigStats/>
      </section>
    </div>
  );
}

export default App;
