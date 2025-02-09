import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Assets = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');

    const [nameError, setNameError] = useState('');
    const [passError, setPassError] = useState('');

    const passwordTypeHandler = () =>{
        if(passwordType == 'password'){
            setPasswordType('text');
            document.getElementById('pass').textContent = 'hide';
        }
        else{
            setPasswordType('password');
            document.getElementById('pass').textContent = 'show';
        }
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        
        if(name == 'prem'){
            setNameError('')
            if(password == '12345'){
                setPassError('')
                console.log("great");
                navigate('/usercomment')
            }
            else{
                setPassError('password is wrong');
                return
            }
        }
        else{
            setNameError('username is wrong');
            return
        }

        setName('');
        setPassword('');
    }

    return (
        <div className='text-white bg-black min-h-screen flex items-center justify-center'>

            <form onSubmit={submitHandler} className='bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className='mb-4'>
                    <label className='block text-white text-sm font-bold mb-2' htmlFor='username'>
                        Username
                    </label>
                    <input
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                        id='username'
                        type='text'
                        placeholder='Username'
                    />
                    {nameError && <p className='text-red-500 font-medium text-sm mt-2 text-center'>{nameError}</p>}
                </div>
                <div className='mb-6'>
                    <label className='block text-white text-sm font-bold mb-2' htmlFor='password'>
                        Password
                    </label>
                    <div className='flex '>
                        <input
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            className='shadow appearance-none bg-white border rounded-tl-md rounded-bl-md border-none w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline'
                            id='password'
                            type={passwordType}
                            placeholder='******************'
                        />
                        <p id='pass' 
                        className='cursor-pointer pr-1 h-[36px] bg-white rounded-tr-md rounded-br-md text-black flex items-center justify-center' 
                        onClick={passwordTypeHandler}>show</p>
                    </div>
                    {passError && <p className='text-red-500 font-medium text-sm mt-2 text-center'>{passError}</p>}
                </div>
                <div className='flex items-center justify-between'>
                    <button
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        type='submit'
                    >
                        Sign In
                    </button>
                </div>
            </form>  

        </div>
    );
};

export default Assets;
