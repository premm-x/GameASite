import React, { useEffect, useState } from 'react';
import axiosInstance from '../axios/userAxios';

const AllUserComment = () => {

    const [userData, setUserData] = useState('');

    useEffect(()=>{

        axiosInstance.get('/userComment').then((res)=>{ 

            setUserData(res.data.userAllData);

         }).catch((err)=>{console.log(err)});

    },[])


    return (
        <div className='bg-black min-h-screen'>
            <h1 className='w-full text-white text-center font-semibold text-2xl pt-5'>All User Feedbacks</h1>
            <div className='w-full px-5 py-4 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 '>
                {userData && userData.map((item, idx)=>{
                    return <div key={idx} className='md:w-96 text-white w-full border-2 border-gray-500 rounded-xl px-4 py-2 m-2'>
                        {<div className='w-full flex items-center justify-end'>
                            <p className='bg-slate-600 px-2 rounded-full'>{idx+1}</p></div>}
                        
                        <p>Name : {item.name}</p>
                        <p>Email : {item.email}</p>
                        <p>Message : {item.message}</p>
                        <div>
                            <p>Stars : {item.star}</p>
                            <p>Time : {item.createdAt}</p>
                        </div>

                    </div>
                })}
            </div>
        </div>
    );
};

export default AllUserComment;
