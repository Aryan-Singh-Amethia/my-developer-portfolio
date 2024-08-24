import './App.css';
import RotatingLogo from './Components/rotatingLogo/rotatingLogo.jsx';
import NewHero from './Components/hero/index.jsx';
import About from './Components/about/index.jsx';
import withLayout from './Layout/layout.jsx';
import { useMediaQuery } from 'react-responsive';
import AboutMobile from './Components/about/AboutMobile.jsx';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 1183px)' });
  return (isMobile ? (
      <div className='mweb_home_container'>
        <NewHero isMobile={isMobile}/>
        <AboutMobile/>
      </div>
    ) :
    (<div className='home_container'>
        <RotatingLogo/>
        <NewHero/>
        <About/>
    </div>)
  );
}

export default withLayout(App);
