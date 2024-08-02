import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaBars, FaPhone, FaEnvelope, FaUser,FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';


const SignUp = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signup} = useAuth()
    const navigate=useNavigate()
    const handleSignup=async()=>{
        try{ console.log("first",email)
            await signup(name,phone,email,password)
        }catch(e){
            console.log('u',e)
        }
    }
    return (
        <div className="flex h-screen">
            <div
                className="w-1/2 bg-cover bg-center relative"
                style={{
                    backgroundImage: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Z78dh2qAZBWePOjRfwbIkwHaE7%26pid%3DApi&f=1&ipt=2f4b9b569b143cb249a7a7b6999d064526797df6e3ad7c9bbcd04c7414638eb9&ipo=images)'
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-between text-white p-4">
                    <div className="w-full flex justify-between">
                        <button className="text-2xl flex items-center space-x-2">
                            <FaBars />
                            <span>Menu</span>
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center flex-grow">
                        
                        <div className="text-3xl font-bold">Book Shop</div>
                    </div>
                    <div className="flex space-x-4 mt-4 items-center justify-center">
                        <a href="#" className="text-2xl"><FaFacebook /></a>
                        <a href="#" className="text-2xl"><FaTwitter /></a>
                        <a href="#" className="text-2xl"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <div className="w-3/4">
                    <h1 className="text-3xl mb-6">Sign Up</h1>
                    <p className="mb-4">Please fill your information below</p>
                    <div className="mb-4 relative">
                        <div className="flex items-center p-4 border rounded relative transition-colors duration-300 border-gray-300 focus-within:border-blue-500">
                            <FaUser className="text-gray-500 mr-4" />
                            <input
                                type="text"
                                placeholder=" "
                                className="w-full border-none outline-none"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label className={`absolute left-10 transform transition-all duration-300 ${name ? '-translate-y-6 text-sm' : 'translate-y-0 text-base text-gray-500'}`}>Name</label>
                        </div>
                    </div>
                    <div className="mb-4 relative">
                        <div className="flex items-center p-4 border rounded relative transition-colors duration-300 border-gray-300 focus-within:border-blue-500">
                            <FaPhone className="text-gray-500 mr-4" />
                            <input
                                type="text"
                                placeholder=" "
                                className="w-full border-none outline-none"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <label className={`absolute left-10 transform transition-all duration-300 ${phone ? '-translate-y-6 text-sm' : 'translate-y-0 text-base text-gray-500'}`}>Mobile number</label>
                        </div>
                    </div>
                    <div className="mb-6 relative">
                        <div className="flex items-center p-4 border rounded relative transition-colors duration-300 border-gray-300 focus-within:border-blue-500">
                            <FaEnvelope className="text-gray-500 mr-4" />
                            <input
                                type="email"
                                placeholder=" "
                                className="w-full border-none outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className={`absolute left-10 transform transition-all duration-300 ${email ? '-translate-y-6 text-sm' : 'translate-y-0 text-base text-gray-500'}`}>E-mail</label>
                        </div>
                        <div className="mb-6 relative">
                        <div className="flex items-center p-4 border rounded relative transition-all duration-300 border-gray-300 focus-within:border-blue-600 focus-within:shadow-outline-blue mt-5">
                            <FaLock className="text-gray-500 mr-4" />
                            <input
                                type="password"
                                placeholder=" "
                                className="w-full border-none outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className={`absolute left-10 transform transition-all duration-300 ${password ? '-translate-y-6 text-sm' : 'translate-y-0 text-base text-gray-500'}`}>Password</label>
                        </div>
                    </div>

                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <a href="#" className="text-black"></a>

                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-[125px] h-[50px]" onClick={handleSignup}>Next &gt;</button>
                    </div>
                    <hr className="my-5" />
                    <div className="flex items-center justify-between mb-6">
                        <a href="#" className="text-black">Already have an account</a>
                        <button className="text-blue-500 py-2 px-4 rounded font-bold" onClick={()=>navigate("/login")}>Login to your account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
