
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Nazmul Haque Shakil</h3>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>
          <div>
            <p className="text-muted-foreground">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            Designed and Developed By (NS)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
