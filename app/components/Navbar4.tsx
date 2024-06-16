'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'; // Import icons for caret

export const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [dropdownOpenId, setDropdownOpenId] = useState<number | null>(null);
    const [mobileDropdownOpenId, setMobileDropdownOpenId] = useState<number | null>(null); // For mobile dropdowns
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
  
    const handleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const navItems = [
        { id: 1, link: "home", },
        { id: 2, link: "about", },
        { id: 3, link: "portfolio", subNavItems: [
            { id: 31, link: "port1", },
            { id: 32, link: "port2", },
        ]},
        { id: 4, link: "experience", },
        { id: 5, link: "contact", },
    ];

    const toggleMobileDropdown = (id: number) => {
        setMobileDropdownOpenId(mobileDropdownOpenId === id ? null : id);
    };

    return (
        <nav className={
                isNavOpen
                ? `duration-500 fixed bg-white shadow-xl ${offset > 50 ? 'w-full top-0 p-2 sm:p-3' : 'w-[94%] translate-y-6 rounded-xl p-4 sm:p-6 xs:rounded-b-none'} text-black md:flex md:justify-between md:items-center`
                : `duration-500 fixed bg-white shadow-xl ${offset > 50 ? 'w-full top-0 p-2 sm:p-3' : 'w-[94%] translate-y-6 rounded-xl p-4 sm:p-6'} text-black md:flex md:justify-between md:items-center`
            }>

            <div className='container mx-auto flex justify-between items-center'>

                <a className='text-2xl font-bold' href=""> Logo</a>

                {/* Desktop Navigation Items */}
                <div className={"hidden md:flex"}>
                    {navItems.map(item => (
                        <div 
                            className="relative" 
                            key={item.id}
                            onMouseEnter={() => item.subNavItems && setDropdownOpenId(item.id)}
                            onMouseLeave={() => item.subNavItems && setDropdownOpenId(null)}
                        >
                            <Link
                                className='p-4 hover:rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer flex items-center'
                                href={item.link}
                            >
                                {item.link}
                                {item.subNavItems && (
                                    <span className='ml-1'>
                                        {dropdownOpenId === item.id ? <FaCaretUp /> : <FaCaretDown />}
                                    </span>
                                )}
                            </Link>
                            {item.subNavItems && dropdownOpenId === item.id && (
                                <div className="absolute top-full left-0 bg-white shadow-md rounded-md z-10">
                                    {item.subNavItems.map(subItem => (
                                        <Link
                                            key={subItem.id}
                                            className='block p-4 px-10 hover:rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer'
                                            href={subItem.link}
                                        >
                                            {subItem.link}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Navigation Items */}
                <div className={
                    isNavOpen
                    ? 'duration-500 transition-transform origin-top flex flex-col items-center justify-center rounded-xl px-10 absolute top-20 bg-white w-full p-4 gap-1 left-0 md:hidden md:flex-row'
                    : 'duration-500 scale-y-0 transition-transform origin-top flex flex-col items-center justify-center rounded-xl px-10 absolute top-20 bg-white w-full p-4 gap-1 left-0 md:hidden md:flex-row'
                }>
                    {navItems.map(item => (
                        <div key={item.id} className='w-full'>
                            <div
                                className='p-2 hover:rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer flex items-center justify-between'
                                onClick={() => item.subNavItems && toggleMobileDropdown(item.id)}
                            >
                                <Link href={item.link} className='block flex-grow'>
                                    {item.link}
                                </Link>
                                {item.subNavItems && (
                                    <span>
                                        {mobileDropdownOpenId === item.id ? <FaCaretUp /> : <FaCaretDown />}
                                    </span>
                                )}
                            </div>
                            {item.subNavItems && mobileDropdownOpenId === item.id && (
                                <div className='pl-6'>
                                    {item.subNavItems.map(subItem => (
                                        <Link
                                            key={subItem.id}
                                            className='pl-6 p-2 hover:rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer block'
                                            href={subItem.link}
                                        >
                                            {subItem.link}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Navigation Icon */}
                <div className='md:hidden flex items-center z-50'>
                    <button
                        onClick={handleNav}
                        className={`w-14 h-14 mx-auto bg-green-900 rounded-md flex justify-center items-center relative transform transition-transform duration-500 delay-300
                        ${isNavOpen ? 'rotate-180' : ''}
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
