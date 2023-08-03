import React, { useRef, useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Header = () => {
    const [open, setOpen] = useState(false);
    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc()
        return window.removeEventListener('scroll', stickyHeaderFunc)
    }, [])

    const handleClick = (e) => {
        e.preventDefault()

        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop

        window.scrollTo({
            top: location - 80,
            left: 0,
        })
    }

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
    return (
        <header ref={headerRef} className='w-full h-[80px] leading-[80px] flex items-center'>
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* ===========logo start=========== */}
                    <div className="flex items-center gap-[10px]">
                        <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center" >
                            AJ
                        </span>
                        <div className="leading-[20px]">
                            <h2 className='text-lg text-smallTextColor font-[700]'>Abhishek Jadon</h2>
                            <p className='text-smallTextColor text-[14px] font-[500]'>Portfolio</p>
                        </div>
                    </div>
                    {/* =============logo end============= */}

                    {/* =============menu start============= */}

                    <div onClick={() => setOpen(!open)} className="menu lg:block md:pr-6">
                        <ul className={`md:flex md:items-center gap-9 md:pb-0 pb-12 absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in cursor-pointer z-10 ${open ? "top-[4rem]" : "top-[-490px]"
                            }`}>
                            <li><a onClick={handleClick} className='text-smallTextColor font-[400]' href="#about">About</a></li>
                            <li><a onClick={handleClick} className='text-smallTextColor font-[400]' href="#services">Services</a></li>
                            <li><a onClick={handleClick} className='text-smallTextColor font-[400]' href="#portfolio">Portfolio</a></li>
                            <li><a onClick={handleClick} className='text-smallTextColor font-[400]' href="#contact">Contact</a></li>
                        </ul>
                    </div >
                    {/* =============menu end============= */}


                    {/* =============menu right============= */}
                    <div className="flex items-center gap-4 mr-6 md:mr-0">
                        <button className='flex items-center gap-2 text-smallTextColor font-[400] border border-solid border-smallTextColor py-2 md:px-4 px-2 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[300]'>
                            <i class="ri-send-plane-line"></i>Let's Talk
                        </button> </div>

                    <div
                        onClick={() => setOpen(!open)}
                        className="text-2xl absolute right-3 top-7 cursor-pointer md:hidden"
                    >
                        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </div>

                    {/* =============menu rigt end============= */}

                </div >
            </div >
        </header >
    )
}

export default Header
