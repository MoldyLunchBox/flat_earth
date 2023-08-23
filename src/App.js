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
import { SvgWave } from './components/SvgWave';
import { ContactMe } from './components/sections/ContactMe';
import { SvgWaves } from './components/SvgWaves';
import { SvgSide } from './components/SvgSide';

function App() {
  return (

    <div className=" flex overflow-hidden  flex-col w-full h-full  ">
      <Navbar />
      {/* home */}
      <section id="home" className='h-full min-h-screen relative flex flex-col bg-gradient-to-t from-[#1e293b]  justify-center to-black'>
        <Home />
      </section>
      {/* get involved */}
      <section id="getInvolved" className='h-screen  min-h-[1000px] relative bg-[#4078D4] flex flex-col  justify-center'>
        <SvgWaves />
        <div className="rain-container -z-4 absolute">
          <div className="rain"></div>
        </div>
        <GetInvolved />
        <SvgSide />
      </section>
      {/* statistics */}
      <section id="crisis" className='relative h-full dark   min-h-screen flex flex-col  justify-center '>
        <Statistics />
        <BigStats />
      </section>
      {/* contact us */}
      <section id="contact" className='relative h-full my-auto text-white bg-[#9A9AF0] min-h-screen   '>
        <SvgWave />
        <div className='h-screen flex items-center my-auto justify-center'>
          <ContactMe />
        </div>

      </section>
    </div>
  );
}

export default App;
