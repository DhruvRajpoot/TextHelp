import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')
  // const [modeTextColour, setModeTextColour] = useState('dark')
  const [modeTextColour, setModeTextColour] = useState('primary')
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  //Version-1

  // const toggleMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark')
  //     setModeTextColour('light')
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black'
  //     })
  //     document.body.style.background="black"
  //   }
  //   else {
  //     setMode('light')
  //     setModeTextColour('dark')
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })
  //     document.body.style.background="white"
  //   }
  // }


  //Version-2

  const toggleMode = () => {
    if (document.getElementById('1').checked) {
      console.log(document.getElementById('1'))
      setMode('light')
      setModeTextColour('primary')
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      document.body.style.background = "white"
    }

    else if (document.getElementById('2').checked) {
      setMode('dark')
      setModeTextColour('secondary')
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      document.body.style.background = "black"
    }

    else if (document.getElementById('3').checked) {
      setMode('success')
      setModeTextColour('success')
      setMyStyle({
        color: 'white',
        backgroundColor: '#114e5d'
      })
      document.body.style.background = "#114e5d"
    }
  }


  return (
    <>
        <Navbar title="TextHelp" home="Home" mode={mode} modeTextColour={modeTextColour} toggleMode={toggleMode} />
        <TextForm myStyle={myStyle} modeTextColour={modeTextColour} />

      {/* <Router>
        <Navbar title="TextHelp" home="Home" mode={mode} modeTextColour={modeTextColour} toggleMode={toggleMode} />
        <Routes>
          <Route path="/">
            <TextForm myStyle={myStyle} modeTextColour={modeTextColour} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
