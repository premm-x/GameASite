import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

const data = [
    {
        image: "https://plus.unsplash.com/premium_photo-1716242969673-d5db082e0b75?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1716242969725-0619183aaacf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1716242969558-f70182f2b992?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
]

const Banner = () => {

    const [toolSidebar, setToolSidebar] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="banner gap-14 flex items-center justify-center relative ">

            <div className='w-full h-[100vh] flex items-center justify-center relative'>
                <nav className='w-full text-lg h-20 flex z-10 md:gap-20 gap-12 items-center justify-center absolute top-0 left-0 text-white'>
                    <Link to={"/team"} className='hover:text-xl duration-2'>Team</Link>
                    <p onClick={()=>{setToolSidebar(!toolSidebar)}} className='hover:text-xl duration-2 cursor-pointer'>Tools</p>
                    <Link to={"/assets"} className='hover:text-xl duration-2'>Assets</Link>
                </nav>

                <div className='w-full h-full bg-black opacity-[0.5] absolute'></div>
                <img className='w-full h-full object-cover object-center' src={data[currentImageIndex].image}/>
                
                <div className='absolute flex items-center justify-center flex-col'>
                    <p className='text-white md:text-8xl text-4xl font-semibold'>A NEW BEGINNING</p>
                    <div className='md:w-[450px] w-[300px] '>
                        <p className='text-white md:text-xl text-base mt-10 text-center'>Welcome to the ultimate gaming experience! Get ready to dive into a world of adventure and excitement.</p>
                    </div>
                </div>
            </div>

            {/* sidebar */}
            
                <div className={`md:w-[80%] w-screen  h-screen ${toolSidebar == true ? 'flex' : 'hidden'} bg-black bg-opacity-[0.5] backdrop-blur-lg text-white fixed top-0 right-0 z-30 items-start flex-col`}>
                    <svg onClick={()=>{setToolSidebar(!toolSidebar)}} xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 cursor-pointer m-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                    <div className='flex items-center h-[89%] justify-between py-8 px-14 flex-col'>
                        <h1>Tools Detail's</h1>
                        <div className=' h-[80%] w-full p-2 overflow-auto'>
                            <p>Khel kabddi Khel kabddi Khel kabddi Khel kabddi Khel kabddi Khel kabddiv Khel kabddiKhel kabddi</p>
                            <p>Khel kabddi Khel kabddi Khel kabddi Khel kabddi Khel kabddi Khel kabddiv Khel kabddiKhel kabddi</p>
                            <p>Khel kabddi Khel kabddi Khel kabddi Khel kabddi Khel kabddi Khel kabddiv Khel kabddiKhel kabddi</p>
                            <p>Khel kabddi Khel kabddi Khel kabddi Khel kabddi Khel kabddi Khel kabddiv Khel kabddiKhel kabddi</p>
                            <p>Khel kabddi Khel kabddi Khel kabddi Khel kabddi Khel kabddi Khel kabddiv Khel kabddiKhel kabddi</p>
                            
                        </div>
                    </div>

                </div>

        </div>
    );
};

export default Banner;
