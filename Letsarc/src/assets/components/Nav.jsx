import React from 'react';
import Logo from './images/pg.png';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-secondary shadow-md">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10 mr-2 pl-9" />
      </div>
    </div>
  );
};

export default Navbar;
