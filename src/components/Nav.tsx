import React from 'react'
import {Navbar,Button} from 'flowbite-react'
import Logo from "../assets/logo.png"
import Modals from './Modals';



function Nav() {
    let[dark,setDark]=React.useState(false);


    function goToResume(){
        window.open("https://github.com/darvingaba/", "_blank");
    }


  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Darvin
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button onClick={goToResume}>Resume</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="#about">About</Navbar.Link>

        {/* modal */}
        
 
        <Modals/>
        


      











      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;