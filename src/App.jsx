import React from 'react';
import SideNav from './Navigation/Navbar';
import About from './Components/About';
import styles from './styles.module.css';
function App() {
  const mainStyles = {
    height: '100vh',
    width: '100%',
    display: 'flex',
  };
  return (
    <div style={mainStyles}>
    <SideNav/>
    <About/>
    </div>
  );
}

export default App;
