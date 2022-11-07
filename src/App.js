
import './Appa.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';

//import Route from react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


  function App() {

  // alert state
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert(
      {
        msg:message,
        typ:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1000);
  }
//dark mode state
  const [mode,setMode]=useState('light');

    const toggleMode = () =>{
      if(mode==='light')
      {
        setMode('dark');
        document.body.style.backgroundColor="#070a17";
        showAlert('Dark mode has been enable','success');
      }
      else{
        setMode('light');
        document.body.style.backgroundColor="white";
        showAlert('White mode has been enable','success');
      }
    }

    return (
      <>
      {/* <div className='main'> */}  

      <Router>

      <Navbar title="Text-Manipulator" toggleMode={toggleMode} mode={mode} home="Home" aboutus="About" />
      <Alert alert={alert}/>
      
          <Routes>
                <Route path="/about" element = {<About mode={mode}/>}/>                                 
                <Route path="/" element = { <TextArea showAlert={showAlert} className = "form"  heading="Enter The Text To Analyze Below" mode={mode}/>}/>  
                            
          </Routes>          

        
      </Router> 
       {/* </div> */}
      </>
    );
  }

  export default App;
