import React from 'react'
import {Navbar,Button} from 'flowbite-react'
import Logo from "../assets/logo.png"
import CV from "../assets/CV.pdf"
import download from "../assets/download-circular-button.png"
import Modals from './Modals';



function Nav() {
    let[dark,setDark]=React.useState(false);





  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Darvin
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <a href={CV} download="CV">
          <Button>
            <img
              className="h-6 sm:h-6 mr-1 pr-1 	rounded-full"
              src={download}
              alt=""
            />
            CV
          </Button>
        </a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="#about">About</Navbar.Link>

        {/* modal */}

        <Modals />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;