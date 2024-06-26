'use client';
import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  
    const handleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
  
    const navItems = [
      { id: 1, link: "home",  },
      { id: 2, link: "about", },
      { id: 3, link: "portfolio",  },
      { id: 4, link: "experience", },
      { id: 5, link: "contact",    },
    ];

    return (
        <nav className='translate-x-14 translate-y-6 rounded-xl w-4/5 bg-white text-black p-4 sm:p-6 md:flex md:justify-between md:items-center'>
            <div className='container mx-auto flex justify-between items-center'>
                <a className='text-2xl font-bold' href=""> Logo</a>

                {/* Desktop Navigation Items */}
                <div className={"hidden md:flex"}>
                    {navItems.map(item => (
                        <Link
                            key={item.id}
                            className='p-4 hover:rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer'
                            href={item.link}
                        >
                            {item.link}
                        </Link>
                    ))}
                </div>

                {/* Mobile Navigation Items */}
                {isNavOpen && (
                    <div className={"flex flex-col items-center justify-center rounded-xl px-10 absolute top-[80px] bg-white w-full p-4 gap-1 left-0 md:hidden md:flex-row"}>
                        {navItems.map(item => (
                            <Link
                                key={item.id}
                                className='p-2 hover:rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer'
                                href={item.link}
                            >
                                {item.link}
                            </Link>
                        ))}
                    </div>
                )}


                {/* Mobile Navigation Icon   */}
                <div className='md:hidden flex items-center'>
                    <button
                        onClick={handleNav}
                        className={`w-14 h-14 mx-auto bg-green-900 rounded-md flex justify-center items-center relative transform transition-transform duration-500 delay-300
                        ${ isNavOpen ? 'rotate-180' : ''}
                        `}
                    >
                        <div className="w-[1.5rem] h-4 relative">
                        <span className={`w-full h-0.5 bg-gray-100 rounded-md absolute left-1/2 transform -translate-x-1/2 top-0 duration-300 ease-in-out ${isNavOpen ? 'animate-translateRotate' : 'animate-translateBackRotate'}`}></span>
                        <span className={`w-full h-0.5 bg-gray-100 rounded-md absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 duration-300 ease-in-out ${isNavOpen ? 'opacity-0 delay-300' : 'delay-700'}`}></span>
                        <span className={`w-full h-0.5 bg-gray-100 rounded-md absolute left-1/2 transform -translate-x-1/2 bottom-0 duration-300 ${isNavOpen ? 'animate-translateRotateSecond' : 'animate-translateBackRotateSecond'}`}></span>
                        </div>
                    </button>
                </div>
                
            </div>
        </nav>
    )
}

