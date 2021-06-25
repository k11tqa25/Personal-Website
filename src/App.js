import { Route, Switch as Switching} from 'react-router';
import styled from 'styled-components'; 
import Sidebar from './components/Sidebar'
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import { useEffect, useState } from 'react';
import Switch from '@material-ui/core/Switch';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ResumePage from './pages/ResumePage';
import ExperiencePage from './pages/ExperiencePage'
import PortfolioPage from './pages/PortfolioPage';

function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  
  useEffect(()=>{
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () =>{
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false)
    }else{
      setTheme('light-theme');
      setChecked(true)
    }
  }
  return (
    <div className='App'>
        <Sidebar navToggle={navToggle}/>

        <div className="theme">
          <div className="light-dark-mode">
              <div className="left-content">
                <Brightness4Icon />
              </div>
              <div className="right-content">
                <Switch
                  value=""
                  checked={checked}
                  inputProps={{ 'aria-label': '' }}
                  size="medium"
                  onClick={themeToggler}                  
                />
              </div>
            </div>
        </div>

        <div className="ham-burger-menu">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
              <MenuIcon />
          </IconButton>
        </div>

        <MainContentStyled>
          <div className="lines">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
              <div className="line-4"></div>
          </div>
          <Switching>
            <Route path="/Personal-Website/" exact>
              <Homepage theme={theme}/>
            </Route>
            <Route path="/Personal-Website/about" exact>
              <AboutPage/>
            </Route>
            <Route path="/Personal-Website/resume" exact>
              <ResumePage/>
            </Route>
            <Route path="/Personal-Website/experience" exact>
              <ExperiencePage/>
            </Route>
            <Route path="/Personal-Website/portfolio" exact>
              <PortfolioPage/>
            </Route>
          </Switching>
        </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.div`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100%;  
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
  .lines{
        position: absolute;
        min-height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        .line-1, .line-2, .line-3, .line-4{
            /* width: 1px; */
            min-height: 100vh;
            background-color: var(--border-color);
        }
    }
`



export default App;
