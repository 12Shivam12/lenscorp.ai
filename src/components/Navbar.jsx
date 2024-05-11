import { Link } from '@chakra-ui/react';
import React, { useState } from 'react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="fixed w-full top-0 left-0 flex justify-center items-center z-[99] py-1 px-0 transition duration-500 bg-white  head" style={{ display: "flex" }}>
                <nav className="flex w-[85%] justify-between items-center ">
                    <div>
                        <button className=" max-w-[90px] max-h-[80px]">
                            <img alt="logo" loading="lazy" width="80" height="70" decoding="async" data-nimg="1"
                                className='text-transparent mt-2 pt-[2px]'
                                src='https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=256&q=75' />
                        </button>
                    </div>
                    <div className="nav__menu-bar" onClick={() => setIsOpen(!isOpen)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="nav__menu-list">
                        <div>
                            <button className="nav__link" target="_blank" style={{ color: "black" }}
                                rel="noreferrer">MakeMyWeb.</button>
                        </div>
                        <div>
                            <Link
                                className="text-black nav-link active"
                                aria-current="page"
                                to="/signup" >Home
                            </Link>
                        </div>
                        <div>
                            <Link
                                className="text-black nav-link active"
                                aria-current="page"
                                to="/login" >Company
                            </Link>
                        </div>
                        <div>
                            <Link
                                className="nav-link active"
                                aria-current="page"
                            >Blogs
                            </Link>
                        </div>

                        <button className="flex themeBtn" >
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="switch iconify iconify--ic" width="24" height="24" viewBox="0 0 24 24" style={{ color: "black" }}><path fill="currentColor" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1"></path></svg>
                        </button>

                    </div>
                </nav>
            </header>



        </>
    )
}

export default Navbar
