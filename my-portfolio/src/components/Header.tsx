import React, { useState } from 'react'

const Header: React.FC = () => {

    const [ active, setActive ]= useState("home");
    const navArray= [
        {id: "home", name: "Home"},
        {id: "about", name: "About"},
        {id: "skills", name: "Skills"},
        {id: "contact", name: "Contact"},
    ]
  return (
    <header className="w-full bg-bg/20 sticky top-0 backdrop-blur-md shadow-md py-4 z-1000 shadow-lg opacity-75 shadow-white/3">
      <nav className="max-w-300 mx-auto grid grid-cols-2 items-center px-4">
        <h6 className='justify-self-start text-main font-bold font-serif leading-1.5'>Portfolio!</h6>
        <ul className="justify-self-end flex space-x-6 md:space-x-8 relative">
            { navArray.map((item) => (
                <li onClick={() => setActive(item.id)} key={item.id}>
                    <a href={`#${item.id}`} className="text-main hover:text-primary transition-colors">
                      <h6 className='font-regular font-serif'>
                        {item.name}
                      </h6>
                    </a>
                </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
