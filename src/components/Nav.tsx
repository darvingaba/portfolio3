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
          <a
            href={CV} download="CV"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800"
          >
            <svg
              className="h-3 sm:h-6 mr-1 pr-1 	rounded-full rotate-90"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            CV
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