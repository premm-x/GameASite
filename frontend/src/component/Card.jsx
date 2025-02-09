import React from 'react';

const data = [
    {
        image: "https://plus.unsplash.com/premium_photo-1716242969673-d5db082e0b75?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "A dark era",
        para:"Welcome to the ultimate gaming experience! Get ready to dive into a world of adventure and excitement.",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1715885662348-bba72d3c2819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        title: "A dark era",
        para:"Welcome to the ultimate gaming experience! Get ready to dive into a world of adventure and excitement.",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1716242969725-0619183aaacf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "A dark era",
        para:"Welcome to the ultimate gaming experience! Get ready to dive into a world of adventure and excitement.",
    },
]

const Card = () => {
    return (
        <div className='w-full h-[900px] md:mt-24 mt-48 flex items-center justify-center md:gap-36 gap-5 flex-col'>

            <h1 className='text-white font-semibold mt-8 text-4xl text-center'>Key Features</h1>
        
            <div className='px-4 flex mb-10 items-center justify-center md:gap-20 md:flex-row flex-col'> 

                {
                    data.map((item, idx)=>(

                        <div key={idx} className='mt-10 w-[300px] gap-5 flex items-center justify-between flex-col text-white p-3 rounded-lg'>

                            <div className=' flex items-center justify-center rounded-xl'>
                                <img className='w-[300px] h-40 object-cover object-center rounded-xl' src={item.image}/>
                            </div>

                            <p className='text-lg font-semibold'>
                                {item.title}
                            </p>

                            <p className='text-center text-base font-semibold'>
                                {item.para}
                            </p>

                        </div>

                    ))
                }

            </div>

        </div>
    );
};

export default Card;