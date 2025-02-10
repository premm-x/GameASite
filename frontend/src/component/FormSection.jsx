import React, { useState } from 'react';
import axiosInstance from '../axios/userAxios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const FormSection = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [star, setStar] = useState(0);

    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');

    const [divColor, setDivColor] = useState('bg-gray-900');

    const changeDivColor = () => {
        if(divColor == 'bg-gray-900'){
            setDivColor('bg-green-500');
            navigate('/admin')
        }
        else{
            setDivColor('bg-gray-900');
        }
    };

    const submitHandler = (e) =>{
        e.preventDefault();

        if(name.length < 3){
            setError('name must be 3 character long');
            return;
        }
        setError('')

        if(email.length < 8){
            setEmailError('email must be 5 character long');
            return;
        }
        setEmailError('')
        

        axiosInstance.post('/userdata', {
            name, email, message, star
        }).then(()=>{
            Swal.fire({
                title: "Thanks for feedback",
                icon: "success",
                draggable: true
              });
        }).catch((err)=>{
            console.log(err);
        })

        console.log(star)

        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div className='h-screen mt-56 relative w-full'>
            <h2 className='text-white font-semibold mt-8 text-4xl text-center mb-10'>Give Your Valuble Feedback</h2>
            <div className='w-full relative'>
                <div className='w-full h-full bg-black opacity-[0.6] absolute'></div>
                <img className='w-full h-[395px] max-h-[450px] object-cover object-center' src="https://plus.unsplash.com/premium_photo-1716078137386-09bb98549dd3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            
                <form onSubmit={submitHandler} className='absolute w-[100%] md:w-auto top-0 md:top-10 md:left-16 px-5 py-5  flex items-center justify-center flex-col gap-7'>
                    <div className='w-full flex items-start justify-center gap-4 md:flex-row flex-col'>
                        <div className='flex w-full justify-center flex-col'>
                            <label className='text-white font-semibold text-xl mb-2' htmlFor="name">Name:</label>
                            <input className='rounded-lg  px-3 py-2 border-none' 
                               value={name} onChange={(e)=>{setName(e.target.value)}} required type="text" id="name" name="name" placeholder='Your Name' />
                               { error && <p className='text-red-500 font-medium text-sm mt-2 text-center'>{error}</p>}
                        </div>
                        <div className='flex  w-full justify-center flex-col'>
                            <label className='text-white font-semibold text-xl mb-2' htmlFor="name">Email:</label>
                            <input className='rounded-lg  px-3 py-2 border-none' 
                               value={email} onChange={(e)=>{setEmail(e.target.value)}} required type="email" id="email" name="email" placeholder='Your Email' />
                               { emailError && <p className='text-red-500 font-medium text-sm mt-2 text-center'>{emailError}</p>}
                        </div>
                    </div>
                    <div className='flex  w-full justify-center flex-col'>
                        <label className='text-white font-semibold text-xl mb-2' htmlFor="message">Message:</label>
                        <textarea className='rounded-lg px-3 py-2 border-none ' 
                           value={message} onChange={(e)=>{setMessage(e.target.value)}} required name="message" id="message" placeholder='Your Message'></textarea>
                    </div>
                    <div className='w-full flex justify-between' >
                        <div className='flex items-center ml-5'>
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    onClick={() => setStar(index + 1)}
                                    key={index}
                                    className={`w-5 h-5 mr-1 ${star > index ? 'text-yellow-400' : 'text-white'} cursor-pointer`}
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                    name='star'
                                >
                                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.245 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z' />
                                </svg>
                            ))}
                        </div>
                        <button className='bg-black border-[1px] border-gray-900 rounded-lg px-3 py-2 text-white hover:bg-gray-950' type="submit">Submit</button>
                    </div>
                </form>
            </div>

            <div onClick={changeDivColor} 
            className={` ${divColor} w-1 h-1 cursor-pointer opacity-[0.5] md:w-2 md:h-2 rounded-full absolute bottom-5 right-5`}></div>
        
        </div>
    );
};

export default FormSection;
