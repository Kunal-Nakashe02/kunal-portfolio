import './App.css';
import Layout from './components/layout';
import Projects from './pages/Projects';
import Techstack from './pages/Techstack';
import About from './pages/about';
import Education from './pages/Education';
import WorkExp from './pages/WorkExp';
import Contact from './pages/Contact';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemeContext';
import Tada from 'react-reveal/Tada';
import MobileNav from './components/mobileNav/MobileNav';


function App() {
  const [theme]=useTheme();
  return (
    <>
    <div id={theme}>
    <MobileNav />
      <Layout/>
      <div className='container'>
      <About/>
      <Education/>
      <Techstack/>
      <Projects/>
      <WorkExp/>
      <Contact/>
      </div>
      <div className='footer pb-3 ms-3'>
        <h4 className='text-center'>
          <Tada>
          Made With MERN 😍 By Kunal Nakashe &copy; 2023
          </Tada>
          
        </h4>
      </div>
      
    </div>
          <ScrollToTop smooth 
          color='#f29f67'
          style={{backgroundColor:"#1e1e2c",borderRadius:"80px",}}
          />
    </>
  );
}

export default App;
