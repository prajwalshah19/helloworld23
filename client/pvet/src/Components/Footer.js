import "./styles.css";
import reactLogo from "./reactLogo.png";
import React from 'react';

function Footer() {
    return (
        <footer className="bg-clear text-white py-3 absolute bottom-0 w-full shadow-md">
        <div className="container mx-auto text-center flex flex-center justify-center">
            <img  src = {reactLogo} />
            <p className = "pt-2">&copy; Prajwal Shah, Vihaan Chadha, Eli Dubizh, Tristan Sze -- HelloWorld 2023</p>
            
          </div>
        </footer>
      );
    };
    
    export default Footer;