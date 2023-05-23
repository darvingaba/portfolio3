import React from 'react'
import {Navbar,Button} from 'flowbite-react'
import Logo from "../assets/logo.png"



function Nav() {
    let[dark,setDark]=React.useState(false);


    function goToResume(){
        window.open("https://github.com/darvingaba/", "_blank");
    }


  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src={Logo}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
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
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;